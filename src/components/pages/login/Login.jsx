import React from 'react'
import SecondaryButton from '../../button/SecondaryButton'

function Login() {
  return (
    <div className='bg-white md:px-20 px-4  py-10 md:py-20 mt-24 md:mt-20'>
      <div className='flex flex-col md:flex-row w-full shadow-lg'>
        <div className='w-full md:w-1/2 flex flex-row justify-center items-center bg-gray-400 p-8 md:p-12'>
          <img src={contact} alt="contact us" className='w-auto h-auto' />
        </div>
        <div className="py-8 md:py-16 px-4 md:px-16  w-full md:w-1/2">
            <h2 className="mb-4 text-xl md:text-2xl tracking-tight font-bold text-center text-blue-400 dark:text-white">Contact Us</h2>
            <p className="mb-8 lg:mb-16 font-light text-start text-gray-500 dark:text-gray-400 text-lg  ">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
            <form action="#" className=" flex flex-col gap-6">
                <div>
                    <label for="name" className="block mb-2 text-sm font-medium text-blue-400 dark:text-gray-300">Name</label>
                    <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 focus:outline-blue-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your full name" required />
                </div>
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-blue-400 dark:text-gray-300">Your email</label>
                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 focus:outline-blue-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
                </div>
                {/* <div>
                    <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                    <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                </div> */}
                <div className="sm:col-span-2">
                    <label for="message" className="block mb-2 text-sm font-medium text-blue-400 dark:text-gray-400">Your message</label>
                    <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 focus:outline-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a message..."></textarea>
                </div>
                <SecondaryButton title='Send message' />
                {/* <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button> */}
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login