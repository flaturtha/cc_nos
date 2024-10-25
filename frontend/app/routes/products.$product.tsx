import { json, LoaderFunction, MetaFunction } from '@remix-run/node';
import { useLoaderData, useParams, useTransition } from '@remix-run/react';
import { useState, useEffect } from 'react';
import { BookOpen } from 'lucide-react';
import client from '../utils/sanityClient';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

const bookFormats = [
  { name: 'eBook', image: '/placeholder.svg?height=600&width=400', price: '$9.99' },
  { name: 'Kindle', image: '/placeholder.svg?height=400&width=300', price: '$9.99' },
  { name: 'Paperback', image: '/placeholder.svg?height=500&width=350', price: '$19.99' },
  { name: 'Hardcover', image: '/placeholder.svg?height=600&width=600', price: '$24.99' },
  { name: 'Large Print', image: '/placeholder.svg?height=600&width=400', price: '$29.99' },
];

export const loader: LoaderFunction = async ({ params }: { params: { product: string } }) => {
  console.log("Loader params:", params);
  
  // First, try to fetch the book with the exact slug
  const query = `*[_type == "product" && slug.current == $slug][0]{
    title,
    "author": author->name,
    "genre": genre->title,
    description,
    editions,
    pageCount,
    o_publishedAt,
    o_publishedBy,
    coverImage,
    ...,  // This will include all other fields
  }`;

  try {
    let bookData = await client.fetch(query, { slug: params.product });
    
    // If no book is found, try a fuzzy match
    if (!bookData) {
      const fuzzyQuery = `*[_type == "product" && slug.current match $slug][0]{
        title,
        "author": author->name,
        "genre": genre->title,
        description,
        editions,
        pageCount,
        o_publishedAt,
        o_publishedBy,
        coverImage,
        ...,  // This will include all other fields
      }`;
      bookData = await client.fetch(fuzzyQuery, { slug: `${params.product}*` });
    }

    console.log("Fetched book data:", JSON.stringify(bookData, null, 2));
    if (!bookData) {
      throw new Error("No book data found");
    }
    return json({ book: bookData });
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return json({ error: error instanceof Error ? error.message : "Unknown error occurred" });
  }
};

export const meta: MetaFunction = ({ data }) => {
  if (!data || !data.book) {
    return [
      { title: 'Book Not Found' },
      { name: 'description', content: 'The requested book could not be found.' },
    ];
  }
  return [
    { title: `${data.book.title} by ${data.book.author}` },
    { name: 'description', content: data.book.description || `Read ${data.book.title} by ${data.book.author}` },
  ];
};

interface BookData {
  title?: string;
  author?: string;
  genre?: string;
  description?: string;
  editions?: {
    epub?: { isbn: string; price: number };
    kindle?: { isbn: string; price: number };
    paperback?: { isbn: string; price: number };
    hardcover?: { isbn: string; price: number };
    largePrint?: { isbn: string; price: number };
  };
  pageCount?: number;
  o_publishedAt?: { yearOnly: number };
  o_publishedBy?: string;
  coverImage?: { asset: { _ref: string } };
}

export default function ProductPage() {
  const params = useParams();
  const data = useLoaderData<{ book?: BookData; error?: string }>();
  const transition = useTransition();
  console.log("Loader data in component:", data);
  console.log("URL params:", params);

  const [selectedFormat, setSelectedFormat] = useState(bookFormats[0]);
  const [currentISBN, setCurrentISBN] = useState<string>('Not available');
  const [currentPrice, setCurrentPrice] = useState<string>('Not available');

  useEffect(() => {
    if (data.book && data.book.editions) {
      const edition = data.book.editions[selectedFormat.name.toLowerCase() as keyof typeof data.book.editions];
      if (edition) {
        setCurrentISBN(edition.isbn || 'Not available');
        setCurrentPrice(edition.price ? `$${edition.price.toFixed(2)}` : 'Not available');
      } else {
        setCurrentISBN('Not available');
        setCurrentPrice('Not available');
      }
    }
  }, [selectedFormat, data.book]);

  const renderValue = (value: string | number | undefined | null): string => {
    if (value === null || value === undefined) return 'Not available';
    return value.toString();
  };

  const renderPublicationDate = (date: { yearOnly: number } | undefined): string => {
    if (date && 'yearOnly' in date) {
      return date.yearOnly.toString();
    }
    return 'Not available';
  };

  if (transition.state === "loading") {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (data.error) {
    return <div className="text-center py-8 text-red-600">Error: {data.error}</div>;
  }

  if (!data.book || Object.keys(data.book).length === 0) {
    return <div className="text-center py-8">No book data available. Please check the URL and try again.</div>;
  }

  const imageUrl = data.book.coverImage?.asset?._ref
    ? builder.image(data.book.coverImage.asset._ref).url()
    : selectedFormat.image;

  return (
    <div className="container mx-auto px-4 py-8">
      <article>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden" style={{ aspectRatio: '1' }}>
            <img
              src={imageUrl}
              alt={`Cover of ${renderValue(data.book.title)}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{renderValue(data.book.title)}</h1>
              <p className="text-lg mb-2">by {renderValue(data.book.author)}</p>
              <p className="text-sm text-gray-600 mb-4">Genre: {renderValue(data.book.genre)}</p>
              <select 
                className="w-full mb-4 p-2 border rounded"
                onChange={(e) => setSelectedFormat(bookFormats.find(format => format.name === e.target.value) || bookFormats[0])}
              >
                {bookFormats.map((format) => (
                  <option key={format.name} value={format.name}>
                    {format.name} - {format.price}
                  </option>
                ))}
              </select>
              <p className="text-sm mb-6">{renderValue(data.book.description)}</p>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Product Details</h2>
                <p>ISBN: {currentISBN}</p>
                <p>Pages: {renderValue(data.book.pageCount)}</p>
                <p>Publication Date: {renderPublicationDate(data.book.o_publishedAt)}</p>
                <p>Publisher: {renderValue(data.book.o_publishedBy)}</p>
              </div>
            </div>
            <div>
              <button className="w-full text-lg py-6 mb-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Buy Now - {currentPrice}
              </button>
              <a href="#read-free" className="text-center block text-blue-600 hover:underline">Read for free online</a>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">What Readers Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 3].map((testimonial) => (
              <div key={testimonial} className="p-4 border rounded">
                <p className="italic mb-2">&ldquo;An absolute page-turner! I couldn&apos;t put it down.&rdquo;</p>
                <p className="text-sm text-gray-600">- Reader {testimonial}</p>
              </div>
            ))}
          </div>
        </div>
        <div id="read-free" className="mt-8">
          <div className="p-6 border rounded">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <BookOpen className="mr-2" />
              Read &ldquo;{renderValue(data.book.title)}&rdquo; Online for Free
            </h2>
            <p className="mb-4">Enjoy the complete web version of &ldquo;{renderValue(data.book.title)}&rdquo; right here on our website. No download required!</p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <h3 className="font-semibold mb-2">Chapter 1: The Vanishing</h3>
              <p className="text-sm">
                The fog rolled in thick that morning, blanketing the small coastal town of Mist Harbor in an eerie silence. Detective Sarah Blake stood at the edge of the pier, her keen eyes scanning the ghostly landscape. It was here, amidst the swirling mists, that the first disappearance had occurred...
              </p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Continue Reading
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
