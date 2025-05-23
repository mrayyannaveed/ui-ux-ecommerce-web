import React from 'react'
import Heading from './heading'
import Goods from './goods'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Top_selling = () => {
    const top_selling = [
        {id: 1, name: "VERTICAL STRIPED SHIRT", price: "$212", image: "/top-selling/shirt.png"},
        {id: 2, name: "COURAGE GRAPHIC T-SHIRT", price: "$145", image: "/top-selling/t-shirt.png"},
        {id: 3, name: "LOOSE FIT BERMUDA SHORTS", price: "$80", image: "/top-selling/shorts.png"},
        {id: 4, name: "FADED SKINNY JEANS", price: "$210", image: "/top-selling/jeans.png"},
    ]
    const heading = "TOP SELLING"
  return (
    <div className='mt-14 mb-8'>
        <h1 className='text-center my-8'><Heading hname={heading}/></h1>
        <section className='grid lg:gap-20 grid-cols-1  lg:grid-cols-2 xl:grid-cols-4 w-[75vw] lg:w-[80vw] xl:w-[90vw] mx-auto bg-blue-30'>
            {top_selling.map((item:any)=>{
                return(
                    <Goods key={item.id} name={item.name} price={item.price} image={item.image}/>
                )
            })}
        </section>
        <Link href={'/'} className='flex justify-center'>
            <Button className='px-10 text-black bg-white border cursor-pointer hover:bg-slate-200'>View All</Button>
        </Link>
    </div>
  )
}

export default Top_selling