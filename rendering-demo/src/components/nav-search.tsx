"use client";
import { useState } from "react";

export default function NavSearch() {
  const [inputText, setInputText] = useState("Search your items...");

  console.log("NavSearch component");
  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </>
  );
}
