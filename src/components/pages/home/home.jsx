import React from 'react'
import HomeBanner from '../../banner/homeBanner'
import DotlesssService from '../../dotlessService/dotlesssService'
import serviceFiles from '../../dotlessService/ServiceApi'
import HowItWork from '../../howItWork/howItWork'
import SelfLaundry from '../../dotlessService/dotlessLaundry'
// import Testimony from '../../customerTestimony/testimony'




function Home() {
  return (
    <>
        <header>
            {/* <Navbar /> */}
            <HomeBanner />
        </header>
        <section className='md:px-20 px-4 py-10 md:py-20 bg-gray-100'>
          <div className='flex flex-col'>
            <div className='flex w-auto'>
              <h3 className='text-blue-400 text-xl md:text-2xl border border-b-blue-400 py-2.5 
              border-l-0 border-r-0 border-t-0 '>
                How It Works
              </h3>
            </div>
            
            <div className='mt-12'>
              
          
           
              <HowItWork  />
          

            
              
            </div>

          </div>
        </section>
        <section className='md:px-20 px-4 md:py-20 bg-white'>
          <div className='flex flex-col'>
            <div className='flex w-auto'>
              <h3 className='text-blue-400 text-xl md:text-2xl border border-b-blue-400 py-2.5 
              border-l-0 border-r-0 border-t-0 '>
                Services
              </h3>
            </div>
            <div>
              <SelfLaundry />
            </div>
            
            <div className='flex flex-col gap-16 mt-12 '>
              {
                serviceFiles.map((item) => (
                  <DotlesssService key={item.id} item={item} />
                ))
              }
            </div>

          </div>
        </section>
        {/* <section className='md:px-20 px-4 md:py-20 bg-white'>
          <Testimony />
        </section> */}
        
    </>
  )
}

export default Home