import Image from "next/image";
import me from '@/public/me.jpg'

export default function MyImage(){
    return (
        <Image src={me} alt='kenzie' width={300} height={300} className="pr-4 md:hover:shadow-2xl md:hover:shadow-primary/50 md:transition md:duration-300 md:ease-in-out md:hover:scale-90 lg:hover:scale-110" />
    )
}