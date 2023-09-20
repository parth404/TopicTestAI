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
          className="rounded-lg border-2 border-green-700 px-2 py-1 text-lg font-bold bg-green-600 text-white dark:border-white flex items-center gap-2"
        >
          <svg
            fill="#ffffff"
            width="30"
            height="30"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m32 59h13c1.1 0 2-0.9 2-2v-30c0-2.2-2-4-4-4h-10.7c-1.3 0-2.3 1-2.3 2.3v31.7c0 1.1 0.9 2 2 2z m44-30v32c0 2.2-1.8 4-4 4h-44c-2.2 0-4-1.8-4-4v-32c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h19c1.1 0 2 0.9 2 2s0.9 2 2 2h6c1.1 0 2-0.9 2-2s0.9-2 2-2h19c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6z m-21 30h12.7c1.3 0 2.3-1 2.3-2.3v-31.7c0-1.1-0.9-2-2-2h-11c-2 0-4 1.8-4 4v30c0 1.1 0.9 2 2 2z" />
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
