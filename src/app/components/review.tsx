import Image from 'next/image'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Review = () => {
  return (
    <section className='grid grid-cols-3 gap-4'>
    <div className='flex flex-col rounded-2xl shadow-2xl'>
        <Image className='w-36' src={"/review/rating.png"} alt='rating' width={500} height={500}/>
        <p className='flex gap-2 items-center'>Name<FaCheck/></p>
        <p>1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, sed labore? Alias porro illo sunt nesciunt, harum magnam dolore ipsa ad sint iste.</p>
    </div>
    <div className='flex flex-col p-2 rounded-2xl shadow-2xl'>
        <Image className='w-36' src={"/review/rating.png"} alt='rating' width={500} height={500}/>
        <p className='flex gap-2 items-center'>Name<FaCheck/></p>
        <p>2Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, sed labore? Alias porro illo sunt nesciunt, harum magnam dolore ipsa ad sint iste.</p>
    </div>
    <div className='flex flex-col p-2 rounded-2xl shadow-2xl pl-4'>
        <Image className='w-36' src={"/review/rating.png"} alt='rating' width={500} height={500}/>
        <p className='flex gap-2 items-center'>Name<FaCheck/></p>
        <p>3Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, sed labore? Alias porro illo sunt nesciunt, harum magnam dolore ipsa ad sint iste.</p>
    </div>
    </section>
  )
}

export default Review