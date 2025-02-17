"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className="flex justify-center">
          <div className="bg-slate-400 text-start px-6 mx-3 my-6 p-[0.5rem] rounded-xl">
            <h1 className="font-bold">Post</h1>
            <input
              placeholder="เขียนโพสต์ของคุณ"
              className="w-full mt-1 mb-3 p-2 h-20"
            ></input>
            <button className="w-full bg-blue-400 p-2">โพสต์</button>
          </div>
        </div>
      </>
    );
  }
  return <>you are not logged in</>;
}
