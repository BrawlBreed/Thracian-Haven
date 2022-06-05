import React from 'react';

// import icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const House = ({ house }) => {
  return (
    <div className='bg-white shadow-lg p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto'>
      <img className='mb-4' src={house.image} alt='' />
      <div className='text-sm'>{house.type}</div>
      <div className='text-lg font-semibold'>{house.address}</div>
      <div className='text-base font-medium text-violet-700 mb-4'>
        $ {house.price}
      </div>
      <div className='flex gap-x-2'>
        <div className='flex items-center'>
          <div className='text-gray-500 text-[20px] rounded-full w-8 h-8 flex justify-center items-center'>
            <BiBed />
          </div>
          <div>{house.bedrooms}</div>
        </div>
        <div className='flex items-center'>
          <div className='text-gray-500 text-[20px] rounded-full w-8 h-8 flex justify-center items-center'>
            <BiBath />
          </div>
          <div>{house.bathrooms}</div>
        </div>
        <div className='flex items-center'>
          <div className='text-gray-500 text-[20px] rounded-full w-8 h-8 flex justify-center items-center'>
            <BiArea />
          </div>
          <div>{house.surface}</div>
        </div>
      </div>
    </div>
  );
};

export default House;
