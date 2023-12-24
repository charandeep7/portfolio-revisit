import ContactForm from "./ContactForm";
import Social from "./Social";

export default function Contact(){
    return (
        <div className="flex flex-col justify-evenly m-4 ml-8 lg:flex-row">
            <Social />
            <ContactForm />
        </div>
    )
}