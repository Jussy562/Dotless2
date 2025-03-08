
import wash from '/asset/wash.jpg'
import cleaning3 from '/asset/cleaning3.jpg'
function About() {
  return (
    <div className='bg-white  py-10 md:py-20 md:pb-0 pb-0 mt-24 md:mt-0'>
      <div className='flex flex-col md:flex-row w-full justify-center items-center h-100vh md:px-20 px-4 py-10 md:py-20'>
        <div className='flex w-full md:w-1/2 justify-center items-center relative'>
          <div className=''>
            <img src={wash} alt='About' className="h-80 w-80 rounded-full" />
          </div>
          <div className='flex flex-row p-2 px-4 justify-center items-center absolute
           left-20 top-0 rounded-md bg-white shadow-lg shadow-black z-10 w-36'>
              <p className='text-sm font-bold text-blue-500'>Domestic</p>
          </div>
          <div className='flex flex-row p-2 px-4 justify-center items-center absolute
           right-10 top-10 rounded-md bg-white shadow-lg shadow-black z-10 w-36'>
              <p className='text-sm font-bold text-yellow-600'>Event</p>
          </div>
          <div className='flex flex-row p-2 px-4 justify-center items-center absolute
           left-4 top-30 rounded-md bg-white shadow-lg shadow-black z-10 w-36'>
              <p className='text-sm font-bold text-red-500'>Site</p>
          </div>
          <div className='flex flex-row p-2 px-4 justify-center items-center absolute
           right-10 top-60 rounded-md bg-white shadow-lg shadow-black z-10 w-36'>
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
            Domestic cleaning, Office/Industrial Cleaning, Event Cleaning, and Site Cleaning. We also have a 
            self-laundary centers that you can walking and do your laundary at your own convenience using our modern 
            laundary machines.
            Dotless is here to make your life easier and your spaces cleaner.
          </p>
        </div>
      </div>
     
      <div className='w-full flex flex-col gap-4 mb-0 bg-blue-100 md:px-20 px-4 py-4 md:py-20'>
        <h3 className='text-xl md:text-2xl font-bold text-blue-400 mb-4'>
          Why Choose Dotless?
        </h3>
        <p className='text-lg text-gray-900 mb-8'>
          Here is why Dotless is the right choice for all your cleaning needs:
        </p>

        <div className='w-full grid grid-cols-1 md:grid-cols-4 gap-4'>
          <div className='flex flex-col gap-7 p-4 rounded-lg text-black bg-blue-300'>
            <h4 className='text-sm font-extrabold'>Experienced Professionals</h4>
            <p className='text-sm font-extralight'>Our team of skilled and experienced cleaners ensures top-quality service every time.</p>
          </div>
          <div className='flex flex-col gap-7 p-4 rounded-lg text-black bg-blue-300'>
            <h4 className='text-sm font-extrabold'>Flexible Scheduling</h4>
            <p className='text-sm font-extralight'>We offer flexible scheduling options to accommodate your busy lifestyle or business hours.</p>
          </div>
          <div className='flex flex-col gap-7 p-4 rounded-lg text-black bg-blue-300'>
            <h4 className='text-sm font-extrabold'>Customizable Plans</h4>
            <p className='text-sm font-extralight'>Tailor our services to your exact preferences and requirements.</p>
          </div>
          <div className='flex flex-col gap-7 p-4 rounded-lg text-black bg-blue-300'>
            <h4 className='text-sm font-extrabold'>Commitment to Cleanliness</h4>
            <p className='text-sm font-extralight'>We take pride in leaving your space not just clean, but spotless and inviting.</p>
          </div>
        </div>
        
      </div>
      <div className='h-100vh pt-20 pb-20 bg-black'>
        <div className='w-full flex flex-col md:flex-row gap-4 justify-center items-center'>
          <div className='w-full md:w-1/2 flex flex-row justify-end relative'>
              <img src={cleaning3} alt='cleaning' className="h-60 w-auto" />
              
          </div>
          <div className='w-full md:w-1/2 p-0 md:p-2 flex flex-row text-start justify-start items-center'>
              <p className='text-lg text-gray-100 mb-8 w-dull md:w-2/3'>
                <span className='text-blue-400 font-bold'>Dotless</span> is here to make your life easier and your spaces cleaner. 
                We invite you to experience the difference with <span className='text-blue-400 font-bold'>Dotless</span> Cleaning Service. 
                Contact us today to schedule your first cleaning!
              </p>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default About