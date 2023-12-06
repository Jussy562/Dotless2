import React from 'react'
import SocialIconsMobile from './iconsForMobile';
// import SocialIcons from './socialIcons';
// import handles from '../socialIcon/socialIconFile';

function Handles() {
    const width = window.innerWidth;
    
  return (
    <div className='w-full'>
        
        {
          width >= 768 ? 
          <SocialIconsMobile />
          : " "
            
        }

        {/* {
          width >= 768 ?
            <div className='flex flex-row  mt-6 md:mt-8 mb-8 md:mb-10 w-full justify-center items-center'>
                <ul className='handle flex flex-row justify-center w-full gap-8'>
                    {
                            handles.map((item) => (
                            <SocialIcons key={item.id} handle={item} />
                            ))
                    }
                </ul>
            </div> 

          : " "
        } */}
    </div>
  )
}

export default Handles