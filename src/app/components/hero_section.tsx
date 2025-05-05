import Image from 'next/image'

const Hero_section = () => {
  return (
    <div className='flex flex-row justify-around bg-[#F2F0F1]'>
        <section className='bg-pink-30 relative mt-0.5 hidden lg:block '>
          <div className='w-2/5 absolute bg-green-30 top-20 grid gap-10'>
            <h1 className='text-5xl font-extrabold'>FIND CLOTHES THAT MATCHES YOUR STYLES</h1>
            <p className='text-[#00000099]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button className='bg-black text-white w-52 p-4 rounded-full cursor-pointer hover:bg-slate-800'>Shop now</button>
          </div>
          <Image className='bg-yellow-400 w-fit' src={'/hero/Rectangle.png'} alt='hero' width={1200} height={1200} />
        </section>
        <section className='bg-pink-30 mt-0.5 block lg:hidden'>
          <div className='md:w-4/5 sm:w-3/4 w-11/12 mt-5 bg-green-30 top-20 grid gap-6 mx-auto'>
            <h1 className='text-4xl lg:text-5xl font-extrabold'>FIND CLOTHES THAT MATCHES YOUR STYLES</h1>
            <p className='text-[#00000099]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button className='bg-black text-white  p-4 rounded-full cursor-pointer hover:bg-slate-500'>Shop now</button>
          </div>
          <Image className='bg-yellow-400 w-fit h-auto' src={'/hero/hero.jpg'} alt='hero' width={1000} height={1000} />
        </section>
    </div>
  )
}

export default Hero_section