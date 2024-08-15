// components/ProductPageLayout.tsx

import Navbar from './ Navbar';
import Hero from './Hero';
import ProductDescription from './ProductDescription';
import Reviews from './Reviews';
import RelatedBooks from './RelatedBooks';

const ProductPageLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          {/* Use flexbox to ensure equal width for ProductDescription and Reviews */}
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2">
              <ProductDescription />
            </div>
            <div className="w-full lg:w-1/2">
              <Reviews />
            </div>
          </div>
          <RelatedBooks />
        </div>
      </main>
    </div>
  );
};

export default ProductPageLayout;
