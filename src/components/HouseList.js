import React, { useContext } from 'react';
import House from './House';

// import context
import { HouseContext } from './HouseContext';

const HouseList = () => {
  const { houses } = useContext(HouseContext);

  return (
    <div className='container mx-auto'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8'>
        {houses.map((house, index) => {
          return <House house={house} key={index} />;
        })}
      </div>
    </div>
  );
};

export default HouseList;
