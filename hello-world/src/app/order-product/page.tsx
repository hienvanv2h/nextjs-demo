"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Order Placed");
    // navigate to home page
    router.push("/");
  };
  return (
    <>
      <h1>Order Product Page</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
