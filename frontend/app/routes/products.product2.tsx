import { Link } from "@remix-run/react";

export default function Productv0() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
          </svg>
          <span className="sr-only">Bookstore</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Books
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Authors
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container space-y-10 xl:space-y-16">
            <div className="grid gap-4 px-4 md:grid-cols-2 md:gap-16">
              <div>
                <img
                  src="https://via.placeholder.com/400x600"
                  width="400"
                  height="600"
                  alt="Book Cover"
                  className="mx-auto aspect-[2/3] overflow-hidden rounded-xl object-cover"
                />
              </div>
              <div className="flex flex-col items-start space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  The Bookshop of Yesteryear
                </h1>
                <p className="text-muted-foreground md:text-xl">By Emily Hawkins</p>
                <div className="grid gap-4">
                  <button
                    type="button"
                    className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                  >
                    <span style={{ pointerEvents: "none" }}>Select editions</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  <div className="space-x-4">
                    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full sm:w-auto">
                      Add to Cart
                    </button>
                    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 rounded-md px-8 w-full sm:w-auto">
                      Buy Now
                    </button>
                  </div>
                </div>
                <p className="text-muted-foreground md:text-xl">
                  A captivating novel that takes readers on a journey through the rich history of a beloved independent
                  bookstore.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About the Book</h2>
                <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The Bookshop of Yesteryear is a captivating novel that takes readers on a journey through the rich
                  history of a beloved independent bookstore. Set in a small town, the story follows the lives of the
                  bookshop's owners and customers, exploring themes of community, nostalgia, and the power of the
                  written word.
                </p>
                <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  With its vivid descriptions and well-developed characters, the book celebrates the enduring importance
                  of independent bookstores and the unique role they play in the lives of their patrons. Readers will be
                  transported to the cozy corners of the bookshop, where they'll discover the transformative power of
                  literature and the enduring connections that can be forged through a shared love of books.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Reviews</h2>
                <div className="mt-4 space-y-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                        <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">JD</span>
                      </span>
                      <div>
                        <p className="font-medium">John Doe</p>
                        <p className="text-sm text-muted-foreground">5 out of 5 stars</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "The Bookshop of Yesteryear is a beautifully written and deeply moving novel. The characters and
                      their stories will stay with me long after I've finished reading."
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                        <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">SA</span>
                      </span>
                      <div>
                        <p className="font-medium">Sarah Anderson</p>
                        <p className="text-sm text-muted-foreground">4 out of 5 stars</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "This book is a love letter to independent bookstores and the communities they foster. I couldn't
                      put it down!"
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                        <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">MJ</span>
                      </span>
                      <div>
                        <p className="font-medium">Michael Johnson</p>
                        <p className="text-sm text-muted-foreground">4 out of 5 stars</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "The Bookshop of Yesteryear is a delightful read that captures the magic and nostalgia of
                      independent bookstores. Highly recommended!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Related Books</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore more books that capture the essence of independent bookstores and the power of literature.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                <div className="flex flex-col items-center justify-center gap-4 p-6">
                  <img
                    src="https://via.placeholder.com/200x300"
                    width="200"
                    height="300"
                    alt="Book Cover"
                    className="aspect-[2/3] overflow-hidden rounded-xl object-cover"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">The Storied Life of A.J. Fikry</h3>
                    <p className="text-muted-foreground">By Gabrielle Zevin</p>
                    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                <div className="flex flex-col items-center justify-center gap-4 p-6">
                  <img
                    src="https://via.placeholder.com/200x300"
                    width="200"
                    height="300"
                    alt="Book Cover"
                    className="aspect-[2/3] overflow-hidden rounded-xl object-cover"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">The Bookshop of Florentine</h3>
                    <p className="text-muted-foreground">By Deborah Meyler</p>
                    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                <div className="flex flex-col items-center justify-center gap-4 p-6">
                  <img
                    src="https://via.placeholder.com/200x300"
                    width="200"
                    height="300"
                    alt="Book Cover"
                    className="aspect-[2/3] overflow-hidden rounded-xl object-cover"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">The Little Paris Bookshop</h3>
                    <p className="text-muted-foreground">By Nina George</p>
                    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
