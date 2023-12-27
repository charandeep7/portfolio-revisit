"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { random } from 'glowing-engine'
import { FaDownload } from "react-icons/fa6";
import { MdOutlineMenuBook } from "react-icons/md";

const emojis = ['😎','😊','😍','😇','🤓']

export default function Introduction() {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    let timer = setInterval(() => {
      setToggle(!toggle);
    }, 2000);
    return () => clearInterval(timer);
  }, [toggle]);
  return (
    <div className="flex flex-col gap-3 items-center pl-4 pt-10 md:items-start md:pt-0">
      <h1 className="text-3xl font-bold tracking-wider first-letter:text-4xl first-letter:text-primary-foreground">
        {`Hello, i'm`}
      </h1>
      <h2
        onClick={() => setToggle(!toggle)}
        className="text-4xl font-bold text-center tracking-wider first-letter:text-4xl first-letter:text-primary-foreground"
      >
        {toggle ? "Charandeep Kumar" : `Kitish ${random.randomPickFromArray(emojis)}`}
      </h2>
      <p className="max-w-[660px] w-fit font-variant-smallcaps first-letter:text-3xl first-letter:text-primary-foreground tracking-wide">
        Fullstack developer & Coder. B.Tech 3rd Year IIIT Lucknow Students.
        Having interest in coding and exploring new technologies.
      </p>
      <div className="flex space-x-4">
        <Button
          className="bg-primary hover:bg-[#281f5c] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          asChild
        >
          <Link className="text-white" href="/">
            About Me &nbsp;
            <MdOutlineMenuBook />
          </Link>
        </Button>
        <Button
          className="bg-transparent border border-solid border-primary hover:bg-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          asChild
        >
          <a className="text-white" target="_blank" href="https://kitish-bucket.s3.ap-south-1.amazonaws.com/portfolio-2024/resume/resume-charandeep.pdf" download='resume-charandeep'>
            Resume &nbsp;
            <FaDownload />
          </a>
        </Button>
      </div>
    </div>
  );
}
