import React, { useContext } from 'react';

// import context
import { HouseContext } from './HouseContext';

const HouseList = () => {
  const { houses } = useContext(HouseContext);

  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12'>
        {houses.map((house, index) => {
          return (
            <div
              key={index}
              className='bg-pink-50 shadow-md p-5 rounded-lg rounded-tl-3xl'
            >
              <p className='text-sm'>{house.type}</p>
              {house.country}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HouseList;
