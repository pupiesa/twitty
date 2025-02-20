"use client";
import React, { useContext, useState } from "react";
import { DataContext } from "./components/Post";
import { useSession } from "next-auth/react";
import Card from "./components/card";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";


export default function Page() {
  const { data: session } = useSession();
  const [postdata, setPostdata] = useState({
    user: "",
    post: "",
    img: "",
  });
  const myContext = useContext(DataContext);
  const post = myContext ? myContext.post || [] : [];
  const mutate = myContext ? myContext.mutate : () => { };
  const handleInputChange = (e) => {
    setPostdata({ ...postdata, post: e.target.value, user: session.user.name, img: session.user.image });
  };

  const handlePostSubmit = async () => {
    try {
      setPostdata({ ...postdata })
      const res = await axios.post("http://localhost:3000/api/v1/posts", postdata)
      mutate();
    }
    catch (error) {
      console.log("eror", error);
    }
  };

  if (session) {
    return (
      <>
        <div className="flex justify-center">
          <div className="bg-white text-start px-6 mx-3 my-6 p-[0.5rem] rounded-xl">
            <h1 className="font-bold">Post</h1>
            <input
              placeholder="เขียนโพสต์ของคุณ"
              className="w-full mt-1 mb-3 p-2 h-20 bg-slate-200"
              value={postdata.post}
              onChange={handleInputChange}
            />
            <button className="w-full bg-blue-400 p-2" onClick={handlePostSubmit}>
              โพสต์
            </button>
          </div>
        </div>
        {/* Post */}
        <div className="text-black flex justify-center flex-col gap-y-5">
          <div id="67b6cb43635959c97514fa5a" className="bg-white mx-10 p-3 rounded-xl">
            <div className="flex flex-row gap-x-2">
              <Image
                width="20"
                height="20"
                src="https://lh3.googleusercontent.com/a/ACg8ocJuLcWvxKR3iEq_OHvNlwx4TMUb5PIl0b8WCCU00evvHPPtPFM=s96-c"
                alt="userimage"
                className="rounded-full w-auto h-auto"
              ></Image>
              <h1 className="">block</h1>
              <Link href="/post/67b6cb43635959c97514fa5a">Go to post</Link>
            </div>
            <div className="text-[0.5rem] font-light ml-1">
              {new Date("2025-02-20T06:27:15.182+00:00").toLocaleString('en-us')}
            </div>
            <div>lol</div>
          </div>

          {post.map((p) => (
            <Card key={p.id} p={p} />
          ))}
        </div>
      </>
    );
  }
  return <>you are not logged in</>;
}