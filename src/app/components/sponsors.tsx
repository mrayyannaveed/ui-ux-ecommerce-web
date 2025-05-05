import Image from 'next/image'
import React from 'react'

const Sponsors = () => {
  return (
    <div className='bg-black flex justify-evenly h-fit py-10 items-center w-full flex-wrap gap-5'>
        <Image className='w-40 h-fit' src={"/sponsors/Versace.png"} alt='versace' width={500} height={500}/>
        <Image className='w-24 h-fit' src={"/sponsors/zara.png"} alt='zara' width={500} height={500}/>
        <Image className='w-40 h-fit' src={"/sponsors/gucci.png"} alt='gucci' width={500} height={500}/>
        <Image className='w-40 h-fit' src={"/sponsors/prada.png"} alt='prada' width={500} height={500}/>
        <Image className='w-40 h-fit' src={"/sponsors/Kelvin.png"} alt='kelvin' width={500} height={500}/>
    </div>
  )
}

export default Sponsors