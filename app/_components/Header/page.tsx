"use client"
import Link from "next/link";
import Logo from "./Logo";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navMenuList = [
  {
    id: "1",
    name: "Home",
    href: "/",
  },
  {
    id: "2",
    name: "About",
    href: "/about",
  },
  {
    id: "3",
    name: "History",
    href: "/history",
  },
  {
    id: "4",
    name: "Service",
    href: "/service",
  },
  {
    id: "5",
    name: "Projects",
    href: "/projects",
  },
  {
    id: "6",
    name: "Blog",
    href: "/blog",
  },
];

export default function Navbar() {
  const pathname = usePathname()
  const [toggle,setToggle] = useState(false)
  const handleOpen = () => {
    setToggle(!toggle)
    if(toggle){
      alert('hello')
    }
  }
  return (
    <header className="bg-black/75 dark:bg-gray-900">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Logo />
        <div className="flex flex-1 items-center justify-end">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {navMenuList.map(({ name, id, href }) => (
                <li key={id}>
                  <Link
                    className={`text-white transition hover:text-gray-100/75 hover:underline dark:text-white dark:hover:text-white/75 ${pathname === href ? 'text-[#6c58db] underline' : null}`}
                    href={href}
                    id={id}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <button onClick={() => alert('cl')} className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75 md:hidden">
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
