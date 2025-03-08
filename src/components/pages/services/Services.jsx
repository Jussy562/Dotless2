
import DotlesssService from '../../dotlessService/dotlesssService'
import serviceFiles from '../../dotlessService/ServiceApi'
import wash from '/asset/wash.jpg'
import SelfLaundry from '../../dotlessService/dotlessLaundry'

function Services() {
  return (
    <div className='bg-white  py-10 md:py-20 mt-24 md:mt-0'>
      <div className='flex flex-col md:flex-row w-full justify-center items-center h-100vh md:px-20 px-4 py-10 md:py-20 bg-gray-200'>
        <div className='flex w-full md:w-1/2 justify-center items-center relative'>
          <div className=''>
            <img src={wash} alt='About' className="h-80 w-80 rounded-full" />
          </div>
          <div className='flex flex-row p-2 px-4 justify-center items-center absolute
           left-20 top-0 rounded-md bg-white shadow-lg z-10 w-36'>
              <p className='text-sm font-bold text-blue-500'>Domestic</p>
          </div>
          <div className='flex flex-row p-2 px-4 justify-center items-center absolute
           right-10 top-10 rounded-md bg-white shadow-lg z-10 w-36'>
              <p className='text-sm font-bold text-yellow-600'>Event</p>
          </div>
          <div className='flex flex-row p-2 px-4 justify-center items-center absolute
           left-4 top-30 rounded-md bg-white shadow-lg z-10 w-36'>
              <p className='text-sm font-bold text-red-500'>Site</p>
          </div>
          <div className='flex flex-row p-2 px-4 justify-center items-center absolute
           right-10 top-60 rounded-md bg-white shadow-lg z-10 w-36'>
              <p className='text-sm font-bold text-green-500'>Office/Industrial</p>
          </div>
        </div>
        <div className='w-full md:w-1/2 p-3 md:p-4 text-start '>
          <h2 className='text-2xl md:text-3xl font-bold text-blue-400 mb-4'>
            About Dotless 
          </h2>
          <p className='text-sm md:text-lg text-gray-900 mb-8'>
            Dotless is your trusted partner in creating clean and comfortable spaces. 
            We are dedicated to making your life easier by taking care of all your cleaning needs. 
            With a commitment to excellence and a passion for cleanliness, we believe in our goal 
            to become a leading name in the cleaning industry. 
            We offer a wide range of cleaning services to suit your specific requirements. Our services include:
            Domestic cleaning, Office/Industrial Cleaning, Event Cleaning, and Site Cleaning.
            Dotless is here to make your life easier and your spaces cleaner.
          </p>
        </div>
        </div>
        <section className='md:px-20 px-4 md:py-20 bg-white'>
          <div className='flex flex-col'>
            <div className='flex w-auto'>
              <h3 className='text-blue-400 text-xl md:text-2xl    '>
                Choose a service that suit your need and scheduke a time with us
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
    </div>
    
  )
}

export default Services