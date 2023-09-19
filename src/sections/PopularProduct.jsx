import React from 'react'
import {products} from '../constants'
import PopularProductCard from '../components/PopularproductCard'

const PopularProduct = () => {
  return (
    <div id='products' className=' max-container max-sm:mt-12'>
       <div className=' flex flex-col justify-start gap-5'>
        <h1 className=' text-4xl font-palanquin font-bold '><span className=' text-coral-red'> Popular</span> Products</h1>
        <p className=' lg:max-w-lg text-slate-gray mt-2 font-montserrat'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Consequatur quis beatae harum facilis dolorem, a, eos assumenda adipisci pariatur tenetur praesentium recusandae magni animi.
           Maiores similique accusantium nam impedit nostrum.</p>
         </div>
         <div className=' mt-16 grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 sm:gap-4 gap-14'>
              {products.map((product)=>(
                <PopularProductCard key={product.name} {...product}/>
              ))}
         </div>
    </div>
  )
}

export default PopularProduct
