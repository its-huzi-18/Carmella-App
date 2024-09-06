/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import Icons from './Icons';

function Header() {
    const currentDate = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = days[currentDate.getDay()];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", 
    "September", "October", "November", "December"];
const currentMonth = months[currentDate.getMonth()];
const currentDateNumber = currentDate.getDate();
const currentYear = currentDate.getFullYear();

const [Image] = useState("My Image.jpg")

  return (
    <div>  
        <Icons />
        <nav className='text-zinc-300 w-full '>
                <div className='flex justify-center mt-12'>
                <img src = {Image} className='rounded-full w-16 mx-4 mt-1 cursor-pointer '/>
     <h1 className='text-4xl'>Hellow Carmella
        <p className='text-lg font-base font-semibold text-zinc-500 mx-[2px] '>{`Today is ${currentDay}, ${currentMonth} ${currentDateNumber}, ${currentYear}`} </p>
     </h1>
                </div>
   
        </nav>
    </div>
  )
}

export default Header