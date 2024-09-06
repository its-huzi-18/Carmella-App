import React from 'react';

function Options({ icon, name }) {
  return (
    <div className='text-center'>
   <div className="transform hover:scale-110 transition-transform duration-300 origin-left hover:scale-x-90">
    <div className=" text-white text-[45px] bg-white bg-opacity-20 backdrop-blur-md border border-white/30 rounded-xl p-[15px] cursor-pointer ">
    {icon}
       </div>
     </div>
     <span className='text-white'>{name}</span> 
    </div>
  );
}

export default Options;
