"use client";
import { useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";
const page = () => {
  const { data: session } = useSession();
  if (!session) {
    return <div>You are not logged in</div>;
  }
  return (
    <>
      <div className="flex justify-center h-[70vh] items-center ">
        <div className="bg-slate-300 px-10 text-black text-center py-6 rounded-2xl gap-y-4 flex flex-col items-center">
          <h1>Profile</h1>
          <Image
            height={100}
            width={100}
            src={session?.user?.image || ""}
            alt="useprofile"
          ></Image>
          <h2>{session?.user?.name}</h2>
          <h2>{session?.user?.email}</h2>
        </div>
      </div>
    </>
  );
};

export default page;
