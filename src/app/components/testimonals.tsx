import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
import React from 'react'
import Heading from "./heading"
import Review from "./review"

const Testimonals = () => {
    const heading = "OUR HAPPY CUSTOMERS"
  return (
    <div className="mt-14 w-[80vw] mx-auto mb-8">
        <Heading hname={heading}/>
        <Carousel>
            <CarouselContent>
            <CarouselItem><Review/></CarouselItem>
            <CarouselItem><Review/></CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="cursor-pointer"/>
            <CarouselNext className="cursor-pointer"/>
        </Carousel>

    </div>
  )
}

export default Testimonals