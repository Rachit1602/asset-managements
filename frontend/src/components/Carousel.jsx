import { Carousel } from "flowbite-react";
import img1 from '../img/img1.jpg';
import img2 from '../img/Indore_Rajwada01.jpg';

export function ImgCarousel() {
  return (
    <div className="h-128">
      <Carousel className="h-128">
        <img src={img1} alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        {/* <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." /> */}
      </Carousel>
    </div>
  );
}