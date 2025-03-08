
import laundry from '/asset/laundry.jpg';
import Button from '../button/button';

function SelfLaundry() {
  return (
    <div className='h-100vh py-24 flex flex-col'>
        <h3 className='text-black text-lg md:text-xl font-medium italic mb-6'>
        Easy to use <span className='text-blue-400'>SELF-LAUNDARY</span> service
        </h3>
        <div className='flex flex-col md:flex-row md:justify-between items-center gap-4 w-full bg-blue-100 p-12 h-auto'>
            <div className='w-full md:w-1/2 flex md:items-center justify-center h-auto'>
            <img src={laundry} alt='cleaning' className="h-full w-full" />
            </div>
            <div className='w-full md:w-1/2 flex flex-col md:justify-center gap-4 h-auto'>
            <h3 className='text-2xl md:text-3xl text-left text-black font-semibold'>
                Putting you in control of your time
            </h3>
            <p className='text-gray-600 text-xl'>
                Step into our cutting-edge self-laundry haven – schedule your visit through our seamless website, 
                and take charge of washing, drying, and even automatic ironing on your terms.
            </p>
            <div className='w-auto mt-0'>
                <Button title="Book Now"  />
            </div>
            </div>
        </div>
    </div>
  )
}

export default SelfLaundry