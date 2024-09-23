import Link from "next/link";

export default function ProductList() {
  const productId = 100;
  return (
    <>
      <div>
        <Link href="/">Home</Link>
      </div>
      <h1>Product List</h1>
      <ul>
        <li>
          <Link href="/products/1">Product 1</Link>
        </li>
        <li>
          <Link href="/products/2">Product 2</Link>
        </li>
        <li>
          <Link href="/products/3">Product 3</Link>
        </li>
        <li>
          <Link href={`products/${productId}`}>Product {productId}</Link>
        </li>
      </ul>
    </>
  );
}
