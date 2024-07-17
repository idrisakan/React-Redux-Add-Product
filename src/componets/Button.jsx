import React from 'react'

const Button = ({onClick,btnText}) => {
  return (
<button className='w-full h-10 bg-[#7731d8] rounded-md text-white mt-4 flex justify-center items-center' onClick={onClick}>{btnText}</button>
  )
}

export default Button