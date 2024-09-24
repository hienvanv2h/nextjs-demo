export default async function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("ProductLayout");
  const response = await fetch("http://localhost:3001/products");
  const products = await response.json();
  return <>{children}</>;
}
