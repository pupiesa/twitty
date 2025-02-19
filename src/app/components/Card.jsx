import Image from "next/image";
import React from "react";

function card(props) {
    const p = props.p
    return (<>
        <div className="bg-white mx-3 p-3 rounded-xl">
            <div className="flex flex-row">
                <Image
                    width="20"
                    height="20"
                    src={p.img}
                    alt="userimage"
                    className="rounded-full"
                ></Image>
                <h1>{p.user}</h1>
            </div>
            <div className="text-[0.5rem] font-light ml-1">
                {new Date(p.datetime).toLocaleString('en-us')}
            </div>
            <div>{p.post}</div>
        </div></>)
}

export default card;
