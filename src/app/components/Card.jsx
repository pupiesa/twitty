import Image from "next/image";
import React from "react";
import Link from "next/link";

function Card(props) {
    const p = props.p
    const url = "/post/" + p.id
    console.log(url)
    return (<>
        <div id={p.id} className="bg-white mx-10 p-3 rounded-xl">
            <div className="flex flex-row gap-x-2">
                <Image
                    width="20"
                    height="20"
                    src={p.img}
                    alt="userimage"
                    className="rounded-full w-auto h-auto"
                ></Image>
               <Link href={url}><h1 className="text-blue-400 hover:text-blue-600">{p.user}</h1></Link>
            </div>
            <div className="text-[0.5rem] font-light ml-1">
                {new Date(p.datetime).toLocaleString('en-us')}
            </div>
            <div>{p.post}</div>
        </div></>)
}

export default Card;
