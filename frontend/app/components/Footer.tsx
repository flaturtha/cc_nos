import { Link } from "@remix-run/react";
import { Input } from "../../@/components/ui/input";
import { Button } from "../../@/components/ui/button";

export default function Footer() {
  return (
    <footer className="mt-16 py-12 bg-gray-100"> 
    {/* (original bg: bg-muted text-muted-foreground) */}
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2">
            <MountainIcon className="h-6 w-6" />
            <span className="font-bold text-lg font-breamcatcher">Tales of Murder</span>
          </Link>
          <p className="text-sm">
            Discover the best products for your home and lifestyle.
          </p>
        </div>
        <div className="grid gap-2">
          <h4 className="font-semibold">Popular Categories</h4>
          <nav className="grid gap-1">
            <Link to="#" className="hover:underline">
              Furniture
            </Link>
            <Link to="#" className="hover:underline">
              Electronics
            </Link>
            <Link to="#" className="hover:underline">
              Clothing
            </Link>
            <Link to="#" className="hover:underline">
              Home Decor
            </Link>
          </nav>
        </div>
        <div className="grid gap-2">
          <h4 className="font-semibold">Quick Links</h4>
          <nav className="grid gap-1">
            <Link to="#" className="hover:underline">
              About Us
            </Link>
            <Link to="#" className="hover:underline">
              Contact Us
            </Link>
            <Link to="#" className="hover:underline">
              Shipping & Returns
            </Link>
            <Link to="#" className="hover:underline">
              Privacy Policy
            </Link>
          </nav>
        </div>
        <div className="grid gap-2">
          <h4 className="font-semibold">Newsletter</h4>
          <p className="text-sm">
            Subscribe to our newsletter to get the latest updates and offers.
          </p>
          <form className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white"
            />
            <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="container max-w-7xl mt-12 border-t pt-6 text-sm text-muted-foreground">
        <p>&copy; 2024 Tales of Murder. All rights reserved.</p>
      </div>
    </footer>
  );
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
