"use client"
import ProductReview from '@/app/components/productReview';
import { Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Product } from '../../../../types/products';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
// import { urlFor } from '@/sanity/lib/image';


interface ProductPageProps {
  params : Promise<{slug : string}>
}

// async function getProduct(slug : string) : Promise<Product> {
//   return client.fetch(
//     groq`*[_type == "product" && slug.current == $slug][0]{
//     _id,
//     name,
//     _type,
//     image,
//     price
//     description
//     }`,
//     {slug}
//   )
// }

const ProductDetails =  ({params} : ProductPageProps) => {
  const [num, setNum] = useState(1)
  // const[product, setProduct] = useState<Product>()
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const {slug} = await params
  //     const product = await getProduct((await params).slug)
  //     setProduct(product)
  //   }
  //   fetchProduct()
  // }, [])
  return (
    <div className=''>
      <div className='w-[80vw] lg:w-[85vw] m-auto lg:flex gap-8 mt-14 mb-8'>
        <section className='flex flex-col items-center lg:flex-row-reverse gap-2 space-y-2 lg:w-1/2 mb-8'>
          <div className='bg-purple-30 col-span-2 content-center cursor-pointer'>
            <Image className='w-fit h-fit' src={"/product_details/t-shirt_details.png"} alt='t-shirt' width={1000} height={1000}/>
            {/* {product.image && (
              <Image
              className='w-fit h-fit' 
              src={urlFor(product.image).url()} 
              alt='t-shirt' 
              width={1000} 
              height={1000}
              />
            )} */}
          </div>
          <section className='flex lg:flex-col gap-2'>
            <div className='bg-amber-30 cursor-pointer'>
              <Image className='w-fit h-fit' src={'/product_details/t-shirt_details_2.png'} alt='t-shirt' width={1000} height={1000}/>
            </div>
            <div className='bg-green-30 cursor-pointer'>
              <Image className='w-fit h-fit' src={'/product_details/t-shirt_details_3.png'} alt='t-shirt_details_3' width={1000} height={1000}/>
            </div>
            <div className='bg-blue-30 cursor-pointer'>
              <Image className='w-fit h-fit' src={'/product_details/man_t-shirt.png'} alt='man_t-shirt' width={1000} height={1000}/> 
            </div>
          </section>
        </section>
        <section className='space-y-2'>
          <h1 className='text-[40px] font-bold'>ONE LIFE GRAPHIC T-SHIRT</h1>
          <p className='text-[32px] font-bold'>$260 <del className='text-[#0000004D]'>$300</del></p>
          <p className='text-[#00000099]'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
          <hr className='my-5'/>
          <p className='text-[#00000099]'>Select Colors</p>
          <section className='flex gap-2'>
            <div className='bg-[#4F4631] w-8 h-8 rounded-full cursor-pointer hover:border-2 hover:border-zinc-300'></div>
            <div className='bg-[#314F4A] w-8 h-8 rounded-full cursor-pointer hover:border-2 hover:border-zinc-300'></div>
            <div className='bg-[#31344F] w-8 h-8 rounded-full cursor-pointer hover:border-2 hover:border-zinc-300'></div>
          </section>
          <hr className='my-5'/>
          <p className='text-[#00000099]'>Choose Size</p>
          <section className='flex flex-wrap gap-2'>
            <div className='bg-purple-30 p-5 cursor-pointer hover:bg-black hover:text-white text-[#00000099] bg-[#F0F0F0] h-8 rounded-full flex justify-center items-center'>Small</div>
            <div className='bg-purple-30 p-5 cursor-pointer hover:bg-black hover:text-white text-[#00000099] bg-[#F0F0F0] h-8 rounded-full flex justify-center items-center'>Medium</div>
            <div className='bg-purple-30 p-5 cursor-pointer hover:bg-black hover:text-white text-[#00000099] bg-[#F0F0F0] h-8 rounded-full flex justify-center items-center'>Large</div>
            <div className='bg-purple-30 p-5 cursor-pointer hover:bg-black hover:text-white text-[#00000099] bg-[#F0F0F0] h-8 rounded-full flex justify-center items-center'>X-Large</div>
          </section>
          <hr className='my-5'/>
          <section className='flex gap-10'>
            <p className='bg-[#F0F0F0] text-black px-4 py-2 rounded-full flex items-center gap-3 md:gap-7'><span className='rounded-full hover:bg-gradient-to-bl  from-blue-400 to-pink-700 hover:text-white cursor-pointer p-1'><Minus onClick={() => {if(num > 1){ setNum(num - 1)}}}/></span> {num} <span className='rounded-full hover:bg-gradient-to-bl from-blue-400 to-pink-700  hover:text-white cursor-pointer p-1'><Plus onClick={() => setNum(num + 1)}/></span></p>
            <Link href={"/addcart"}>
              <button className='bg-black text-white w-full md:px-32 py-2 rounded-full cursor-pointer hover:bg-gradient-to-br from-blue-300 to-pink-300 hover:text-black'>Add to Cart</button>
            </Link>
          </section>
        </section>
      </div>
      <ProductReview/>
    </div>
  )
}

export default ProductDetails
