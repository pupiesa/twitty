"use client";
import React, { useContext, useState } from "react";
import { useSession } from "next-auth/react";
import Card from "./components/card";
import axios from "axios";
import { DataContext } from "./components/Post";

export default function Page() {
  const { data: session } = useSession();
  const [postdata, setPostdata] = useState({
    user: "",
    post: "",
    img: "",
  });
  const myContext = useContext(DataContext);
  const post = myContext ? myContext.post || [] : [];

  const handleInputChange = (e) => {
    setPostdata({ ...postdata, post: e.target.value, user: session.user.name, img: session.user.image });
  };

  const handlePostSubmit = async () => {
    try {
      setPostdata({ ...postdata })
      const res = await axios.post("http://localhost:3000/api/v1/posts", postdata)
      res.data.data;
    }
    catch (error) {
      console.log("eror", error);
    }
  };

  if (session && post.length > 0) {
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
          {post.map((p) => (
            <Card key={p.id} p={p} />
          ))}
        </div>
      </>
    );
  }
  return <>you are not logged in</>;
}