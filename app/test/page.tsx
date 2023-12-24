"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { images } from "@/lib/constants";
import Image from "next/image";
import { RiComputerFill } from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";

const text = `I have made many small and big project in last few years. So, Guys
here are a few of my projects. You can visit my github for all
projects list. You can also suggest me some idea about to create
project or even we can make together. Check and suggest me where can i
improve in my project. I don't have any experience in team working but
i'd love to work together.I have made many small and big project in
last few years. So, Guys here are a few of my projects. You can visit
my github for all projects list. You can also suggest me some idea
about to create project or even we can make together. Check and
suggest me where can i improve in my project. I don't have any
experience in team working but i'd love to work together.`;

export default function Test() {
  return (
    <div>
      <div className="flex flex-col p-4 m-10 gap-4 justify-evenly sm:flex-row">
        <div>
          <h1 className="text-5xl mb-4 sm:text-6xl md:text-7xl">Stopwatch</h1>
          <p className="text-base tracking-wide sm:w-1/2 text-justify font-variant-smallcaps bg-gray-50/10 p-4 rounded">
            {text}
          </p>
        </div>
        <Carousel className="border border-gray-400 rounded-lg p-2 flex">
          <CarouselContent>
            {images.map((img, index) => (
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
      <div className="flex justify-evenly items-center mb-4 sm:mt-16">
        <Button
          className={
            true
              ? "bg-primary hover:bg-[#281f5c] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-[35%]"
              : "text-white bg-muted opacity-40 w-[35%] hover:bg-muted cursor-not-allowed"
          }
          disabled={true}
          asChild
        >
          <a href={true ? "" : "#"} target="_blank" className="text-white">
            Live &nbsp;
            <RiComputerFill />
          </a>
        </Button>
        <Button
          className="bg-transparent border border-solid border-primary hover:bg-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-[35%]"
          asChild
        >
          <a href={"githublink"} target="_blank" className="text-white">
            Github Repo &nbsp; <VscGithub />
          </a>
        </Button>
      </div>
    </div>
  );
}
