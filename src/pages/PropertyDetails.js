import React from 'react';

// import houseData
import { housesData } from '../data';
//  useParams
import { useParams } from 'react-router-dom';
// import icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  return (
    <div className='container mx-auto min-h-[800px]'>
      <div className='flex flex-col gap-6 lg:flex-row'>
        <div>
          <img src={property.image} alt='' />
        </div>
        <div className='flex-1'>
          <h2 className='text-2xl font-semibold'>{property.name}</h2>
          <h3 className='text-lg mb-4'>{property.address}</h3>
          <div className='mb-2 flex gap-x-2 text-base'>
            <div className='bg-green-500 rounded-full text-white px-3 inline-block'>
              {property.type}
            </div>
            <div className='bg-violet-500 rounded-full text-white px-3 inline-block'>
              {property.country}
            </div>
          </div>
          <p>{property.description}</p>
          <div className='text-2xl font-semibold text-violet-600 mb-4'>
            $ {property.price}
          </div>
          <img className='w-20 h-20' src={property.agent.image}></img>
          <div>{property.agent.name}</div>
          <div>{property.agent.phone}</div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
