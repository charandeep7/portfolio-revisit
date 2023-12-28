import ContactForm from "./ContactForm";
import Social from "./Social";
import { MyFade } from "@/components/animtions/Fade";

export default function Contact() {
  return (
    <div
      className="flex flex-col justify-evenly m-4 ml-8 lg:flex-row"
      id="contact"
    >
      <MyFade>
        <Social />
        <ContactForm />
      </MyFade>
    </div>
  );
}
