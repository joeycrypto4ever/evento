import React from "react";
import SkeletonCard from "./skeleton-card";

export default function SkeletonList() {
  return (
    <main className="max-w-[1100px] px-[20px] flex flex-wrap gap-10 justify-center items-center mx-auto ">
      {Array.from({ length: 6 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </main>
  );
}
