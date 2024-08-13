import { Link } from "@remix-run/react";

export default function Product1() {
  return (
    <div>
      <h1>Product 1</h1>
      <p>This is the detailed page for Product 1.</p>
      <p>Description: An amazing product that will change your life!</p>
      <p>Price: $19.99</p>
      <Link to="/products">Back to Products</Link>
    </div>
  );
}