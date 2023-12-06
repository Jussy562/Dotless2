import React from 'react'

function HowItWorkList({item}) {
  return (
    <div className='flex flex-row w-full md:w-full'>
        <ol>
            <li className="flex flex-row ">
                <div className='dotless-steps flex flex-col justify-center items-center  bg-blue-400 p-4 
                rounded-full h-80'>
                  <div>
                    <h4 className='text-lg font-bold text-dark mb-4'>{item.name}</h4>
                    <p className='text-sm text-white font-light'>{item.desc}</p>
                  </div>
                  
                </div>
            </li>
        </ol>
    </div>
  )
}

export default HowItWorkList