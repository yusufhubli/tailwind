import React from 'react'
import  {offer} from '../assets/images'
import Button from '../components/Button'
import {arrowRight} from '../assets/icons'
const Offer = () => {
  return (
    <div className=' flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container '>
      <div className=' flex-1 '> 
      <img src={offer} width={773} height={687} className=' object-contain w-full' alt="" />
      </div>
      <div className="flex flex-1 flex-col ">
        <h1 className=' mt-10 font-palanquin text-4xl capitalize max-sm:text-[72px] max-sm:leading-[82px] font-bold lg:max-w-lg'>
          <span className=' text-coral-red'>Special </span> Offer
        </h1>
        <p className=' mt-4 lg:max-w-lg info-text'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
          enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <p className='  mt-4 lg:max-w-lg info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className=' mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconUrl={arrowRight} />
          <Button label='Learn more'
          bgColor='bg-white'
          textColor='text-slate-gray'
          borderColor='border-slate-gray' />
          </div>
      </div>
    </div>
  )
}

export default Offer
