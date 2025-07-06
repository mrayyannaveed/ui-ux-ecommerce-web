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

// "use client" 
// import React, { useEffect, useState } from 'react'
// import Heading from './heading'
// import { Button } from '@/components/ui/button'
// import Link from 'next/link'
// import Image from 'next/image'

// interface sale {
//     id: number,
//     name: string,
//     price: number,
//     image: string,
//     inStock?: number,
//     tag?: string
// }

// type Sale = {
//     _id : number,
//     name : string,
//     price : number,
//     imageUrl : string,
//     tag ?: string,
//     stock ?: number
// }

// const OnSale = () => {
//   const [sale, setSale] = useState<sale[]>([]);
//   const [showAll, setShowAll] = useState(false);

//     useEffect(() => { 
//         const fetchData = async () => {
//             try{
//                 const response = await fetch("https://677d08a74496848554c8b8fd.mockapi.io/data");
//                 const data = await response.json();
//                 setSale(data.filter((item: sale) => item.tag === 'sale'))
//             }
//             catch(error) {
//                 console.log("Products data not fetch ", error)
//             }
//         }
//         fetchData() // Call the async function to fetch data on component mount
//     }, [])


//     console.log(sale)
//     const heading = "ON SALE"

//     const displayedProducts = showAll ? sale : sale.slice(0, 4);

//   return (
//     <div className='mt-14 mb-8'>
//         <h1 className='text-center my-8'><Heading hname={heading}/></h1>
//         <section className='grid lg:gap-20 grid-cols-1  lg:grid-cols-2 xl:grid-cols-4 w-[75vw] lg:w-[80vw] xl:w-[90vw] mx-auto bg-blue-30'>
//             {displayedProducts.map((item:sale)=>(
//                 <Link key={item.id} href={`/product/${item.id}`}>
//                     <div className='space-y-2 hover:scale-110 duration-700 flex flex-col items-center bg-[#eee9e9] rounded-2xl '>
                        
//                         <Image 
//                             className='cursor-pointer w-full h-60' 
//                             src={item.image}
//                             alt={item.name} 
//                             width={1000} 
//                             height={1000}
//                         />
//                         <p className='font-bold'>{item.name}</p>
//                         <p className='font-bold'>{item.price}</p>
//                     </div>
//                 </Link>
//             ))}
//         </section>
//         <div className='flex justify-center pt-14'>
//             <Button 
//                 onClick={() => setShowAll(!showAll)}
//                 className='px-10 text-black bg-white border cursor-pointer hover:bg-slate-200'
//             >
//                 {showAll ? 'Show Less' : 'View All'}
//             </Button>
//         </div>
//     </div>
//   )
// }

// export default OnSale
