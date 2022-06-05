import React from 'react';

// import icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const House = ({ house }) => {
  return (
    <div className='bg-white shadow-lg p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto'>
      <img className='mb-4' src={house.image} alt='' />
      <div className='text-sm'>{house.type}</div>
      <div className='text-lg text-primary font-semibold'>{house.address}</div>
      <div className='text-base font-medium text-secondary mb-4'>
        $ {house.price}
      </div>
      <div className='flex gap-x-5'>
        <div className='flex items-center gap-x-1'>
          <div className='text-gray-500 text-2xl'>
            <BiBed />
          </div>
          <div className='text-gray-600'>{house.bedrooms}</div>
        </div>
        <div className='flex items-center gap-x-1'>
          <div className='text-gray-500 text-2xl'>
            <BiBath />
          </div>
          <div className='text-gray-600'>{house.bathrooms}</div>
        </div>
        <div className='flex items-center gap-x-1'>
          <div className='text-gray-500 text-2xl'>
            <BiArea />
          </div>
          <div className='text-gray-600'>{house.surface}</div>
        </div>
      </div>
    </div>
  );
};

export default House;
