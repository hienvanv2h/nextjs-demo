"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <h2>Error: {error.message}</h2>
      <p>Digest: {error.digest}</p>
      <button onClick={() => reset()}>Try again</button>
    </>
  );
}
