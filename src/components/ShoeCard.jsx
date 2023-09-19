import React from 'react'

const ShoeCard = ({imgURL,changeBigShoeImage,bigShoeImage}) => {
  const handleclick =()=>{
    if(bigShoeImage !== imgURL.bigShoe){
      changeBigShoeImage(imgURL.bigShoe)
    }
  }
  return (
  <div className={ `border-2 rounded-xl ${bigShoeImage === imgURL.bigShoe ? 'border-coral-red ':'border-transparent'} cursor-pointer max-sm:flex-1 `}
  onClick={handleclick}>
      <div className=' flex justify-center items-center bg-card bg-cover bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img src={imgURL.thumbnail}
        width={172}
        height={103} alt=""
        className=' object-contain' />
      </div>
    </div>
  )
}

export default ShoeCard
