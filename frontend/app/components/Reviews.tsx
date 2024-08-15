// components/Reviews.tsx

import ReviewItem from './ReviewItem';

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
}

export default function Reviews() {
  const reviews: Review[] = [
    { id: 1, name: "John Doe", rating: 5, text: "The Bookshop of Yesteryear is a beautifully written and deeply moving novel. The characters and their stories will stay with me long after I've finished reading." },
    { id: 2, name: "Sarah Anderson", rating: 4, text: "This book is a love letter to independent bookstores and the communities they foster. I couldn't put it down!" },
    { id: 3, name: "Michael Johnson", rating: 4, text: "The Bookshop of Yesteryear is a delightful read that captures the magic and nostalgia of independent bookstores. Highly recommended!" },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Reviews</h2>
        <div className="mt-4 space-y-4">
          {reviews.map(review => (
            <ReviewItem key={review.id} name={review.name} rating={review.rating} text={review.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
