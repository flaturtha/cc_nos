import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import client from '../utils/sanityClient';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductPageLayout from "../components/ProductPageLayout";

export const loader = async ({ params }) => {
  const { product } = params;

  const query = `*[_type == "product" && slug.current == $slug][0]{
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
    o_volnum,
    editions,
    fullText,
    seo{
      metaTitle
    },
    reviews
  }`;

  try {
    const book = await client.fetch(query, { slug: product });
    console.log("Fetched book data:", book); // Log the data
    return json({ book });
  } catch (error) {
    console.error("Sanity fetch error:", error);
    throw new Error("Failed to fetch data from Sanity");
  }
};



export default function ProductPage() {
  const { book } = useLoaderData();

  return (
    <>
      <Navbar />
      <ProductPageLayout product={book} />
      <Footer />
    </>
  );
}
