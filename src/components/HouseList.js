import React, { useEffect } from 'react';

import House from './House';
import { Link } from 'react-router-dom';
import { ImSpinner2 } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHouses } from '../store/houses/housesAPI';

const HouseList = () => {
  const { houses, loading, testHouses } = useSelector((state) => state.houses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHouses());
  }, []);

  useEffect(() => {
    console.log('Test houses: ', testHouses);
  }, [testHouses])
 
  if (loading) {
    return (
      <ImSpinner2 className='mx-auto animate-spin text-green-400 text-4xl mt-[200px]' />
    );
  }

  if (houses.length < 1) {
    return (
      <div className='text-center text-3xl text-gray-400 mt-48'>
        Sorry, nothing was found.
      </div>
    );
  }

  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
