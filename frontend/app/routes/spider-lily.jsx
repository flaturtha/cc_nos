import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import client, { urlFor } from '../utils/sanityClient';
import { PortableText } from '@portabletext/react';

export const loader = async () => {
  const query = `*[_type == "product" && title == "THE SPIDER LILY"][0]{
    title,
    slug,
    "authorName": author->name,
    "genre": genre->title,
    coverImage{
      asset->{
        _id,
        url
      }
    },
    blurb,
    tagline,
    o_publishedAt,
    o_publishedBy,
    editions,
    fullText,
    seo{
      metaTitle
    },
    reviews
  }`;

  try {
    const book = await client.fetch(query);
    return json({ book });
  } catch (error) {
    console.error("Sanity fetch error:", error);
    throw new Error("Failed to fetch data from Sanity");
  }
};

export default function SpiderLily() {
  const { book } = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{book.title}</h1>
      <p className="text-lg text-gray-700 mb-2">
        <strong>Author:</strong> {book.authorName}
      </p>
      <p className="text-lg text-gray-700 mb-2">
        <strong>Genre:</strong> {book.genre}
      </p>
      {book.coverImage?.asset?.url && (
        <img
          className="w-full max-w-sm mx-auto mb-6 rounded-lg shadow-md"
          src={book.coverImage.asset.url}
          alt={book.title}
        />
      )}
      <p className="text-lg text-gray-700 mb-4">
        <strong>Tagline:</strong> {book.tagline}
      </p>
      <p className="text-md text-gray-600 mb-4">
        <strong>Originally Published:</strong> {book.o_publishedAt?.yearMonth?.year}/{book.o_publishedAt?.yearMonth?.month}
      </p>
      <p className="text-md text-gray-600 mb-4">
        <strong>Published By:</strong> {book.o_publishedBy}
      </p>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Blurb</h2>
        <div className="prose prose-lg">
          <PortableText value={book.blurb} />
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Full Text</h2>
        <div
          className="prose prose-lg"
          dangerouslySetInnerHTML={{ __html: book.fullText[0].children[0].text }}
        />
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Editions</h3>
        <div className="space-y-2">
          {Object.keys(book.editions).map((edition) => (
            <div key={edition} className="text-lg text-gray-700">
              <strong>{edition.charAt(0).toUpperCase() + edition.slice(1)}</strong>: ${book.editions[edition].price}
            </div>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Reviews</h3>
        {book.reviews.map((review) => (
          <div key={review._key} className="border-t border-gray-300 pt-4 mt-4">
            <p className="text-lg text-gray-700">
              <strong>{review.reviewerName}</strong>: {review.reviewText}
            </p>
            <p className="text-sm text-gray-500">Rating: {review.starRating} stars</p>
          </div>
        ))}
      </div>
    </div>
  );
}
