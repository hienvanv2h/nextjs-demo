"use client";
import { useState } from "react";

export default function DashboardPage() {
  const [name, setName] = useState("");
  console.log("Dashboard Page - Client Component");

  return (
    <div>
      <h1>Dashboard Page</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>Hello, {name}!</h3>
    </div>
  );
}
