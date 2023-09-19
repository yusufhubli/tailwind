import React from 'react'
import { useState } from 'react'
import Button from '../components/Button'
import ShoeCard from '../components/ShoeCard'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'


const Hero = () => {
  const [bigShoeImage,setbigShoeIamge] = useState(bigShoe1)
  return (
    <section id='home' className=' w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
      <div className='  relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className=' text-xl font-montserrat text-coral-red '>Our Summer Collections</p>
        <h1 className=' mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className=' xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
          <br />
          <span className=' text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className=' font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit
          enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <Button label='Shop Now' iconUrl={arrowRight} />
        <div className=' flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index || stat.label}>
              <p className=' text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className=' font-montserrat leading-7 text-slate-gray'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=' relative flex justify-center items-center flex-1  xl:min-h-screen max-xl:py-40 bgprimary bg-cover bg-hero bg-center'>
        <img src={bigShoeImage} width={600} height={500} alt="shoe collection"
        className=' object-contain relative z-10' />
        <div className=' flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((shoe)=>(
            <div key={shoe}>
              <ShoeCard imgURL={shoe} changeBigShoeImage={(shoe)=>setbigShoeIamge(shoe)}

              bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
