"use client"
import React, { useEffect, useState } from 'react'
import Heading from './heading'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { allProducts } from '@/sanity/lib/queries'
import { Product } from '../../../types/products'
import { client } from '@/sanity/lib/client'
import { addToCart } from '../actions/actions'
import Goods from './goods'



const New_arrivals = () => {
    const [newProduct, setNewProduct] = useState<Product[]>([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const fetchedProduct : Product[] = await client.fetch(allProducts)
                setNewProduct(fetchedProduct.filter((item: Product) => item.tag === 'new_arrival'))
            }
            catch(error) {
                console.log("Products data not fetch ", error)
            }
        }
        fetchData()
    }, [])
    const heading = "NEW ARRIVALS"
    
    const displayedProducts = showAll ? newProduct : newProduct.slice(0, 4);
    
    return (
        <div className='mt-14 mb-8'>
            <h1 className='text-center my-10'><Heading hname={heading}/></h1>
            <section className='grid lg:gap-20 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 w-[75vw] lg:w-[80vw] xl:w-[90vw] mx-auto bg-blue-30'>
                {displayedProducts.map((item: Product) => (
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

export default New_arrivals



                    {/* <div className='space-y-2 pb-2 hover:scale-110 duration-700 flex flex-col items-center bg-[#eee9e9] rounded-2xl'>                     
                        {item.image && (
                        <Image 
                            className='cursor-pointer w-full h-60' 
                            src={urlFor(item.image).url()}
                            alt={item.name} 
                            width={1000} 
                            height={1000}
                        />
                        )}
                        <p className='font-bold'>{item.name}</p>
                        <p className='font-bold'>{item.price ? `$${item.price}` : "Price not available"}</p>
                        <button className='cursor-pointer hover:from-yellow-500 hover:to-red-600 bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg text-white font-semibold shadow-md
                        ' onClick={(e) => handleAddToCart(e, item)}>Add to Cart
                        </button>
                    </div> */}

// "use client"
// import React, { useEffect, useState } from 'react'
// import Heading from './heading'
// import Link from 'next/link'
// import { Button } from '@/components/ui/button'
// import Image from 'next/image'

// interface newArrival {
//     id: number,
//     name: string,
//     price: number,
//     image: string,
//     inStock?: number,
//     tag?: string
// }

// const New_arrivals = () => {
//     const [product, setProduct] = useState<newArrival[]>([]);
//     const [showAll, setShowAll] = useState(false);

//     useEffect(() => {
//         const fetchData = async () => {
//             try{
//                 const response = await fetch("https://677d08a74496848554c8b8fd.mockapi.io/data");
//                 const data = await response.json();
//                 setProduct(data.filter((item: newArrival) => item.tag === 'new_arrival'))
//             }
//             catch(error) {
//                 console.log("Products data not fetch ", error)
//             }
//         }
//         fetchData()
//     }, [])
//     const heading = "NEW ARRIVALS"
    
//     const displayedProducts = showAll ? product : product.slice(0, 4);
    
//     return (
//         <div className='mt-14 mb-8'>
//             <h1 className='text-center my-10'><Heading hname={heading}/></h1>
//             <section className='grid lg:gap-20 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 w-[75vw] lg:w-[80vw] xl:w-[90vw] mx-auto bg-blue-30'>
//                 {displayedProducts.map((item: newArrival) => (
//                 <Link key={item.id} href={`/product/${item.id}`}>
//                     <div className='space-y-2 hover:scale-110 duration-700 flex flex-col items-center bg-[#eee9e9] rounded-2xl'>                     
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
//                 ))}
//             </section>
//             <div className='flex justify-center pt-14'>
//                 <Button 
//                     onClick={() => setShowAll(!showAll)}
//                     className='px-10 text-black bg-white border cursor-pointer hover:bg-slate-200'
//                 >
//                     {showAll ? 'Show Less' : 'View All'}
//                 </Button>
//             </div>
//         </div>
//     )
// }

// export default New_arrivals
