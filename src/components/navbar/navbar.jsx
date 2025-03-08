import  {useState} from 'react';
import { CgMenuMotion } from 'react-icons/cg';
import { RiCloseLine } from 'react-icons/ri';
import Button from '../button/button';
import menuItems from './navMenuFiles';
import { Link } from 'react-router-dom';

function Navbar() {

    const [open, setOpen] = useState(false);
  return (
    <nav className='bg-[#f0f9ff] fixed top-0 left-0 md:pb-6 md:pt-12 
      md:px-20 px-4 py-6 mb-20 w-full justify-between md:flex 
      md:justify-between md:item-center shadow z-20  '>
      
      
       <div className='flex justify-between item-center'>
          <a href='/' className='flex justify-start items-center'>
              <img src='/asset/dot2.png' alt='dotless' className='w-28 md:w-30 lg:w-40' />
             
              
          </a>
         
          <div onClick={() => setOpen(!open)} className=' md:hidden text-3xl cursor-pointer text-black'>
            {/* <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon> */}
            {
              !open ? 
              <CgMenuMotion  /> 
              : 
              <RiCloseLine />
            } 
            
          </div>

          
         
       </div>
       
        
        <div className={` md:w-2/3 md:flex md:flex-row md:justify-between 
        md:items-center md:space-x-8
        ${open ? 'flex flex-col' : 'hidden'}`}>
          
          <ul className='md:flex  md:gap-6 justify-between items-center'>

            {
              menuItems.map((item) => (
                  
                  <li
                  key={item.id}
                  className='p-0 my-4 md:my-0'
                  >
                      <Link to={item.path}
                      className='p-1.5 pb-1 text-sm md:text-lg 
                      
                      text-gray-600 hover:text-blue-300 
                      hover:border hover:border-b-blue-400 
                      hover:border-t-0 hover:border-l-0
                      hover:border-r-0 transition ease-linear'   
                      > 
                      {item.name}
                      </Link>
                  </li>
              ))
            }              
           
            
          </ul>

          <Button title='Login' path='/login' />
          
          
        
        </div>
       

      
    </nav>
  )
}

export default Navbar