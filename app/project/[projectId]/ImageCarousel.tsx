// "use client"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Image from "next/image";

// export default function ImageCarousel(item) {
//   return (
//     <Carousel className="border m-0 border-gray-400 rounded-lg p-2">
//       <CarouselContent>
//         {item?.projectDetails.at(0)?.images?.map(({ id, url }) => (
//           <CarouselItem key={id.toString()}>
//             <div className="flex justify-center items-center">
//               <Image src={url} width={350} height={350} alt="img" />
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   );
// }
