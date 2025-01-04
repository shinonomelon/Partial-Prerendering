import { Suspense } from "react";
import { setTimeout } from "node:timers/promises";
import { Counter } from "./counter";
import { Tweet } from "react-tweet";

// 📍PPRを有効化
export const experimental_ppr = true;

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-8">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">PPRデモページ</h1>
      <Suspense fallback={<Spinner />}>
        <RandomTodo />
      </Suspense>
      <Counter />
      <Tweet id="1628832338187636740" />
    </main>
  );
}

function Spinner() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
    </div>
  );
}

async function RandomTodo() {
  const todoDto: TodoDto = await fetch("https://dummyjson.com/todos/random", {
    cache: "no-store",
  }).then((res) => res.json());
  await setTimeout(1000);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">
        ランダムTodo
      </h2>
      <ul className="space-y-2">
        <li className="flex items-center">
          <span className="font-medium text-gray-600 w-24">ID:</span>
          <span className="text-gray-800">{todoDto.id}</span>
        </li>
        <li className="flex items-center">
          <span className="font-medium text-gray-600 w-24">タスク:</span>
          <span className="text-gray-800">{todoDto.todo}</span>
        </li>
        <li className="flex items-center">
          <span className="font-medium text-gray-600 w-24">完了状態:</span>
          <span
            className={`px-2 py-1 rounded-full text-sm ${
              todoDto.completed
                ? "bg-green-200 text-green-800"
                : "bg-red-200 text-red-800"
            }`}
          >
            {todoDto.completed ? "完了" : "未完了"}
          </span>
        </li>
        <li className="flex items-center">
          <span className="font-medium text-gray-600 w-24">ユーザーID:</span>
          <span className="text-gray-800">{todoDto.userId}</span>
        </li>
      </ul>
    </div>
  );
}

type TodoDto = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};
