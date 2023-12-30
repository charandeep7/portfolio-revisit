"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Suspense, useState, useEffect } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { MdOutlineDownloading } from "react-icons/md";
import ProjectCard from "./Card";

export default function ViewProject({ values }: {
  values: PropTypes[]
}) {
  const [loadmore, setLoadmore] = useState(3);
  
  useEffect(() => {
    const storedValue = sessionStorage.getItem('loadmore');
    setLoadmore(storedValue ? parseInt(storedValue, 10) : 3);
  }, []);

  const handleIncrement = () => {
    setLoadmore((prevCount) => Math.min(prevCount + 1, values.length));
    sessionStorage.setItem('loadmore', (loadmore + 1).toString());
  };

  const data = values.slice(0, Math.min(loadmore, values.length));

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 h-[100%] w-[100%]  mb-[25px]">
        <Suspense
          fallback={
            <Skeleton className="w-[100px] h-[100px] bg-gray-200 rounded-full" />
          }
        >
          {data.map((e) => (
            <ProjectCard
              img={e.img}
              alt={e.alt}
              title={e.title}
              desc={e.desc}
              ishosted={e.ishosted}
              hostedLink={e.hostedLink}
              githubLink={e.githubLink}
              projectID={e.id.toString()}
              isMore={e.isMore}
              key={e.id}
            />
          ))}
        </Suspense>
      </div>
      <div className="flex justify-evenly items-center gap-4 flex-col sm:flex-row">
        <Button
          onClick={handleIncrement}
          className={`bg-white hover:bg-gray-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-[40%] ${loadmore >= values.length ? 'bg-muted cursor-not-allowed hover:bg-muted hover:translate-y-0 hover:scale-1 text-gray-500' : null}`}
        >
          Load More &nbsp;{" "}
          <span className="text-xl">
            <MdOutlineDownloading />
          </span>
        </Button>
        <Button
          className="bg-red-600 hover:bg-gray-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-[40%] text-black"
          asChild
        >
          <Link href="/addproject" className="text-black overflow-hidden">
            Add Project &nbsp;
            <span className="text-xl">
              <IoMdAddCircle />
            </span>
          </Link>
        </Button>
      </div>
    </>
  );
}
