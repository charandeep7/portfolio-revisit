import { readSingleProject } from "@/app/api/prisma/readProject";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Suspense } from "react";
import { RiComputerFill } from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";
import { notFound } from "next/navigation";
import ImageCarousel from "./ImageCarousel";

const DivFrameWork: React.FC<{ id: number; img: string; name: string }> = ({
  id,
  img,
  name,
}) => {
  return (
    <div>
      <Image
        src={img}
        alt={id.toString()}
        height={1000}
        width={1000}
        className="w-[50px] h-[50px]"
      />
      <h2 className="text-center uppercase font-bold">{name}</h2>
    </div>
  );
};

export default async function Project({
  params,
}: {
  params: { projectId: string };
}) {
  const item = await readSingleProject(parseInt(params.projectId));
  if (!item?.isMore) {
    notFound();
  }
  return (
    <Suspense fallback={<></>}>
      <div>
        <div className="flex flex-col justify-center items-center gap-2 p-4">
          <h1 className="text-4xl capitalize  sm:text-6xl md:text-7xl">
            {item?.title}
          </h1>
          <p className="w-[100%] sm:w-1/3 text-center">
            {item?.desc} consequuntur incidunt perspiciatis exercitationem,
            explicabo ipsum
          </p>
        </div>
        <p className="text-base tracking-wide text-justify font-variant-smallcaps bg-gray-50/10 p-4 rounded">
          {item?.projectDetails[0]?.longdesc}
        </p>
        <div className="flex justify-center items-center p-2 m-1">
          <Suspense fallback={null}>
            <ImageCarousel>
              {item?.projectDetails.at(0)?.images?.map((img) => (
                <Image
                  key={img.id.toString()}
                  src={img.url}
                  alt={img.id.toString()}
                  width={1000}
                  height={1000}
                  className="block m-auto w-[350px] h-[350px] object-contain"
                />
              ))}
            </ImageCarousel>
          </Suspense>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Suspense fallback={null}>
            {item?.projectDetails.at(0)?.frameworks?.map((fw,index) => (
              <DivFrameWork key={index.toString()} id={fw.id} img={fw.logo} name={fw.name} />
            ))}
          </Suspense>
        </div>
        <div className="flex justify-evenly items-center mb-4">
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
