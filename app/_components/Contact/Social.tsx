import { poppins } from "@/lib/Font";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin
} from "react-icons/ai";
import { FaSquareXTwitter, FaSquareGithub } from "react-icons/fa6";

export default function Social() {
  return (
    <div className="flex flex-col gap-2">
      <h1
        className={`tracking-wider text-3xl uppercase first-letter:text-primary-foreground ${poppins.className}`}
        style={{
          textShadow:
            "0px 18px 2px #0f0f0f, 10px 10px 10px rgba(0, 0, 0, 0.15),10px 12px 2px rgba(0, 0, 0, 0.7)",
        }}
      >
        Connect with Me
      </h1>
      <p className="tracking-wide text-xl capitalize first-letter:text-primary-foreground">
        Feel free to contact me
      </p>
      <div className="flex space-x-4">
        <a className="hover:text-primary-foreground text-2xl rounded-full" href="https://www.facebook.com/charandeep.kumar.12" target="_blank">
            <AiFillFacebook  />
        </a>
        <a className="hover:text-primary-foreground text-2xl" href="https://www.instagram.com/_kitish" target="_blank">
            <AiFillInstagram />
        </a>
        <a className="hover:text-primary-foreground text-2xl" href="https://twitter.com/_kitish" target="_blank">
            <FaSquareXTwitter />
        </a>
        <a className="hover:text-primary-foreground text-2xl" href="https://www.linkedin.com/in/charandeep/" target="_blank">
            <AiFillLinkedin />
        </a>
        <a className="hover:text-primary-foreground text-2xl" href="https://www.github.com/charandeep7" target="_blank">
            <FaSquareGithub />
        </a>
      </div>
    </div>
  );
}
