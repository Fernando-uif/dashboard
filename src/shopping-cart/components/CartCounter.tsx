"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import {
  addOne,
  initCounterState,
  resetCount,
  substractOne,
} from "@/store/counter/counterSlice";
import { useEffect } from "react";

const getApiConuter = async (): Promise<any> => {
  const response = await fetch("/api/counter");
  const data = await response.json();
  console.log(data);
  return data;
};

export const Counter = ({ value }: { value: number }) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  
  // useEffect(() => {
  //   dispatch(initCounterState(value));
  //   return () => {};
  // }, [dispatch, value]);

  useEffect(() => {
    getApiConuter().then((resp) => {
      dispatch(initCounterState(resp.count));
    });

    return () => {};
  }, [dispatch]);

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch(substractOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
        <button
          onClick={() => dispatch(addOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
      </div>
    </>
  );
};
