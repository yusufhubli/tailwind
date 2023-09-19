import React from 'react'
import { star } from '../assets/icons'

const Review = ({customerName,imgURL,rating,feedback,}) => {
  return (
    <div className=' flex justify-center items-center flex-col'>
      <img src={imgURL} alt="customer"
      className=' rounded-full w-[120px] h-[120px] object-cover' />
      <p className=' mt-6 text-center max-w-sm info-text'>{feedback}</p>
      <div className=' mt-3 flex justify-center items-center gap-2.5'>
      <img src={star} width={24} height={24} className=' object-contain m-0' alt="" />
      <p className=' font-montserrat text-slate-gray'>({rating})</p>
    </div>
    <h3 className=' mt-1 font-palanquin text-3xl text-center font-bold'>{customerName}</h3>
    </div>
  )
}

export default Review
