import Introduction from "./Introduction";
import MyImage from "./MyImage";

export default function Hero(){
    return (
        <div className="flex flex-col items-center py-14 md:flex-row-reverse md:justify-evenly md:py-24">
            <MyImage />
            <Introduction />
        </div>
    )
}