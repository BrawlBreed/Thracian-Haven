import React from 'react';

// import houseData
import { housesData } from '../data';
//  useParams
import { useParams } from 'react-router-dom';
// import icons
import { BiBed, BiBath, BiArea, BiPhone } from 'react-icons/bi';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  return (
    <div className='container mx-auto min-h-[800px]'>
      <div className='flex flex-col gap-8 lg:flex-row'>
        <div className='max-w-[768px]'>
          <div className='flex flex-col lg:flex-row lg:items-center justify-between'>
            <div>
              <h2 className='text-2xl font-semibold'>{property.name}</h2>
              <h3 className='text-lg mb-4'>{property.address}</h3>
            </div>
            <div className='mb-2 flex gap-x-2 text-sm'>
              <div className='bg-green-500 rounded-full text-white px-3 inline-block'>
                {property.type}
              </div>
              <div className='bg-violet-500 rounded-full text-white px-3 inline-block'>
                {property.country}
              </div>
            </div>
          </div>
          <div className='mb-8 relative'>
            <img src={property.imageLg} alt='' />
            <div className='bg-violet-600 text-white py-2 flex justify-center items-center gap-2 absolute top-0 right-0 w-1/4'>
              <div className='text-xl'>$ {property.price}</div>
              <div>/ year</div>
            </div>
          </div>
          <div className='flex gap-x-6 text-violet-700 mb-6'>
            <div className='flex gap-x-2 items-center'>
              <BiBed className='text-2xl' />
              <div className='text-lg font-medium'>{property.bedrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiBath className='text-2xl' />
              <div className='text-lg font-medium'>{property.bathrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiArea className='text-2xl' />
              <div className='text-lg font-medium'>{property.surface}</div>
            </div>
          </div>
          <p>{property.description}</p>
        </div>
        <div className='flex-1 bg-white shadow-lg p-4'>
          <h3 className='text-2xl font-semibold mb-4'>Contact Realtor</h3>
          <div className='flex items-center gap-x-2 mb-4'>
            <div className='w-20 h-20 p-1 border rounded-full'>
              <img src={property.agent.image}></img>
            </div>
            <div>
              <div className='font-semibold text-lg'>{property.agent.name}</div>
              <div className='flex gap-x-2'>
                <BiPhone className='text-xl' />
                <div>{property.agent.phone}</div>
              </div>
            </div>
          </div>
          <form className='flex flex-col gap-y-4'>
            <input
              className='border rounded w-full px-4 h-12 text-sm outline-none'
              type='text'
              placeholder='Name*'
            />
            <input
              className='border rounded w-full px-4 h-12 text-sm outline-none'
              type='text'
              placeholder='Email*'
            />
            <input
              className='border rounded w-full px-4 h-12 text-sm outline-none'
              type='text'
              placeholder='Phone*'
            />
            <textarea type='text' placeholder='Message*' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
