"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Cannot find review with id: {usePathname().split("/").pop()}</p>
    </div>
  );
}
