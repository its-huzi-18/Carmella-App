import React from 'react'

function Cards({data}) {
    return (
    <div className='mt-12 w-full mx-[70px]'>
        <div className={`${data.bgColor} rounded-md h-80 w-60 px-14 ${data.borderColor} border-x-8 p-7 transform hover:scale-110  transition-transform duration-300  origin-left cursor-pointer`}>
            <h1 className='text-white text-2xl font-bold tracking-wide'>{data.sub}</h1>
            <h3 className='text-xl font-semibold text-white '>Garde 9</h3>
            <h3 className='text-xl font-semibold text-white -mt-1 -tracking-wide'>{data.type}</h3>
            <h1 className='float-end mt-16 font-bold text-white text-[15vh] -px-4'>{data.No}</h1>
        </div>
    </div>
  )
}

export default Cards