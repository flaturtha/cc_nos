import { Link } from "@remix-run/react";

export default function ProductsIndex() {
  return (
    <div>
      <h1>Our Products</h1>
      <ul>
        <li>
          <Link to="/products/product1">Product 1</Link>
        </li>
        <li>
          <Link to="/products/product2">Product 2</Link>
        </li>
        <li>
          <Link to="/products/product3">Product 3</Link>
        </li>
      </ul>
    </div>
  );
}