import React, { useEffect, useState } from 'react';

// import link
import { Link } from 'react-router-dom';
// import logo
import Logo from '../assets/img/logo1.png';
import { logout } from '../store/auth/authAPI';
import { useDispatch, useSelector } from 'react-redux';
import ProfileModal from './ProfileModal';
import { ImSpinner3 } from 'react-icons/im';

const useMobileDetect = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      const checkIfMobile = () => {
          // Define your mobile width threshold here
          const mobileWidthThreshold = 768;

          // Check if the window width is less than the threshold
          setIsMobile(window.innerWidth < mobileWidthThreshold);
      };

      // Check on initial load
      checkIfMobile();

      // Add event listener for window resize
      window.addEventListener('resize', checkIfMobile);

      // Cleanup event listener
      return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return isMobile;
};

const Header = () => {
  const dispatch = useDispatch();
  const {currentUser, status} = useSelector(state => state.auth);
  const isMobile = useMobileDetect();
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(currentUser?.phoneNumber ? 'purple' : 'green')

  const AvatarDefault = () => {
    return (
      <div onClick={() => setIsOpen((prev) => !prev)} class={`flex items-center justify-center h-16 w-16 text-2xl rounded-full bg-${color}-500 hover:bg-${color}-600 cursor-pointer text-white`}>
          {currentUser.username[0]}
        </div>
    )  
  }

  useEffect(() => {
    setColor(currentUser?.phoneNumber ? 'purple' : 'green')
  }, [currentUser])

  const closeModal = () => setIsOpen(false)

  return ( 
    <header className='py-6 mb-12 border-b'>
<div className='container flex-col sm:flex-row gap-4 mx-auto flex justify-between items-center'>
  <Link to='/'>
    <img src={Logo} className='max-w-64' alt='' />
  </Link>
  <div className='flex items-center gap-6'>
  {status === 'loading' ? <ImSpinner3 size={30} color={color} className="text-2xl animate-spin mx-auto" /> : 
      currentUser ?
        <div className='flex flex-col '>
          <AvatarDefault/>
          {isOpen && <ProfileModal AvatarDefault={AvatarDefault} closeModal={closeModal} isMobile={isMobile} email={currentUser.email} username={currentUser.username}/>}
        </div>
        :
        <>
            <Link className='hover:text-green-900 transition' to='/login'>
              Sign In
            </Link>
          <Link
            className='bg-green-600 hover:bg-green-800 text-white px-4 py-3 rounded-lg transition'
            to='/signup'
          >
            Sign Up
          </Link>
        </>    
      }
  </div>
</div>
    </header>
  );
};

export default Header;
