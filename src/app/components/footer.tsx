import Link from 'next/link'
import React from 'react'
import { BsFacebook, BsGithub, BsInstagram, BsTwitterX } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='bg-[#F0F0F0] py-20 mt-14'>
        <footer className='px-5 w-[85vw] sm:w-[80vw] md:w-[90vw] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 lg:grid-cols-5 lg:gap-10 mb-5'>
            <section className='space-y-4 w-[60%] sm:w-[100%] mx-auto'>
                <h1 className='text-3xl font-bold'>SHOP.CO</h1>
                <p className='text-[#00000099]'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                <section className='flex gap-4'>
                    <Link href={"https://x.com"} target='_blank' className='bg-white rounded-full p-2 hover:scale-110 duration-500 hover:bg-black hover:text-white'>
                        <BsTwitterX/>
                    </Link>
                    <Link href={""} target='_blank' className='bg-white rounded-full p-2 hover:scale-110 duration-500 hover:bg-black hover:text-white'>
                        <BsFacebook/>
                    </Link>
                    <Link href={""} target='_blank' className='bg-white rounded-full p-2 hover:scale-110 duration-500 hover:bg-black hover:text-white'>
                        <BsInstagram/>
                    </Link>
                    <Link href={"https://github.com/mrayyannaveed"} target='_blank' className='bg-white rounded-full p-2 hover:scale-110 duration-500 hover:bg-black hover:text-white'>
                        <BsGithub/>
                    </Link>
                </section>
            </section>
            <section className='flex flex-col mx-auto gap-5'>
                <h1 className='font-medium text-xl'>COMPANY</h1>
                <div className='flex flex-col gap-5'>
                    <Link className='text-[#00000099] hover:underline hover:decoration-2 hover:decoration-zinc-700' href={"/"}>About</Link>
                    <Link className='text-[#00000099] hover:underline hover:decoration-2 hover:decoration-zinc-700' href={"/"}>Features</Link>
                    <Link className='text-[#00000099] hover:underline hover:decoration-2 hover:decoration-zinc-700' href={"/"}>Works</Link>
                    <Link className='text-[#00000099] hover:underline hover:decoration-2 hover:decoration-zinc-700' href={"/"}>Careers</Link>
                </div>
            </section>
            <section className='flex flex-col mx-auto gap-5'>
                <h1 className='font-medium text-xl'>HELP</h1>
                <div className='flex flex-col gap-5'>
                    <Link className='text-[#00000099] hover:underline hover:decoration-2 hover:decoration-zinc-700' href={"/"}>Customer Support</Link>
                    <Link className='text-[#00000099] hover:underline hover:decoration-2 hover:decoration-zinc-700' href={"/"}>Delivery Details</Link>
                    <Link className='text-[#00000099] hover:underline hover:decoration-2 hover:decoration-zinc-700' href={"/"}>Terms & Conditions</Link>
                    <Link className='text-[#00000099] hover:underline hover:decoration-2 hover:decoration-zinc-700' href={"/"}>Privacy Policy</Link>
                </div>
            </section>
            <section className='flex flex-col mx-auto gap-5'>
                <h1 className='font-medium text-xl'>FAQ</h1>
                <div className='flex flex-col gap-5'>
                    <Link className='text-[#00000099] hover:underline hover:decoration-2 hover:decoration-zinc-700' href={"/"}>Account</Link>
                    <Link className='text-[#00000099] hover:underline hover:decoration-2 hover:decoration-zinc-700' href={"/"}>Manage Deliveries</Link>
                    <Link className='text-[#00000099] hover:underline hover:decoration-2 hover:decoration-zinc-700' href={"/"}>Orders</Link>
                    <Link className='text-[#00000099] hover:underline hover:decoration-2 hover:decoration-zinc-700' href={"/"}>Payments</Link>
                </div>
            </section>
            <section className='flex flex-col mx-auto gap-5'>
                <h1 className='font-medium text-xl'>RESOURCES</h1>
                <div className='flex flex-col gap-5'>
                    <Link className='text-[#00000099] hover:underline hover:decoration-2 hover:decoration-zinc-700' href={"/"}>Free eBooks</Link>
                    <Link className='text-[#00000099] hover:underline hover:decoration-2 hover:decoration-zinc-700' href={"/"}>Development Tutorial</Link>
                    <Link className='text-[#00000099] hover:underline hover:decoration-2 hover:decoration-zinc-700' href={"/"}>How to-Blog</Link>
                    <Link className='text-[#00000099] hover:underline hover:decoration-2 hover:decoration-zinc-700' href={"/"}>Youtube Playlist</Link>
                </div>
            </section>
        </footer>
        <hr className=' border-[#0000001A] border-1 w-[90vw] mx-auto mt-10 my-4'/>
        <section className='w-[85vw] sm:w-[80vw] md:w-[90vw] mx-auto flex justify-between'>
            <div className='text-[#00000099]'>Shop.co © 2000-2023, All Rights Reserved</div>
            <div className='flex gap-5'>
                <Link href={""}>Visa</Link>
                <Link href={""}>Paypal</Link>
            </div>
        </section>
    </div>
  )
}

export default Footer