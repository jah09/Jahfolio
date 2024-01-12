import React from 'react'
import {AiOutlineArrowDown} from 'react-icons/ai';
const Button = ({onClick, children}) => {
  return (
    <div className='rounded-lg h-12 w-44 text-myfontcolor items-center font-montserratmedium flex justify-around border border-primarycolor hover:bg-primarycolor hover:text-secondarycolor cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'>
      <button className=' p-2 tracking-wide' onClick={onClick}>{children}</button>
        <AiOutlineArrowDown size={22} className='animate-bounce'/>
    </div>
  )
}

export default Button
