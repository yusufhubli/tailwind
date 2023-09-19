import React from 'react'
import {reviews} from '../constants'
import Review from '../components/Review'

const CustomerReview = () => {
  return (
    <div className=' max-container '>
      <h3 className=' font-palanquin text-center text-4xl font-bold'>
        what Our
        <span className=' text-coral-red '> Customer </span>
        Say?
      </h3>
      <p className=' info-text m-auto mt-4 max-w-lg text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quasi?</p>
      <div className=' mt-24 flex flex-1 justify-center items-center max-lg:flex-col gap-14'>
        {reviews.map(rev=>(
          <Review key={rev.customerName}
          imgURL={rev.imgURL}
          customerName={rev.customerName}
          rating={rev.rating}
          feedback={rev.feedback} />
        ))}
      </div>
    </div>
  )
}

export default CustomerReview
