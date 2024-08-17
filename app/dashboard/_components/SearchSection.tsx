import { Search } from "lucide-react";
import React from "react";

const SearchSection = ({onSeacrhInput}:any) => {
  return (
    <div className="relative p-10 md:p-10 lg:p-16 mx-4 md:mx-6 lg:mx-10 rounded-2xl mt-5">
      <img
        src="/banner.jpg"
        alt="Banner"
        className="absolute inset-0 object-cover w-full h-full rounded-2xl"
      />
      <div className="relative z-10 flex flex-col items-center justify-center p-4">
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center">
          Jelajahi Semua Template
        </h2>
        <p className="text-white text-base md:text-xl text-center">
          Apa yang ingin anda buat hari ini?
        </p>
        <div className="w-full max-w-md mt-4 md:mt-5">
          <div className="flex gap-2 items-center p-2 border rounded-xl bg-white">
            <Search className="text-purple-400" />
            <input
              type="text"
              placeholder="Youtube"
              onChange={(event)=>onSeacrhInput(event.target.value)}
              className="bg-transparent outline-none text-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
