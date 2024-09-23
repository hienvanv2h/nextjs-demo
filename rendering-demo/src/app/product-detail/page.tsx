import { Product } from "@/components/product";
import { Reviews } from "@/components/review";
import { Suspense } from "react";

export default function ProductDetailPage() {
  return (
    <div>
      <h1>Product Detail Page</h1>
      <Suspense fallback={<div>Loading product...</div>}>
        <Product />
      </Suspense>
      <Suspense fallback={<div>Loading reviews...</div>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
