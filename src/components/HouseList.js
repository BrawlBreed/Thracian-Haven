import React, { useContext } from 'react';

// import context
import { HouseContext } from './HouseContext';

const HouseList = () => {
  const { houses } = useContext(HouseContext);
  console.log(houses);
  return (
    <div className='container mx-auto'>
      {houses.map((house, index) => {
        return <div key={index}>{house.country}</div>;
      })}
    </div>
  );
};

export default HouseList;
