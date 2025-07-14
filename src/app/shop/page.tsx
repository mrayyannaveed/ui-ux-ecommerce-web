"use client"

import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { allProducts } from '@/sanity/lib/queries'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface Product {
  _id: string;
  name: string;
  price: number;
  slug: {
    current: string;
  };
  description?: string;
  image: {
    asset: {
      _ref: string;
      _type: "image";
    };
  };
  category?: string;
}

const ExploreProducts = () => {
  const [allProduct, setAllProduct] = useState<Product[]>([])
  const [filterProducts, setFilterProducts] = useState<Product[]>([])
  const [priceRange, setPriceRange] = useState<number>(300)
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Fetch all products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProduct: Product[] = await client.fetch(allProducts)
        setAllProduct(fetchedProduct)
        setFilterProducts(fetchedProduct)
      } catch (error) {
        console.error("Failed to fetch products:", error)
      }
    }
    fetchData()
  }, [])

  // Filter dynamically based on price and tag match in product name
  useEffect(() => {
    const filtered = allProduct.filter((item: Product) => {
      const matchesPrice = item.price <= priceRange
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some(tag =>
          item.name.toLowerCase().includes(tag.toLowerCase())
        )
      return matchesPrice && matchesTags
    })
    setFilterProducts(filtered)
  }, [priceRange, selectedTags, allProduct])

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange(Number(e.target.value))
  }

  const handleTagClick = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  return (
    <div className='p-6 text-white'>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
        <aside className='p-4 shadow rounded bg-gray-200'>
          <h2 className='text-xl font-semibold mb-4 text-gray-800'>Filters</h2>

          <div className='mb-6'>
            <h3 className='text-lg font-medium mb-2 text-gray-800'>Price</h3>
            <input
              type="range"
              min="5"
              max="500"
              value={priceRange}
              onChange={handlePriceChange}
              className='w-full'
            />
            <p className='text-sm mt-1 text-gray-800'>Max Price: <span className='text-gray-800'>${priceRange}</span></p>
          </div>

          <div className='mb-6'>
            <h3 className='text-lg font-medium mb-2 text-gray-800'>Tags</h3>
            <div className='flex flex-wrap gap-2'>
              {["Men's", "Women", "Kid's", "Casual", "T-Shirt", "Short", "Shirt", "Jeans"].map(tag => (
                <button
                  key={tag}
                  className={`px-3 py-1 rounded text-sm cursor-pointer ${
                    selectedTags.includes(tag) ? 'bg-blue-700' : 'bg-blue-500'
                  } hover:bg-blue-600`}
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className='lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filterProducts.length > 0 ? (
            filterProducts.map(product => (
              <Link href={`/product/${product.slug.current}`} key={product._id} className='bg-gray-950 p-4 rounded shadow'>
                {product.image && (
                  <img
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    className='w-full h-48 object-cover rounded mb-4'
                  />
                )}
                <h3 className='text-lg font-semibold mb-2'>{product.name}</h3>
                <p className='text-orange-500 font-bold'>${product.price}</p>
                {/* {product.description && (
                  <p className='text-gray-400 mt-2 text-sm'>{product.description}</p>
                )} */}
              </Link>
            ))
          ) : (
            <p className='text-gray-400 col-span-full'>No products match the selected filters.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ExploreProducts
