import { poppins } from "@/lib/Font";
import ViewProject from "./ViewProjects";
import { readProject } from "@/app/api/prisma/readProject";
import { MyFade } from "@/components/animtions/Fade";

export default async function FeaturedProjects() {
  const myprojects = await readProject();

  return (
    <div className="flex flex-col gap-5 px-8 mt-4" id="project">
      <MyFade>
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
          {`Over the past few years, I've successfully completed numerous small and large projects. To get a glimpse of my work, I've highlighted a few projects here. For a comprehensive list, you can visit my GitHub profile. I'm always open to new ideas for projects, and I welcome collaboration. If you have suggestions for improvement or if you're interested in working together on a project, feel free to connect with me. While I haven't had much experience in team collaborations, I'm enthusiastic about the prospect and eager to explore it further. Let's create something great together!`}
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
        {myprojects && <ViewProject values={myprojects} />}
      </MyFade>
    </div>
  );
}
