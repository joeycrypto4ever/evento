"use client"; // Error components must be Client Components

import H1 from "@/components/h1";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  const message = error.message;
  return (
    <div className="flex flex-col items-center justify-center pt-12 gap-6">
      <H1>Something went wrong!</H1>
      <h1>{message}</h1>
      <button
        className="text-sm text-accent bg-white/10 py-2 px-5 rounded-xl  hover:bg-white/20"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
