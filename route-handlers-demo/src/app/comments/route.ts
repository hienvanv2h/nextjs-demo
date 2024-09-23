import { NextRequest } from "next/server";
import { comments, Comment } from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredComments = query
    ? comments.filter((cmt) => cmt.text.includes(query))
    : comments;
  return Response.json(filteredComments);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newComment: Comment = {
    id: comments.length + 1,
    text: body.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
