import React from 'react'
import Cards from './Cards'

function Data() {
    const data=[
        {
            sub:"MATH",
            type:"Algbra 2",
            No:1,
            bgColor:'bg-purple-700',
            borderColor:"border-purple-800"
        },
        {
            sub:"ENGLISH",
            type:"Writing",
            No:2,
            bgColor:"bg-red-700",
            borderColor:"border-red-800",
        },
        {
            sub:"MATH",
            type:"Algbra 1",
            No:3,
            bgColor:"bg-cyan-500",
            borderColor:"border-cyan-600",
        },
        {
            sub:"ENGLISH",
            type:"Lannguage",
            No:4,
            bgColor:"bg-blue-700",
            borderColor:"border-blue-800",
        },
    ]
    
  return (
    <div className='flex'>
        {data.map((item)=>(
    <Cards data={item}/>
))}
    </div>
  )
}

export default Data