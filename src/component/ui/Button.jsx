import React from 'react'

function Button({text}) {
  return (
    <div className='w-[340px] rounded-[4px] cursor-pointer h-[40px] my-[10px] mx-[20px] items-center flex justify-center bg-[#FFCE22]'>
      {text}
    </div>
  )
}

export default Button
