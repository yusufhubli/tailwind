import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <div id='about-us' 
    className=' flex justify-center items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className="flex flex-1 flex-col ">
        <h1 className=' mt-10 font-palanquin text-4xl capitalize max-sm:text-[72px] max-sm:leading-[82px] font-bold lg:max-w-lg'>
          We provide You
          <span className=' text-coral-red'> Super</span><br />
          <span className=' text-coral-red'>Quality</span> Shoes
        </h1>
        <p className=' mt-4 lg:max-w-lg info-text'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
          enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <p className='  mt-4 lg:max-w-lg info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className=' mt-11'>
          <Button label='View Details' />
          </div>
      </div>
      <div className=' flex-1 flex justify-center items-center'>
        <img src={shoe8} width={570} height={522} className=' object-contain' alt="" />
      </div>
    </div>
  )
}

export default SuperQuality
