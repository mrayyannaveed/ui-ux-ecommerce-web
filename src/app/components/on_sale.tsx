"use client"
import { useEffect, useState } from 'react'
import Heading from './heading'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { allProducts } from '@/sanity/lib/queries'
import { Product } from '../../../types/products'
import { client } from '@/sanity/lib/client'
import Goods from './goods'


const OnSale = () => {
  const [saleProduct, setSaleProduct] = useState<Product[]>([]);
  const [showAll, setShowAll] = useState(false);
    
  useEffect(() => {
      const fetchData = async () => {
          try{
            const fetchedProducts: Product[] = await client.fetch(allProducts)
              setSaleProduct(fetchedProducts.filter((Item: Product) => Item.tag === 'sale'))
          }
          catch(error) {
              console.log("Products data not fetch ", error)
          }
      }
      fetchData() // Call the async function to fetch data on component mount
  }, [])


  const displayedProducts = showAll ? saleProduct : saleProduct.slice(0, 4);


  const heading = "ON SALE"

  return (
    <div className='mt-14 mb-8'>
        <h1 className='text-center my-14'><Heading hname={heading}/></h1>
        <section className='grid lg:gap-20 grid-cols-1  lg:grid-cols-2 xl:grid-cols-4 w-[75vw] lg:w-[80vw] xl:w-[90vw] mx-auto bg-blue-30'>
            {displayedProducts.map((item:Product)=>(
                <Link key={item._id} href={`/product/${item.slug.current}`}>
                    <Goods key={item._id} {...item}/>
                </Link>
            ))}
        </section>
        <div className='flex justify-center pt-14'>
            <Button 
                onClick={() => setShowAll(!showAll)}
                className='px-10 text-black bg-white border cursor-pointer hover:bg-slate-200'
            >
                {showAll ? 'Show Less' : 'View All'}
            </Button>
        </div>
    </div>
  )
}



export default OnSale
