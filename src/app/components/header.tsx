import Link from 'next/link'
import { FaCheck } from 'react-icons/fa'
import { FiAlertCircle } from 'react-icons/fi'

const Header = () => {
  return (
    <header className="text-white bg-[#000000] w-full text-[10px] sm:text-xs md:text-sm xl:text-base  font-normal flex flex-col sm:flex-row justify-around sm:justify-around items-center py-4">
      <section className='flex items-center gap-1 '><FaCheck/>Sign up and get 20% off to your first order. 
      <span className='cursor-pointer'>Sign Up Now</span></section>
    </header>
  )
}

export default Header