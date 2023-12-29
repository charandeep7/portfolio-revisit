import { readSingleProject } from "@/app/api/prisma/readProject";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Suspense } from "react";
import { RiComputerFill } from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";
import { notFound } from 'next/navigation'

export default async function Project({
  params,
}: {
  params: { projectId: string };
}) {
  const item = await readSingleProject(parseInt(params.projectId));
  if(!item?.isMore){
    notFound() 
  }
  return (
    <Suspense fallback={<></>}>
      <div>
        <h1 className="text-5xl pt-4 capitalize text-center sm:text-6xl md:text-7xl">
          {item?.title}
        </h1>
        <div className="flex flex-col p-4 m-10 gap-4 justify-evenly sm:flex-row">
          <p className="text-base tracking-wide sm:w-[40%] text-justify font-variant-smallcaps bg-gray-50/10 p-4 rounded">
            {item?.projectDetails[0]?.longdesc}
          </p>
          <div className="sm:w-[40%]">
            {item?.projectDetails.at(0)?.images?.map(({ id, url }) => (
              <div
                className="flex justify-center items-center"
                key={id.toString()}
              >
                <Image src={url} width={350} height={350} alt="img" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-evenly items-center mb-4 sm:mt-16">
          <Button
            className={
              item?.ishosted
                ? "bg-primary hover:bg-[#281f5c] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-[35%]"
                : "text-white bg-muted opacity-40 w-[35%] hover:bg-muted cursor-not-allowed"
            }
            disabled={item?.ishosted}
            asChild
          >
            <a
              href={item?.ishosted ? item.hostedLink : "#"}
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
            <a href={item?.githubLink} target="_blank" className="text-white">
              Github Repo &nbsp; <VscGithub />
            </a>
          </Button>
        </div>
      </div>
    </Suspense>
  );
}
