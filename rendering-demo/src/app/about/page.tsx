import { cookies } from "next/headers";

export default function AboutPage() {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log("About Page -Server Component");
  return (
    <div>
      <h1>About Page</h1>
      <p>Time: {new Date().toISOString()}</p>
      <p>Theme: {theme?.value}</p>
    </div>
  );
}
