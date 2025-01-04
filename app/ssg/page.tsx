"use client";
import { useEffect, useReducer } from "react";

export default function Home() {
  const [userState, userStateDispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      name: "",
      age: 0,
    }
  );
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        userStateDispatch({ name: data.name, age: data.age });
      });
  }, []);

  return (
    <div>
      <h1>SSG+Client fetchページ</h1>
      <p>名前: {userState.name}</p>
      <p>年齢: {userState.age}</p>
    </div>
  );
}
