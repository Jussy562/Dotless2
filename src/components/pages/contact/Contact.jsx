import React, {useState} from 'react'
import axios from 'axios';
import contact from '/asset/contact.svg'
import SecondaryButton from '../../button/SecondaryButton'
import Button from '../../button/button';
import cleaning3 from '/asset/cleaning3.jpg';
import cleaning8 from '/asset/cleaning8.jpg';


function Contact() {
      const [loading, setLoading] = useState(false);
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });

      const [feedback, setFeedback] = useState({
        message: '',
        type: '', // 'success' or 'error'
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Use Axios to send the data to the backend.
        axios.post('http://localhost:5000/api/contactMessages', formData)
          .then((response) => {
            // Handle the response from the backend, e.g., show a success message.
           setFeedback({
              message: 'Message sent successfully!',
              type: 'success',
            });
            setFormData({
              name: '',
              email: '',
              message: '',
            });
          })
          .catch((error) => {
            // Handle any errors, e.g., show an error message.
            console.error('Error sending message:', error);
            setFeedback({
              message: 'An error occurred while sending the message.',
              type: 'error',
            });
          })
          .finally(() => {
            setLoading(false);
          });
          
      };
  return (
    <div className='bg-white  mt-24 md:mt-20'>
      <div className='flex flex-col-reverse md:flex-row md:justify-center md:items-center w-full mb-9 md:px-20 px-4  py-10 md:py-20'>
        <div className='w-full md:w-1/2 p-6'>
          <div className='flex flex-col gap-12 justify-center'>
            <p className='text-blue-400  text-3xl'>
              <span className='text-blue-400'>DOTLESS</span> is your trusted partner in creating clean and comfortable spaces.
            </p>
            <p className='text-black dark:text-gray-100 text-lg'>With a commitment to excellence and a passion for cleanliness, we believe in our goal 
              to become a leading name in the cleaning industry.
            </p>
            <div className='w-full md:w-auto text-l md:text-xl'>
              <Button title="Book Now"  />
            </div>
          </div>
        </div>
        
        <div className='w-full md:w-1/2 p-6'>
          <div className='flex justify-center items-center'>
            <img src={cleaning8} alt="contact us" className='w-auto h-auto' />
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
      <div className='md:px-20 px-4  py-10 md:py-20 h-100vh'>
        <div className='flex flex-col md:flex-row w-full shadow-lg '>
          <div className='w-full md:w-1/2 flex flex-row justify-center items-center bg-gray-400 p-8 md:p-12'>
            <img src={contact} alt="contact us" className='w-auto h-auto' />
          </div>
          <div className="py-8 md:py-16 px-4 md:px-16  w-full md:w-1/2">
              <h2 className="mb-4 text-xl md:text-2xl tracking-tight font-bold text-center text-blue-400 dark:text-white">Contact Us</h2>
              <p className="mb-8 lg:mb-16 font-light text-start text-gray-500 dark:text-gray-400 text-lg  ">Got a technical issue? Want to send feedback about a beter feature? 
              Need details about our Business plan? Let us know.</p>
              <form onSubmit={handleSubmit} className=" flex flex-col gap-6">
                  <div>
                      <label for="name" className="block mb-2 text-sm font-medium text-blue-400 dark:text-gray-300">Name</label>
                      <input type="text" 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 focus:outline-blue-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                          placeholder="Enter your full name" 
                          required />
                  </div>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-blue-400 dark:text-gray-300">Your email</label>
                      <input type="email" 
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange} 
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 focus:outline-blue-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                          placeholder="name@gmail.com" 
                          required />
                  </div>
                  {/* <div>
                      <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                      <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                  </div> */}
                  <div className="sm:col-span-2">
                      <label for="message" className="block mb-2 text-sm font-medium text-blue-400 dark:text-gray-400">Your message</label>
                      <textarea id="message" 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="6" 
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 focus:outline-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                          placeholder="Leave a message..."></textarea>
                  </div>
                  <SecondaryButton title='Send message' />
                  {/* <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button> */}
              </form>
              {feedback.message && (
                <div
                  className={`mt-4 p-2 text-sm ${
                    feedback.type === 'success' ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {feedback.message}
                </div>
              )}
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Contact