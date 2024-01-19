import React from 'react'
import cleaning3 from '/asset/cleaning3.jpg'
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
          <div className='h-100vh pt-20 pb-20 bg-gray-400'>
            <div className='w-full flex flex-col md:flex-row gap-4 justify-center items-center'>
              <div className='w-full md:w-1/2 flex flex-row justify-end relative'>
                  <img src={cleaning3} alt='cleaning' className="h-60 w-auto" />
                  
              </div>
              <div className='w-full md:w-1/2 p-0 md:p-2 flex flex-row text-start justify-start items-center font-semibold'>
                  <p className='text-lg text-white mb-8 w-dull md:w-2/3'>
                    <span className='text-blue-500 font-bold text-xl'>Dotless</span> is here to make your life easier and your spaces cleaner. 
                    We invite you to experience the difference with <span className='text-blue-500 font-bold text-xl'>Dotless</span> Cleaning Service. 
                    Contact us today to schedule your first cleaning!
                  </p>
              </div>
            </div>
          </div>
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