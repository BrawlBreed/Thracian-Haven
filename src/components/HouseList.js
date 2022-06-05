import React, { useContext } from 'react';

// import context
import { HouseContext } from './HouseContext';

const HouseList = () => {
  const { houses } = useContext(HouseContext);

  return (
    <div className='container mx-auto grid grid-cols-3 gap-12'>
      {houses.map((house, index) => {
        return (
          <div key={index} className='bg-pink-50'>
            <p className='text-sm'>{house.type}</p>
            {house.country}
          </div>
        );
      })}
    </div>
  );
};

export default HouseList;
