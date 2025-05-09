import React from 'react'
import Heading from './heading'
import Goods from './goods'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const New_arrivals = () => {
    const new_arrivals = [
        {id: 1, name: "T-SHIRT WITH TAPE DETAILS", price: "$120", image: "/new-arrivals/t-shirt.png"},
        {id: 2, name: "SKINNY FIT JEANS", price: "$240", image: "/new-arrivals/jeans.png"},
        {id: 3, name: "CHECKERED SHIRT", price: "$180", image: "/new-arrivals/shirt.png"},
        {id: 4, name: "SLEEVE STRIPED T-SHIRT", price: "$130", image: "/new-arrivals/striped-t-shirt.png"},
    ]
    const heading = "NEW ARRIVALS"
  return (
    <div className='mt-14 mb-8'>
        <h1 className='text-center my-8'><Heading hname={heading}/></h1>
        <section className='grid lg:gap-20 grid-cols-1  lg:grid-cols-2 xl:grid-cols-4 w-[75vw] lg:w-[80vw] xl:w-[90vw] mx-auto bg-blue-30'>
            {new_arrivals.map((item:any,index:number)=>{
                return(
                    <Goods key={index} name={item.name} price={item.price} image={item.image}/>
                )
            })}
        </section>
        <Link href={'/'} className='flex justify-center'>
            <Button className='px-10 text-black bg-white border cursor-pointer hover:bg-slate-200'>View All</Button>
        </Link>
    </div>
  )
}

export default New_arrivals