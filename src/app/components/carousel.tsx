import Image from 'next/image'
import React from 'react'


const Carousel = (props:any) => {
  return (
    <div key={props.key} className=' space-y-2 hover:scale-110 duration-700 flex flex-col items-center bg-[#ffffff] rounded-2xl my-10'>
        <Image className='cursor-pointer w-fit h-fit' src={`${props.image}`} alt={props.name} width={1000} height={1000}/>
        <p className='font-bold'>{props.name}</p>
        <p className='font-bold'>{props.price}</p>
    </div>
  )
}

export default Carousel