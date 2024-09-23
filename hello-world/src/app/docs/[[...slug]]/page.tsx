export default function Docs({ params }: { params: { slug: string[] } }) {
  if (params.slug?.[0] === "feature1") {
    return <h1>Feature 1</h1>;
  }

  if (params.slug?.[0] === "feature2") {
    return <h1>Feature 2</h1>;
  }

  if (params.slug?.[0] === "feature3" && params.slug[1] === "advanced") {
    return <h1>Feature 3 - Advanced</h1>;
  }

  return <h1>Docs</h1>;
}
