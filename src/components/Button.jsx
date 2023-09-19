import React from 'react'

const Button = ({label,iconUrl,bgColor,textColor,borderColor,fullWidth}) => {
  return (<>
  <button className={` flex justify-center items-center rounded-full gap-2 px-7 py-4 font-montserrat border text-lg leading-none
  ${bgColor ? `${bgColor} ${textColor} ${borderColor}`:
'bg-coral-red  text-white border-coral-red'} ${fullWidth && 'w-full'}`}>
        {label}
     {iconUrl && <img src={iconUrl} alt="arrow" className=' ml-2 rounded-full w-5 h-5'/>}
    </button>
  </>
  )
}

export default Button
