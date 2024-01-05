"use client";

import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleNumber = (number: number) => {
    setCounter((prev) => prev + number);
  };
  return (
    <>
      <span className="text-9xl">{counter}</span>
      <div className="flex gap-2">
        <button
          onClick={() => handleNumber(-1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
        <button
          onClick={() => handleNumber(+1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
      </div>
    </>
  );
};


