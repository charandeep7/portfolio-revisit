import { poppins } from "@/lib/Font";
import { readData } from "@/app/api/ReadData";
import ViewProject from "./ViewProjects";

export default async function FeaturedProjects() {
  const myprojects = await readData();
  // const myprojects = [1,2,3]

  return (
    <div className="flex flex-col gap-5 px-8 mt-4">
      <h1
        className={`tracking-wider uppercase text-3xl first-letter:text-5xl first-letter:text-primary-foreground ${poppins.className}`}
        style={{
          textShadow:
            "0px 3px 2px #ccc, 0px 8px 10px rgba(0, 0, 0, 0.15), 0px 12px 2px rgba(0, 0, 0, 0.7)",
        }}
      >
        Featured Projects
      </h1>
      <p className="tracking-wide first-letter:text-primary-foreground first-letter:text-2xl sm:w-3/4 sm:text-justify">
        {`I have made many small and big project in last few years. So, Guys here
        are a few of my projects. You can visit my github for all projects list.
        You can also suggest me some idea about to create project or even we can
        make together. Check and suggest me where can i improve in my project. I
        don't have any experience in team working but i'd love to work together.`}
      </p>
      <h2
        className={`tracking-widest capitalize gap-2 text-xl first-letter:text-3xl first-letter:text-primary-foreground ${poppins.className}`}
        style={{
          textShadow:
            "0px 0px 1px #ccc, 0px 8px 10px rgba(0, 0, 0, 0.15), 0px 8px 8px rgba(0, 0, 0, 0.7)",
        }}
      >
        Project
      </h2>
      {
        myprojects && <ViewProject values={myprojects} />

      }
    </div>
  );
}
