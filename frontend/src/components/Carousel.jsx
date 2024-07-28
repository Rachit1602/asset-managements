import { Carousel } from "flowbite-react";
import img1 from '../img/img1.jpg'
export function ImgCarousel() {
  return (
    <div className="p-0">
      <Carousel className="h-128 relative -z-10">
        <img src={img1} alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        {/* <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." /> */}
      </Carousel>
    </div>
  );
}