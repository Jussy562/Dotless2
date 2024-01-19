import React from 'react'
import HowItWorkList from './howItWorkList'
import howItWorkFiles from './howItWorkFile' 



function HowItWork({item}) {
  return (
    <div className='flex flex-col'>
        <div className='flex mb-8 pb-12'>
            <p className='text-black text-lg md:text-xl font-bold italic'>
                It is easy to use <span className='text-blue-300 font-extrabold'>DOTLESS</span>.
                All you have to do is to follow the 5 easy steps below:
            </p>
        </div>
        
        <div className='flex flex-row md:flex-row md:items-center'>
            <div className='flex flex-col md:flex-row gap-8'>
                {
                    howItWorkFiles.map((item) => (
                    <HowItWorkList key={item.id} item={item} />
                    ))
                }
            </div>
            {/* <div className='flex w-1/3'>
                <div>
                    <img src='/asset/cleaning8.jpg' alt='dotless cleaning'   />
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default HowItWork