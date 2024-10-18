# Draft Instructions

**## Project Overview**
You are building a frontend and CMS for a website. It will use remix.run for its frontend framework and pull data from sanity.io as its CMS. For now, we're only building a single template page that is a product sales page and will pull in data from the sanity.io CMS. 

You will use latest of: remix.run, sanity.io, tailwindcss, shadcn/ui, Lucide icons, Klaviyo and zod for your data modeling. 

**## Core Functionalities**
1. based on the URL, display the product details and information dynamically
2. page will be populated by data from sanity.io
3. the page will be a sales page with (best practices for a high converting landing page):
    - a large area for a product image, capable of displaying various aspet ratios depending on the format of the product, e.g., 1:1 for audiobook, 16:9 for ebooks, 4:3 for print, etc., all without shifting anything else on the page
    - a section for the product title, author, and description
    - a section for the product pricing
    - a section for the product formats; allowing for selection of each format and change of the pricing, availability and other relevant details for each format
    - a section for the short blurb/sales pitch
    - a section for the product reviews with star ratings (including count), reviews (including count), and a link to write a review
    - a section for additional metadata, such as word count, page count, ISBN, publication date, and other relevant details
    - a section below everything else for the entire text of the book, pulled from blockContent section of sanity.
    - a BUY button that is currently grayed out since there is no actual store connection; there is a link to the read free section (use ID so they can click the link and be taken to the free read section)
4. its design will follow best practices for a landing page, such as one from which someone would come from a facebook ad or similar.
5. periodically, through out the free read section, there will be a callout that prompts the user to buy the book, with a button to do so. initially, this will only be for the ebook version (served by BookFunnels) via email subscription using Klaviyo.

Schema design for sanity can be found in the file: schema_def.md in the same folder as these instructions. Use that to create the schema in sanity. I can provide sanity credentials when needed in an .env file.

**## Doc**

**### File Tree for a Remix Project**
my-remix-app/
├── app/
│   ├── assets/
│   │   ├── images/
│   │   │   └── logo.png
│   │   └── styles/
│   │       ├── global.css
│   │       └── tailwind.css
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── [Other Components].tsx
│   ├── entry.client.tsx
│   ├── entry.server.tsx
│   ├── root.tsx
│   ├── routes/
│   │   ├── index.tsx
│   │   ├── about.tsx
│   │   ├── contact.tsx
│   │   ├── blog/
│   │   │   ├── index.tsx
│   │   │   └── $slug.tsx
│   │   └── admin/
│   │       ├── index.tsx
│   │       └── dashboard.tsx
│   ├── styles/
│   │   ├── tailwind.css
│   │   └── [Additional Styles].css
│   ├── utils/
│   │   ├── api.ts
│   │   ├── db.server.ts
│   │   └── [Utility Files].ts
│   ├── types/
│   │   └── index.d.ts
│   └── context/
│       └── ThemeContext.tsx
├── public/
│   ├── build/
│   │   ├── client.js
│   │   ├── client.css
│   │   └── [Other Build Assets]
│   ├── favicon.ico
│   ├── robots.txt
│   ├── images/
│   │   └── [Public Images].png
│   └── fonts/
│       └── [Custom Fonts].woff2
├── .env
├── .env.example
├── .gitignore
├── package.json
├── remix.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── README.md
└── yarn.lock


**## Current File Structure**



**## Additional Requirements**
