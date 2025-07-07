"use client"
import React, { useEffect, useState } from 'react'
import Heading from './heading'
import Goods from './goods'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { fourPro } from '@/sanity/lib/queries'
import { Product } from '../../../types/products'
import { client } from '@/sanity/lib/client'


const Top_selling = () => {
    const [product, setProduct] = useState<Product[]>([])
    useEffect(() => {
        const fetchData = async () => {
            try{
                const fetchedProduct : Product[] = await client.fetch(fourPro)
                setProduct(fetchedProduct)
            }
            catch(error) {
                console.log("Products data not fetch ", error)
            }
        }
        fetchData()
    }, [])

    const heading = "TOP SELLING"
  return (
    <div className='mt-14 mb-8'>
        <h1 className='text-center my-8'><Heading hname={heading}/></h1>
        <section className='grid lg:gap-20 grid-cols-1  lg:grid-cols-2 xl:grid-cols-4 w-[75vw] lg:w-[80vw] xl:w-[90vw] mx-auto bg-blue-30'>
            {product.map((item:Product)=>(
                <Link key={item._id} href={`/product/${item.slug.current}`}>
                    <Goods key={item._id} {...item}/>
                </Link>
            ))} 
        </section>
        <Link href={'/new_arrivals'} className='flex justify-center pt-14'>
            <Button className='px-10 text-black bg-white border cursor-pointer hover:bg-slate-200'>View All</Button>
        </Link>
    </div>
  )
}

export default Top_selling
