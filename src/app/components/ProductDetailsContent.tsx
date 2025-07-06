
"use client";

import { Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import { Product } from '../../../types/products';
import ProductReview from './productReview';

export default function ProductDetailsContent({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const sizes = ['S', 'M', 'L', 'XL'];
  const colors = ['#4F4631', '#314F4A', '#31344F'];

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className='w-[90vw] max-w-7xl mx-auto mt-10'>
      <div className='flex flex-col lg:flex-row gap-10'>
        <div className='flex-1'>
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={2000}
              height={2000}
              className='rounded-xl object-cover w-full h-[500px]'
            />
          )}
        </div>

        <div className='flex-1 space-y-6'>
          <h1 className='text-3xl font-bold'>{product.name}</h1>
          <p className='text-xl font-semibold text-gray-800'>${product.price}</p>
          <p className='text-gray-600'>{product.description}</p>

          {/* Colors */}
          <div>
            <p className='text-gray-700 mb-2'>Select Color</p>
            <div className='flex gap-3'>
              {colors.map((color) => (
                <div
                  key={color}
                  className='w-8 h-8 rounded-full border-2 border-gray-300 cursor-pointer
                   hover:border-slate-400 hover:border-2'
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div>
            <p className='text-gray-700 mb-2'>Choose Size</p>
            <div className='flex gap-3'>
              {sizes.map((size) => (
                <div
                  key={size}
                  className='px-4 py-2 border rounded-full cursor-pointer hover:bg-black hover:text-white'
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className='flex items-center gap-4'>
            <p className='text-gray-700'>Quantity:</p>
            <div className='flex items-center gap-2 border rounded-full px-4 py-1'>
              <button onClick={decrement} className='text-xl cursor-pointer'>
                <Minus size={18} />
              </button>
              <span className='w-6 text-center'>{quantity}</span>
              <button onClick={increment} className='text-xl cursor-pointer'>
                <Plus size={18} />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <Link href="/addcart">
            <button className='w-full bg-black cursor-pointer text-white py-3 rounded-full hover:bg-gray-800 transition'>
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
      <ProductReview/>
    </div>
  )
}
