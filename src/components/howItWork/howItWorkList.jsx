import React from 'react';
import signup from '/asset/signup.svg';

function HowItWorkList({item}) {
  return (
    <div className='flex flex-row w-full md:w-full'>
        <ol>
            <li className="flex flex-row ">
                <div className='dotless-steps flex flex-col justify-center 
                items-center  bg-[#a7a7ab] p-4 rounded-xl shadow-lg
                 h-80'>
                 
                      <div className='relative'>
                    
                       <div className='flex justify-center items-center absolute 
                        border-2 border-blue-500 
                        w-20 h-20 shadow-lg shadow-black rounded-full bg-gray-300 -left-10 bottom-14'>
                        <img src={item.image} alt="contact us" className=' border-2 border-blue-500 relative
                              w-20 h-20 shadow-lg shadow-black rounded-full' />
                       </div>
                      </div>
                    
                      
                      <h4 className='text-lg font-bold text-blue-400 mb-4'>{item.name}</h4>
                      <p className='text-sm text-black font-light'>{item.desc}</p>
                    
                    
                </div>
             </li>
        </ol>
    </div>
  )
}

export default HowItWorkList