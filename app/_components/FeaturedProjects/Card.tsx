import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { VscGithub } from "react-icons/vsc";
import { RiComputerFill } from "react-icons/ri";
import { MdGridView } from "react-icons/md";

export default function ProjectCard({
  img,
  alt,
  title,
  desc,
  ishosted,
  hostedLink,
  githubLink,
  projectID,
  isMore,
}: {
  img: string;
  alt: string;
  title: string;
  desc: string;
  ishosted: boolean;
  hostedLink: string;
  githubLink: string;
  projectID: string;
  isMore: boolean;
}) {
  return (
    <div
      style={{
        border: "1px solid rgba(255, 255, 255, 0.35)",
        transition: "all 350ms ease-in",
        padding: "10px 10px",
      }}
      className="flex flex-col justify-between items-center rounded-[16px] shadow-2xl hover:shadow-lg hover:shadow-white/50"
    >
      <Image
        src={img}
        alt={alt}
        width={500}
        height={500}
        className="w-3/4 object-cover rounded-sm mb-1"
      />
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="overflow-hidden mb-4 text-center">{desc}</p>
      <div className="flex flex-col gap-4 mb-2 sm:flex-row items-center w-[100%] justify-evenly">
        <Button
          className={
            ishosted
              ? "bg-primary hover:bg-[#281f5c] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-[70%]"
              : "text-white w-[70%] bg-muted opacity-40 hover:bg-muted cursor-not-allowed"
          }
          disabled={ishosted}
          asChild
        >
          <a
            href={ishosted ? hostedLink : "#"}
            target="_blank"
            className="text-white"
          >
            Live &nbsp;
            <RiComputerFill />
          </a>
        </Button>
        <Button
          className="bg-transparent border border-solid border-primary hover:bg-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-[70%]"
          asChild
        >
          <a href={githubLink} target="_blank" className="text-white">
            Github Repo &nbsp; <VscGithub />
          </a>
        </Button>
        <Button
          className={
            isMore
              ? "bg-white hover:bg-gray-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-[70%]"
              : "text-white w-[70%] bg-muted opacity-40 hover:bg-muted cursor-not-allowed"
          }
          asChild
        >
            <Link href={isMore ? `/project/${projectID}` : ""}>
              More &nbsp; <MdGridView />
            </Link>
        </Button>
      </div>
    </div>
  );
}
