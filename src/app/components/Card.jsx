import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from 'next/dist/navigation';
function Card(props) {
    const p = props.p
    const url = "/post/" + p.id
    return (<>
        <article id={p.id} className="bg-white mx-10 p-3 rounded-xl text-wrap">
            <div className="flex flex-row gap-x-2">
                <Image
                    width="20"
                    height="20"
                    src={p.img}
                    alt="userimage"
                    className="rounded-full w-auto h-auto"
                ></Image>
               <Link href={url}><h1>{p.user}</h1></Link>
               <Link href={url}><h1 className="text-blue-400 hover:text-blue-600">Go to post</h1></Link>
            </div>
            <div className="text-[0.5rem] font-light ml-1">
                {new Date(p.datetime).toLocaleString('en-us')}
            </div>
            <p className="text-wrap" style={{ wordWrap: "break-word",
  overflowWrap: "break-word",
  whiteSpace: "normal",}}>{p.post}</p>
        </article></>)
}

export default Card;
