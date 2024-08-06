"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`);
  };

  return (
    <form className="flex justify-center w-1/3" onSubmit={onSearch}>
      <input
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="px-5 py-1 w-1/3 sm:px-5 sm:py-3 flex-1 text-white bg-gray-400 outline-none caret-black rounded-3xl focus:bg-gray-500 focus:outline-none focus:ring-[1px] focus:ring-emerald-400 placeholder:text-gray-300"
        placeholder="What are you looking for?"
      />
    </form>
  );
};

export default SearchInput;
