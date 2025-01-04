"use client";

import { useReducer } from "react";

export function Counter() {
  const [count, setCount] = useReducer((state) => state + 1, 0);
  return (
    <div>
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">カウンター</h2>
      <p className="text-gray-800 font-medium text-2xl">{count}</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg mt-4"
        onClick={() => setCount()}
      >
        add
      </button>
    </div>
  );
}
