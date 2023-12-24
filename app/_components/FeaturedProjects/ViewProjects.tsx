"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { MdOutlineDownloading } from "react-icons/md";
import ProjectCard from "./Card";

export default function ViewProject({ values }: {
    values: any
}) {
  useEffect(() => {
    localStorage.setItem('project',JSON.stringify(values))
  },[])
  const [loadmore, setLoadmore] = useState(4);
  const data = values.slice(0, Math.min(loadmore, values.length));
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 h-[100%] w-[100%]  mb-[25px]">
        <Suspense
          fallback={
            <Skeleton className="w-[100px] h-[20px] bg-gray-200 rounded-full" />
          }
        >
          {data.map((e: any) => (
            <ProjectCard
              imgsrc={e[1].imgsrc[0]}
              alt={e[1].alt}
              title={e[1].title}
              description={e[1].description}
              ishosted={e[1].ishosted}
              hostedlink={e[1].hostedlink}
              githublink={e[1].githublink}
              projectid={e[0]}
              key={e[0]}
            />
          ))}
        </Suspense>
      </div>
      <div className="flex justify-evenly items-center gap-4 flex-col sm:flex-row">
        <Button
          onClick={() => setLoadmore((counter) => counter + 2)}
          className="bg-white hover:bg-gray-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-[40%]"
        >
          Load More &nbsp;{" "}
          <span className="text-xl">
            <MdOutlineDownloading />
          </span>
        </Button>
        <Button
          onClick={() => setLoadmore((counter) => counter + 2)}
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
