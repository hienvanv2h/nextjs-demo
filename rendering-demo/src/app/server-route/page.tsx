import { serverSideFunction } from "@/utils/server-utils";
import { ImageSlider } from "@/components/image-slider";

export default function ServerRoutePage() {
  const result = serverSideFunction();
  console.log("Server Route Page - Server Component");
  return (
    <div>
      <h1>Server Route Page</h1>
      <p>{result}</p>
      <ImageSlider />
    </div>
  );
}
