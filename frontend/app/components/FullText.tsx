import React from "react";
import { Separator } from "@/components/ui/separator";
import { PortableText } from '@portabletext/react';

const FullText: React.FC<{ data: any }> = ({ data }) => {
  const sections = data.map((section: any, index: number) => ({
    id: `section-${index}`,
    title: section.title || `Section ${index + 1}`,
    content: section,
  }));

  return (
    <article className="prose prose-gray mx-auto max-w-3xl dark:prose-invert">
      <div className="space-y-2 not-prose">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
          {data?.title || "Untitled"}
        </h1>
        <div className="flex items-center space-x-4 text-muted-foreground">
          <p>{data?.authorName || "Unknown Author"}</p>
          <Separator orientation="vertical" />
          <p>{data?.publishedAt || "No date available"}</p>
        </div>
      </div>
      <nav className="space-y-2 border-b pb-4 mb-8">
        <h2 className="text-xl font-bold">Table of Contents</h2>
        <ol className="list-decimal space-y-1">
          {sections.map((section: any) => (
            <li key={section.id} className="text-primary">
              {section.title}
            </li>
          ))}
        </ol>
      </nav>
      {sections.map((section: any) => (
        <section key={section.id} id={section.id}>
          <h2 className="text-2xl font-bold">{section.title}</h2>
          <div className="prose prose-lg">
            <PortableText value={section.content} />
          </div>
        </section>
      ))}
    </article>
  );
};

export default FullText;
