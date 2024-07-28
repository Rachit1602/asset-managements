import { Carousel } from "flowbite-react";
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
export function ImgCarousel() {
  return (
    <div className="h-128">
      <Carousel className="h-128">
        <img src={img2} alt="..." />
        <img src={img3} alt="..." />
        {/* <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." /> */}
      </Carousel>
    </div>
  );
}