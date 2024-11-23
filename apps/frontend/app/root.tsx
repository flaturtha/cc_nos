import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import FacebookPixel from "~/components/FacebookPixel";
import KlaviyoScript from '~/components/KlaviyoScript';
import GoogleTagManager from '~/components/GoogleTagManager';

export const links: LinksFunction = () => [
  { 
    rel: "stylesheet", 
    href: "https://fonts.cdnfonts.com/css/breamcatcher" 
  }
];

export const meta: MetaFunction = () => {
  return [
    // ... other meta tags
    {
      "http-equiv": "Content-Security-Policy",
      content: "upgrade-insecure-requests"
    }
  ];
};

export default function App() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <FacebookPixel />
      </head>
      <body>
        <GoogleTagManager gtmId="GTM-WTZTP869" />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <KlaviyoScript />
      </body>
    </html>
  );
}
