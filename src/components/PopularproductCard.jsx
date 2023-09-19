import React from 'react'
import { star } from '../assets/icons'

const PopularproductCard = ({imgURL,name,price}) => {
  return (
    <div className=' flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL} alt=""
      className=' w-[280px] h-[280px] ' />
      <div className=' mt-8 flex justify-start gap-2.5'>
        <img src={star} alt="rating" width={25} height={25} /><p className=' font-montserrat leading-normal text-xl text-slate-gray'>(4.5)</p>
      </div>
      <h3 className=' mt-2 text-2xl font-palanquin font-semibold leading-normal'>{name}</h3>
      <p className=' mt-2 text-2xl font-montserrat text-coral-red font-semibold leading-normal'>{price}</p>
    </div>
  )
}

export default PopularproductCard
