import React from 'react'
import { FaRegBell } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
function Icons() {
  return (
    <div>
        <span className='text-white flex gap-4 text-2xl float-right -mt-7 mx-4 cursor-pointer'>
        <FaPlus/>
        <FaRegBell /> 
        </span>
    </div>
  )
}

export default Icons