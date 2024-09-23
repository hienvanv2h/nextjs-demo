import { comments, Comment } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const comment: Comment | undefined = comments.find(
    (cmt) => cmt.id === parseInt(params.id)
  );
  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const index = comments.findIndex((cmt) => cmt.id === parseInt(params.id));
  comments[index].text = body.text;
  return Response.json(comments[index]);
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const index = comments.findIndex((cmt) => cmt.id === parseInt(params.id));
  comments.splice(index, 1);
  return Response.json({ message: `Deleted comment with id: ${params.id}` });
}
