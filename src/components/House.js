import React from 'react';

// import icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const House = ({ house }) => {
  return (
    <div className='bg-white shadow-lg p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto'>
      <img className='mb-4' src={house.image} alt='' />
      <div className='bg-green-500 rounded-full text-base text-white px-3 inline-block mb-2'>
        {house.type}
      </div>
      <div className='text-xl font-medium'>{house.address}</div>
      <div className='flex gap-x-4 my-4'>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <BiBed />
          </div>
          <div className='text-base'>{house.bedrooms}</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <BiBath />
          </div>
          <div className='text-base'>{house.bathrooms}</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <BiArea />
          </div>
          <div className='text-base'>{house.surface}</div>
        </div>
      </div>
      <div className='text-lg font-semibold text-violet-600 mb-4'>
        $ {house.price}
      </div>
    </div>
  );
};

export default House;
