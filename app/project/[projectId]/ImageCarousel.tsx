"use client"
import Carousel from "nuka-carousel";

const ImageCarousel = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <Carousel className="bg-gray-50/10 p-2" autoplay autoplayInterval={2000}>
      {children}
    </Carousel>
  );
};

export default ImageCarousel