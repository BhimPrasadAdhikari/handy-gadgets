'use client'
import { Billboard as BillboardType } from '@/types';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image';

interface BillboardProps {
  data: BillboardType[];
}
const Billboard: React.FC<BillboardProps> = ({ data }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
   <div className='w-full h-auto'>
      <Carousel
      plugins={[plugin.current]}
      className="w-full relative  "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {data.map((item) => {
        return  <CarouselItem key={item.label}>
            <div className="p-1 ">
              <Card >
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image src={item.imageUrl} height={500} width={500} alt='image'/>
                  <div >

                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
})}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
       
  );
};
export default Billboard;
 // <div className="h-full w-full flex flex-col justify-center items-center text-center">
          {/* <div className='font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs'>{data?.label}</div> */}
        {/* </div> */}
      // </div>
    // </div>
     // <div className="p-4 sm:p-6 rounded-xl overflow-hidden ">
      {/* <div
        className="rounded-xl aspect-square relative md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      > */}