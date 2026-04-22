"use client";
import { signOut, useSession } from "@/app/lib/auth-client";
import { Link } from "@heroui/react";

const Navbar = () => {
  const { data, isPending } = useSession();
  if (isPending) {
    return <h1>Loading...</h1>;
  }
  console.log(data, "Session data in navbar");
  const user = data?.user;

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg ">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <p className="font-bold">ACME</p>
        </div>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
        <div className="flex flex-row justify-center items-center gap-4">
          {user ? (
            <>
              <p>
                Welcome <span className="font-semibold">{user.name}</span>
              </p>
              <button
                onClick={() => {
                  signOut();
                }}
                className="btn btn-primary"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button>
                <Link href="/auth/signin">Sign In</Link>
              </button>
            </>
          )}
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
