// components/Hero.tsx

const Hero: React.FC = () => {
  return (
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
  );
};

export default Hero;
