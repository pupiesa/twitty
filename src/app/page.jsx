"use client";
import React, { useContext, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { DataContext } from "./components/post";
import Image from "next/image";
import Card from "./components/card"

export default function Page() {
  const { data: session } = useSession();
  const myContext = useContext(DataContext);
  const post = myContext.post
  console.log(post);
  const posts = [
    {
      id: "67b2e79b862d141eef7556c8",
      user: "test",
      datetime: "2025-02-17T07:39:06.851Z",
      post: "sdfsdf",
    },
    {
      id: "67b2eb4d64b08d9a15552265",
      user: "test1",
      datetime: "2025-02-17T07:54:53.176Z",
      post: "testtext",
    },
  ];
  if (session) {
    return (
      <>
        <div className="flex justify-center">
          <div className="bg-white text-start px-6 mx-3 my-6 p-[0.5rem] rounded-xl">
            <h1 className="font-bold">Post</h1>
            <input
              placeholder="เขียนโพสต์ของคุณ"
              className="w-full mt-1 mb-3 p-2 h-20 bg-slate-200"
            ></input>
            <button className="w-full bg-blue-400 p-2">โพสต์</button>
          </div>
        </div>
        {/* Post */}
        <div className="text-black flex justify-center flex-col itmes-center">
          <div className="bg-white p-3 mx-6 rounded-xl">
            <div className="flex flex-row">
              <Image
                width="20"
                height="20"
                src={session.user.image}
                alt="userimage"
                className="rounded-full"
              ></Image>
              <h1>{post[1].user}</h1>
            </div>
            <div className="text-[0.5rem] font-light ml-1">{new Date(post[1].datetime).toLocaleString('en-us')}</div>
            <div>{post[1].post}</div>
          </div>
          <Card />
        </div>
      </>
    );
  }
  return <>you are not logged in</>;
}
