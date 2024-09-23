"use client";
import { notFound } from "next/navigation";

export default function ReviewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const randomNum = Math.floor(Math.random() * 2);
  if (randomNum === 0) {
    throw new Error("Something went wrong");
  }

  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
