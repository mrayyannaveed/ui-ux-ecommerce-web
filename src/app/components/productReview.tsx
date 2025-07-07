"use client"
import { Star, StarHalf, Filter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';
import Link from 'next/link';
import Goods from './goods';
import Heading from './heading';
import { useEffect, useState } from 'react';
import { sanityFetch } from '@/sanity/lib/fetch';
import { fourPro } from '@/sanity/lib/queries';
import { Product } from '../../../types/products';

const reviews = [
  {
    name: 'Samantha D.',
    date: 'August 14, 2023',
    rating: 4.5,
    text: `I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It&quot;s become my favorite go-to shirt.`,
  },
  {
    name: 'Alex M.',
    date: 'August 15, 2023',
    rating: 5,
    text: `The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I&quot;m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.`,
  },
  {
    name: 'Ethan R.',
    date: 'Posted on August 16, 2023',
    rating: 3.5,
    text: `This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer&quot;s touch in every aspect of this shirt.`,
  },
  {
    name: 'Olivia P.',
    date: 'Posted on August 17, 2023',
    rating: 4,
    text: `As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It&quot;s evident that the designer poured their creativity into making this t-shirt stand out.`,
  },
  {
    name: 'Liam K.',
    date: 'Posted on August 18, 2023',
    rating: 4,
    text: `This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It&quot;s like wearing a piece of art that reflects my passion for both design and fashion.`,
  },
  {
    name: 'Ava H.',
    date: 'Posted on August 19, 2023',
    rating: 4.5,
    text: `I&quot;m not just wearing a t-shirt; I&quot;m wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.`,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className="flex text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} size={16} fill="currentColor" className="mr-0.5" />
      ))}
      {halfStar && <StarHalf size={16} fill="currentColor" className="mr-0.5" />}
    </div>
  );
};


export default function ProductReview() {
    const [product, setProduct] = useState<Product[]>([])
    useEffect(() => {
        const fetchData = async () => {
            try{
                const products: Product[] = await sanityFetch({query: fourPro})
                setProduct(products)
            }
            catch(error) {
                console.log("Products data not fetch ", error)
            }
        }
        fetchData()
    })

    const heading = "YOU MIGHT ALSO LIKE"
  return (
    <div className="p-6 max-w-6xl mx-auto mt-14">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
        <h2 className="text-2xl font-semibold">All Reviews <span className="text-gray-500">({reviews.length})</span></h2>
        <div className="flex items-center gap-2 flex-wrap">
          <Button variant="outline" className="flex items-center gap-1">
            <Filter size={16} /> Filter
          </Button>
          <Select>
            <SelectTrigger className="w-32">
              <span>Latest</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-black text-white">Write a Review</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map((review, index) => (
          <Card key={index} className="p-4 hover:shadow-2xl transition-shadow border">
            <CardContent>
              <StarRating rating={review.rating} />
              <h3 className="font-semibold mt-2">{review.name} <span className="text-green-600">●</span></h3>
              <p className="text-sm text-gray-500 mb-2">Posted on {review.date}</p>
              <p className="text-gray-800">"{review.text}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Link href={'/'} className='flex justify-center my-10'>
        <Button className='px-10 text-black bg-white border cursor-pointer hover:bg-slate-200 rounded-full'>Load More Reviews</Button>
        </Link>
        <h1 className='text-center my-8'><Heading hname={heading}/></h1>
        <section className='grid lg:gap-20 grid-cols-1  lg:grid-cols-2 xl:grid-cols-4  bg-blue-30'>
            {product.map((item: Product)=>(
                <Link key={item._id} href={`/product/${item.slug.current}`}>
                    <Goods key={item._id} {...item}/>
                </Link>
            ))}
        </section>
    </div>
  );
}