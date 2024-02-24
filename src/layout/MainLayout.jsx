import { Img, NavBar } from 'components';
import Footer from 'components/Footer';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainLayout = ({ children }) => {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const Item = [
    {
      name: ``,
      url: ``,
    },
  ]

  function toggleMenu() {
    setIsOpen(s=>!s);
  }

  // if(isOpen) {
  //   return (
      
  //   )
  // }

  return (
    <>
      <div className={`bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto overflow-hidden ${isOpen?'hidden':''}`}>
        <NavBar handleOnClick={toggleMenu} />
        {children}
        <Footer />
      </div>

      {/* sm menu */}
      <div className={`h-screen w-screen bg-indigo-900 ${isOpen?'':'hidden'} `}  >
        <div className='max-w-screen w-[90%] mx-auto py-4 '>
          <div className='flex justify-between items-center'>
            <Img
              className="sm:w-[25%] w-[10%]"
              src="images/img_image2.png"
              alt="imageTwo"
            />
            <div onClick={toggleMenu}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.649 8.99997L17.658 1.9909C18.1141 1.53498 18.1141 0.797804 17.658 0.341939C17.2021 -0.11398 16.4649 -0.11398 16.009 0.341939L8.99992 7.35096L1.99107 0.341939C1.53493 -0.11398 0.798022 -0.11398 0.342103 0.341939C-0.114034 0.797858 -0.114034 1.53498 0.342103 1.9909L7.3509 8.99997L0.342158 16.009C-0.11398 16.4649 -0.11398 17.2021 0.342158 17.658C0.450304 17.7664 0.578815 17.8524 0.720306 17.9111C0.861797 17.9697 1.01348 17.9998 1.16664 17.9996C1.46512 17.9996 1.76371 17.8854 1.99112 17.658L8.99992 10.6489L16.009 17.658C16.1172 17.7664 16.2457 17.8524 16.3872 17.911C16.5287 17.9697 16.6804 17.9998 16.8335 17.9996C17.132 17.9996 17.4306 17.8854 17.658 17.658C18.1141 17.202 18.1141 16.4649 17.658 16.009L10.649 8.99997Z" fill="white"/>
              </svg>
            </div>
          </div>
          <div>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainLayout