"use client";
import { useTheme } from "@/components/theme-provider";

export default function ClientRoutePage() {
  const theme = useTheme();
  console.log("Client Route Page - Client Component");
  return (
    <div>
      <h1 style={{ color: theme.colors.primary }}>Client Route Page</h1>
    </div>
  );
}
