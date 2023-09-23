import { getAuthSession } from "@/lib/nextauth";
import React from "react";
import Link from "next/link";
import SignInButton from "./SignInButton";
import UserAccountNav from "./UserAccountNav";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = async () => {
  const session = await getAuthSession();
  return (
    <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300 py-2">
      <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
        {/* Logo */}
        <Link
          href="/"
          className="rounded-lg border-2 border-slate-700 px-2 py-1 text-lg font-bold bg-[#111827] text-white dark:border-white flex items-center gap-2"
        >
          <svg
            fill="#ffffff"
            width="30"
            height="30"
            viewBox="-3.2 -3.2 38.40 38.40"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0">
              <rect
                x="-3.2"
                y="-3.2"
                width="38.40"
                height="38.40"
                rx="19.2"
                fill="#111827"
                strokewidth="0"
              ></rect>
            </g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>brain-freeze</title>{" "}
              <path d="M15.847 0.542c-6.795 0-12.303 6.914-12.303 15.443s5.508 15.443 12.303 15.443 12.303-6.914 12.303-15.443-5.508-15.443-12.303-15.443zM10.556 25.633c-1.464 0-2.65-1.197-2.65-2.674s1.187-2.674 2.65-2.674 2.65 1.197 2.65 2.674c0 1.477-1.187 2.674-2.65 2.674zM6.264 11.365c0-5.354 4.34-9.694 9.694-9.694s9.694 4.34 9.694 9.694-4.34 9.694-9.694 9.694-9.694-4.34-9.694-9.694zM20.883 25.633c-1.464 0-2.65-1.197-2.65-2.674s1.187-2.674 2.65-2.674 2.65 1.197 2.65 2.674c-0 1.477-1.187 2.674-2.65 2.674zM26.583 23.53c-0.364 0.815-0.785 1.584-1.256 2.299 1.457-0.603 2.727-1.369 3.708-2.299h-2.452zM5.11 23.53h-2.234c0.91 0.863 2.073 1.585 3.406 2.167-0.437-0.677-0.829-1.402-1.171-2.167zM15.979 18.581l-6.222-3.628-0.023-7.216 6.199-3.588 6.222 3.628 0.023 7.216-6.199 3.588z"></path>{" "}
            </g>
          </svg>
          <p>TopicTest</p>
        </Link>
        <div className="flex items-center">
          <ThemeToggle className="mr-3" />
          <div className="flex items-center">
            {session?.user ? (
              <UserAccountNav user={session.user} />
            ) : (
              <SignInButton text="Sign In" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
