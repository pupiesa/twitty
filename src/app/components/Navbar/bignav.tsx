"use client";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaUser } from "react-icons/fa";
import { RiUserForbidFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";

const Nav = () => {
  const { data: session } = useSession();

  let navclass =
    "bg-slate-300 text-black h-[3rem] grid grid-cols-2 grid-flow-col items-baseline fixed w-full top-0 text-[0.8em]";
  const buttonclass =
    "bg-slate-500 w-[3rem] text-[0.6em] rounded-md hover:bg-white hover:text-black text-white mx-5";
  const ulclass = "flex flex-row my-auto justify-end";
  if (session) {
    return (
      <nav className={navclass}>
        <ul className="flex flex-row my-auto mx-4 gap-x-5 items-center">
          <FaSquareXTwitter className="text-2xl" />
          <Link href="/">Home</Link>
          <Link href="/profile">Profile</Link>
        </ul>
        <ul className={ulclass}>
          <div className=" flex flex-row items-baseline">
            <FaUser />
            <div className="text-clip">Hi {session.user?.name}</div>
          </div>
          <button
            onClick={() => signOut()}
            className={`${buttonclass} truncate`}
          >
            Sign out
          </button>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className={navclass}>
        <ul className="flex flex-row my-auto mx-4 gap-x-5">
          <FaSquareXTwitter className="text-2xl" />
          <Link href="/">Home</Link>
          <Link href="/profile">Profile</Link>
        </ul>
        <ul className={ulclass}>
          <div className=" flex flex-row items-baseline">
            <RiUserForbidFill />
            Guest
          </div>
          <button onClick={() => signIn("google")} className={buttonclass}>
            Sign in
          </button>
        </ul>
      </nav>
    );
  }
};

export default Nav;
