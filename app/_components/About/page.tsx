import { poppins } from "@/lib/Font";
import { knowledges } from "@/lib/constants";
import Image from "next/image";
import { MyFade } from "@/components/animtions/Fade";

export default function About() {
  return (
    <div className="flex flex-col gap-5 px-8" id="about">
      <MyFade>
        <h1
          className={`tracking-wider uppercase text-3xl first-letter:text-5xl first-letter:text-primary-foreground ${poppins.className}`}
          style={{
            textShadow:
              "0px 3px 2px #ccc, 0px 8px 10px rgba(0, 0, 0, 0.15), 0px 12px 2px rgba(0, 0, 0, 0.7)",
          }}
        >
          About Me
        </h1>
        <p className="tracking-wide first-letter:text-primary-foreground first-letter:text-2xl sm:w-3/4 sm:text-justify">
          {`
        Hey, My name is Charandeep Kumar (Kitish). I'm currently studying in
        Indian Institute of Information Technology, Lucknow. I'm in 3rd year
        B.Tech IT Branch. I've great interset in the solving algothimic problem
        and developing websites. Recently, I've started studying about react
        native to develop app. I also love travelling. I don't have any fixed
        and final plan for future but i just want to be a great Engineer.Hey, My
        name is Charandeep Kumar (Kitish). I'm currently studying in Indian
        Institute of Information Technology, Lucknow. I'm in 3rd year B.Tech IT
        Branch. I've great interset in the solving algothimic problem and
        developing websites. Recently, I've started studying about react native
        to develop app. I also love travelling. I don't have any fixed and final
        plan for future but i just want to be a great Engineer.`}
        </p>
        <h2
          className={`tracking-widest capitalize gap-2 text-xl first-letter:text-3xl first-letter:text-primary-foreground ${poppins.className}`}
          style={{
            textShadow:
              "0px 0px 1px #ccc, 0px 8px 10px rgba(0, 0, 0, 0.15), 0px 8px 8px rgba(0, 0, 0, 0.7)",
          }}
        >
          Few Achievements:
        </h2>
        <ul className="flex flex-col gap-2 list-disc list-inside marker:text-primary">
          <li>Specialist on Codeforces (mxRating: 1403)</li>
          <li>LeetCode Rating: 1855</li>
          <li>3★ on Codechef (mxRating: 1627)</li>
          <li>Atcoder Rating: 669</li>
          <li>{`2nd Winner in Fresher's Cup`}</li>
        </ul>
        <h2
          className={`tracking-widest capitalize gap-2 text-xl first-letter:text-3xl first-letter:text-primary-foreground ${poppins.className}`}
          style={{
            textShadow:
              "0px 0px 1px #ccc, 0px 8px 10px rgba(0, 0, 0, 0.15), 0px 8px 8px rgba(0, 0, 0, 0.7)",
          }}
        >
          Knows
        </h2>

        <div className="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-9">
          {knowledges.map((knowledge) => (
            <div
              key={knowledge.id}
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                border: "1px solid rgba(255, 255, 255, 0.35)",
                transition: "all 350ms ease-in",
                borderRadius: "16px",
              }}
              className="flex flex-col justify-evenly items-center p-5 hover:rotate-[360deg] hover:bg-primary over:shadow-2xl hover:shadow-primary/50"
            >
              <Image
                src={knowledge.img}
                alt={knowledge.name}
                height={20}
                width={40}
              />
              <p className="text-center">{knowledge.name}</p>
            </div>
          ))}
        </div>
      </MyFade>
    </div>
  );
}
