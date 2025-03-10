import  { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import laundry from '/asset/laundry.jpg'
import { RiCloseLine } from 'react-icons/ri'
import SecondaryButton from '../../button/SecondaryButton'
import { Link } from 'react-router-dom';

function Booking() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        // message: '',
        date: '',
        time: '',
        description: '',
        rooms: '',
        address: '',
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
        if (loading) return; // Prevent multiple submissions
        setLoading(true);
        

        try {
          // Retrieve existing bookings from localStorage or initialize an empty array
          const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
      
          // Add new booking data
          const updatedBookings = [...existingBookings, formData];
      
          // Save back to localStorage
          localStorage.setItem("bookings", JSON.stringify(updatedBookings));
      
          // Provide success feedback
          setFeedback({
            message: "Booking saved successfully!",
            type: "success",
          });
      
          // Reset form fields
          setFormData({
            name: "",
            email: "",
            date: "",
            time: "",
            description: "",
            rooms: "",
            address: "",
          });
          setTimeout(() => navigate('/'), 2000); 
        } catch (error) {
          console.error("Error saving booking:", error);
          setFeedback({
            message: "An error occurred while saving your booking.",
            type: "error",
          });
        } finally {
          setLoading(false);
        }
      };
      
  return (
    <div className='h-100lvh flex flex-row justify-center items-center mt-24 md:mt-60 md:px-20 px-4 pb-20'>
      <div className='w-2/3 p-0 flex flex-col gap-4 items-center justify-center bg-slate-200 shadow-lg shadow-black text-black font-lg md:font-xl'>
        <div className='p-5 w-full'>
          <div className='w-full flex flex-row justify-between items-center mb-2'>
            <h2 className='text-blue-400 font-semibold text-xl'>Service name</h2>
            <Link to='/'>
            <RiCloseLine className='text-3xl text-gray-400 hover:text-red-400' />
            </Link>
          </div>
          <div className='w-full h-80 flex flex-row'>
            <img src={laundry} alt='About' className="w-full" />
          </div>
        </div>
        <div className='w-full flex flex-col p-10 rounded-t-3xl shadow-lg shadow-blue-200 bg-white'>
          <p className='text-black text-lg font-bold'>
            Enter your order details below
          </p>
          <form onSubmit={handleSubmit} className=" flex flex-col gap-6 rou">
                  <div className='flex flex-col md:flex-row w-full justify-between items-center gap-4'>
                    <div className='w-full md:w-1/2'>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-blue-400 dark:text-gray-300">Name</label>
                        <input type="text" 
                            id="name" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 focus:outline-blue-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                            placeholder="Enter your full name" 
                            required />
                    </div>
                    <div className='w-full md:w-1/2'>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-blue-400 dark:text-gray-300">Your email</label>
                        <input type="email" 
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange} 
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 focus:outline-blue-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                            placeholder="name@gmail.com" 
                            required />
                    </div>
                  </div>
                  {/* <div>
                      <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                      <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                  </div> */}
                  <div className='flex flex-col md:flex-row w-full justify-between items-center gap-4'>
                    <div className='w-full md:w-1/2'>
                        <label htmlFor="date" className="block mb-2 text-sm font-medium text-blue-400 dark:text-gray-300">Date</label>
                        <input type="date" 
                            id="date" 
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 focus:outline-blue-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                            placeholder="DD/MM/YY" 
                            required />
                    </div>
                    <div className='w-full md:w-1/2'>
                        <label htmlFor="time" className="block mb-2 text-sm font-medium text-blue-400 dark:text-gray-300">Time</label>
                        <input type="time" 
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange} 
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 focus:outline-blue-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                            placeholder="2:00 PM" 
                            required />
                    </div>
                  </div>
                  <div className='w-full flex flex-col md:flex-row gap-4'>
                    <div className="sm:col-span-2 w-full md:w-1/2">
                      <label htmlFor="description" className="block mb-2 text-sm font-medium text-blue-400 dark:text-gray-400">Description</label>
                      <textarea id="description" 
                          name="description"
                          value={formData.message}
                          onChange={handleChange}
                          rows="6" 
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 focus:outline-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                          placeholder="Describe the task here..."></textarea>
                    </div>
                   <div className='w-full md:w-1/2 flex flex-col justify-between'>
                     <div className='w-full'>
                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-blue-400 dark:text-gray-300">Address</label>
                        <input type="text" 
                            id="address" 
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 focus:outline-blue-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                            placeholder="Enter the job address" 
                            required />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="rooms" className="block mb-2 text-sm font-medium text-blue-400 dark:text-gray-300">Rooms</label>
                        <input type='number' 
                            id="rooms" 
                            name="rooms"
                            value={formData.rooms}
                            onChange={handleChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 focus:outline-blue-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                            placeholder="0" 
                            required />
                    </div>
                   </div>
                  </div>
                  <SecondaryButton title='Place Order' />
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
  )
}

export default Booking