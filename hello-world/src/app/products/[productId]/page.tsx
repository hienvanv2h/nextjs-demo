import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

// export const generateMetadata = async ({
//   params,
// }: Props): Promise<Metadata> => {
//   const id = await new Promise((resolve) => {
//     setTimeout(() => resolve(`${params.productId}`), 1000);
//   });
//   return {
//     title: `Product ${id}`,
//   };
// };

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};

export default function ProductDetails({ params }: Props) {
  return <h1>Product Details - ID: {params.productId}</h1>;
}
