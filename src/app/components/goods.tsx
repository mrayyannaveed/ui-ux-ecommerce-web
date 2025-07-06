"use client"
// Goods.tsx
import Image from 'next/image'
import React from 'react'
import { Product } from '../../../types/products'
import { urlFor } from '@/sanity/lib/image'
import Swal from "sweetalert2"
import { addToCart } from '../actions/actions'



const Goods = (product: Product) => {
    const handleAddToCart = (e : React.MouseEvent, product : Product) => {
        e.preventDefault()
        Swal.fire({
            position : "top-right",
            icon : "success",
            title : `${product.name} added to cart`,
            showConfirmButton : false,
            timer : 1000
        })
        addToCart(product)
    } 
    return (
            <div className='space-y-3 pb-2 duration-700 flex flex-col items-center bg-[#eee9e9] rounded-2xl'>
                {product.image && (
                <Image 
                    className='cursor-pointer w-full h-60' 
                    src={urlFor(product.image).url()}
                    alt={product.name} 
                    width={1000} 
                    height={1000}
                />)}
                <p className='font-bold'>{product.name}</p>
                <p className='font-bold'>${product.price ? `${product.price}` : "Price not available"}</p>
                <button className='cursor-pointer hover:from-yellow-500 hover:to-red-600 bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg text-white font-semibold shadow-md
                ' onClick={(e) => handleAddToCart(e, product)}>Add to Cart
                </button>

            </div>

    )
}

export default Goods
