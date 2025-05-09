import React from 'react'
import Heading from './heading'
import Image from 'next/image'

const Dress_style = () => {
  let dress_style = [
    {id: 1, image: "/dress-style/casual2.png"},
    {id: 2, image: "/dress-style/formal2.png", span:"col-span-2"},
    {id: 3, image: "/dress-style/party2.png", span:"col-span-2"},
    {id: 4, image: "/dress-style/gym2.png"},
]
  let heading = "BROWSE BY DRESS STYLE"
  return (
    <div className='bg-[#F0F0F0] text-center mt-14 mb-8 w-[80vw] sm:w-[70vw] lg:w-[75vw] xl:w-[70vw] mx-auto space-y-12 py-12 rounded-4xl'>
      <Heading hname={heading}/>
      <section className='grid grid-cols-1 lg:grid-cols-3 gap-3 w-[95%] sm:w-[80%] lg:w-[90%] xl:w-[85%] mx-auto'>
        <Image className='hover:border-blue-700 cursor-pointer hover:border-2 rounded-xl w-full h-52 lg:h-56' src={"/dress-style/casual2.png"} alt='dress style' width={1200} height={1200}/>
        <Image className='hover:border-blue-700 cursor-pointer hover:border-2 rounded-xl col-span-2 w-full h-52 lg:h-56' src={"/dress-style/formal2.png"} alt='dress style' width={1200} height={1200}/>
        <Image className='hover:border-blue-700 cursor-pointer hover:border-2 rounded-xl col-span-2 w-full h-52 lg:h-56' src={"/dress-style/party2.png"} alt='dress style' width={1200} height={1200}/>
        <Image className='hover:border-blue-700 cursor-pointer hover:border-2 rounded-xl w-full h-52 lg:h-56' src={"/dress-style/gym2.png"} alt='dress style' width={1200} height={1200}/>
      </section>
    </div>
  )
}

export default Dress_style