import { redirect } from "next/navigation";

const isLoggedIn = false;

export async function GET() {
  if (!isLoggedIn) {
    redirect("/dashboard");
  }
  return new Response("User data");
}
