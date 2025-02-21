"use client";
import React, { useContext, useState } from "react";
import { DataContext } from "/src/app/components/Post.tsx";
import Card from "/src/app/components/card";

export default function ClientComponent({ id }) {
  const myContext = useContext(DataContext);
  const p = myContext ? myContext.post : [];
  return (
<div className="mt-[6rem]">
      {p && p.map((p) => p.id === id && <Card key={p.id} p={p} />)}
    </div>
  );
}
