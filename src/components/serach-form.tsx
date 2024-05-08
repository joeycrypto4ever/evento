"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SerachForm() {
  const [searchText, setSearchText] = useState("");
  const route = useRouter();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    route.push(`/events/${searchText}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-[90%] sm:w-[560px] mt-8 mb-4">
      <input
        className="w-full sm:w-[560px] p-3 rounded-md h-12 ring-accent/50 bg-white/10 outline-none focus:ring-1 "
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search events in any city..."
      />
    </form>
  );
}
