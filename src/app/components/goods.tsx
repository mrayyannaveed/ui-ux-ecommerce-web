// import Image from 'next/image'
// import React from 'react'


// const Goods = (props:any) => {
//   return (
//     <div key={props.key} className=' space-y-2 hover:scale-110 duration-700 flex flex-col items-center bg-[#ffffff] rounded-2xl my-10'>
//         <Image className='cursor-pointer w-fit h-fit' src={`${props.image}`} alt={props.name} width={1000} height={1000}/>
//         <p className='font-bold'>{props.name}</p>
//         <p className='font-bold'>{props.price}</p>
//     </div>
//   )
// }
// export default Goods 

// Goods.tsx
import Image from 'next/image'
import React from 'react'

interface GoodsProps {
    name: string;
    price: string;
    image: string;
}

const Goods = ({ name, price, image }: GoodsProps) => {
    return (
        <div className='space-y-2 hover:scale-110 duration-700 flex flex-col items-center bg-[#ffffff] rounded-2xl my-10'>
            <Image 
                className='cursor-pointer w-fit h-fit' 
                src={image} 
                alt={name} 
                width={1000} 
                height={1000}
            />
            <p className='font-bold'>{name}</p>
            <p className='font-bold'>{price}</p>
        </div>
    )
}

export default Goods