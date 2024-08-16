import React from 'react';
import { PortableText } from '@portabletext/react';

const FullText = ({ data, title, authorName, o_publishedAt, o_publishedBy, o_volnum, tagline }) => {
  if (!data || !data.length) return <p>No content available</p>;

  // Handle date formatting as "MONTH YEAR"
  const formattedDate = o_publishedAt 
    ? new Date(o_publishedAt.yearMonth.year, o_publishedAt.yearMonth.month - 1).toLocaleString('default', { month: 'long', year: 'numeric' })
    : "Publication Date";

  return (
    <article id="free" className="prose prose-gray mx-auto max-w-3xl dark:prose-invert">
      <div className="space-y-2 not-prose">
        <h1 className="font-breamcatcher text-4xl font-extrabold tracking-loose lg:text-5xl lg:leading-[3.5rem]">
          {title || "Title"}
        </h1>
        <div className="text-muted-foreground">
          <h2 className="font-medium mb-5"><span className="font-light">By</span> {authorName || "Author"}</h2>
          
    <div className="bg-[#f5f5f5] dark:bg-[#1a1a1a]">
      <div className="max-w-3xl w-full px-4 md:px-0">
        <div className="bg-white dark:bg-[#222] rounded-lg shadow-lg p-8 md:p-12">
          <div className="">
            <h1 className="text-xl md:text-2xl font-serif font-bold text-[#333] dark:text-white">{o_publishedBy || "Publisher"}</h1>
            <p className="text-xl md:text-xl font-sans text-[#555] dark:text-[#ccc] mt-4">
            {<p className="text-base font-sans text-[#555] dark:text-[#ccc] mt-4 italic">
            {o_volnum || "No volume/number available"}
            </p>}
            </p>
            <p className="text-base font-sans text-[#555] dark:text-[#ccc]">
            {formattedDate}
            </p>
          </div>
        </div>
      </div>
    </div>

    <blockquote className="my-12 px-4 py-4 mx-auto max-w-2xl text-center text-2xl font-medium border-l-2 border-primary">
      <p className="text-gray-600">{tagline || "Tagline"}</p>
    </blockquote>
    
        </div>
      </div>
      <nav className="space-y-2 border-y pb-4 my-24 text-lg flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold text-center mb-9">Contents</h2>
        <ol className="list-decimal space-y-1 chapter-list pb-10 list-outside">
          {data.map((block, index) => (
            block.style === 'h2' && <li key={index} className="font-medium">{block.children[0].text}</li>
          ))}
        </ol>
      </nav>
      <article className="prose text-lg mt-44">
        <PortableText value={data} />
      </article>
    </article>
  );
};

export default FullText;
