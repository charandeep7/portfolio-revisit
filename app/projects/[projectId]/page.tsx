"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RiComputerFill } from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";

export default function Project({ params }: { params: { projectId: string } }) {
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("project") as string);
    if (items) {
      for (let i = 0; i < data.length; ++i) {
        if (data[i][0] === params.projectId) {
          setItems(data[i]);
          break;
        }
      }
    }
  }, []);
  return (
    <div>
      <h1 className="text-5xl pt-4 capitalize text-center sm:text-6xl md:text-7xl">
        {items[1]?.title}
      </h1>
      <div className="flex flex-col p-4 m-10 gap-4 justify-evenly sm:flex-row">
          <p className="text-base tracking-wide sm:w-[40%] text-justify font-variant-smallcaps bg-gray-50/10 p-4 rounded">
            {items[1]?.details}
          </p>
        <div className="sm:w-[40%]">
          <Carousel className="border m-0 border-gray-400 rounded-lg p-2">
            <CarouselContent>
              {items[1]?.imgsrc?.map((img: string, index: number) => (
                <CarouselItem key={index}>
                  <div className="flex justify-center items-center">
                    <Image src={img} width={350} height={350} alt="img" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="flex justify-evenly items-center mb-4 sm:mt-16">
        <Button
          className={
            items[1]?.ishosted
              ? "bg-primary hover:bg-[#281f5c] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-[35%]"
              : "text-white bg-muted opacity-40 w-[35%] hover:bg-muted cursor-not-allowed"
          }
          disabled={items[1]?.ishosted}
          asChild
        >
          <a
            href={items[1]?.ishosted ? items[1]?.hostedlink : "#"}
            target="_blank"
            className="text-white"
          >
            Live &nbsp;
            <RiComputerFill />
          </a>
        </Button>
        <Button
          className="bg-transparent border border-solid border-primary hover:bg-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-[35%]"
          asChild
        >
          <a href={items[1]?.githublink} target="_blank" className="text-white">
            Github Repo &nbsp; <VscGithub />
          </a>
        </Button>
      </div>
    </div>
  );
}
