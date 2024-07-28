import React from 'react';
import { Button } from 'flowbite-react';
import { ImgCarousel } from './Carousel';
// import FooterComp from './Footer';
import Resources from './Resources';

export default function Home(){
    return (
        <div className=''>
            <ImgCarousel/>
            <Resources className="relative py-2   mx-0"/>
            {/* <FooterComp/> */}
        </div>

    )
}