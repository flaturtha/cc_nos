import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from 'react';
import { Star, BookOpen } from 'lucide-react';
import client from '../utils/sanityClient'; // Import the Sanity client

const bookFormats = [
  { name: 'eBook', image: '/placeholder.svg?height=600&width=400', price: '$9.99' },
  { name: 'Pocket Paperback', image: '/placeholder.svg?height=400&width=300', price: '$14.99' },
  { name: 'Trade Paperback', image: '/placeholder.svg?height=500&width=350', price: '$19.99' },
  { name: 'Audiobook', image: '/placeholder.svg?height=600&width=600', price: '$24.99' },
];

export const loader = async ({ params }) => {
  const query = `*[_type == "product" && slug.current == $slug][0]{
    title,
    "author": author->name,
    "genre": genre->title,
    rating,
    reviewCount,
    description,
    isbn,
    pages,
    publicationDate,
    publisher
  }`;

  try {
    const bookData = await client.fetch(query, { slug: params.slug });
    return json(bookData);
  } catch (error) {
    console.error("Sanity fetch error:", error);
    throw new Error("Failed to fetch data from Sanity");
  }
};

export default function BookPage() {
  const book = useLoaderData();
  const [selectedFormat, setSelectedFormat] = useState(bookFormats[0]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden" style={{ aspectRatio: '1' }}>
          <img
            src={selectedFormat.image}
            alt={`${selectedFormat.name} cover of ${book.title}`}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
            <p className="text-lg mb-2">by {book.author}</p>
            <p className="text-sm text-gray-600 mb-4">Genre: {book.genre}</p>
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < book.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">{book.rating.toFixed(1)} ({book.reviewCount} reviews)</span>
            </div>
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
            <p className="text-sm mb-6">{book.description}</p>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Product Details</h2>
              <p>ISBN: {book.isbn}</p>
              <p>Pages: {book.pages}</p>
              <p>Publication Date: {book.publicationDate}</p>
              <p>Publisher: {book.publisher}</p>
            </div>
          </div>
          <div>
            <button className="w-full text-lg py-6 mb-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Buy Now - {selectedFormat.price}
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
              <p className="italic mb-2">"An absolute page-turner! I couldn't put it down."</p>
              <p className="text-sm text-gray-600">- Reader {testimonial}</p>
            </div>
          ))}
        </div>
      </div>
      <div id="read-free" className="mt-8">
        <div className="p-6 border rounded">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <BookOpen className="mr-2" />
            Read "{book.title}" Online for Free
          </h2>
          <p className="mb-4">Enjoy the complete web version of "{book.title}" right here on our website. No download required!</p>
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
    </div>
  );
}
