// components/ProductDescription.tsx

const ProductDescription: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 ">
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
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
