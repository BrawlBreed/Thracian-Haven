import React from 'react';

import Image from '../assets/img/house-banner.png';
import Search from '../components/Search';

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-52'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-[135px] flex items-center flex-1'>
          <h1 className='text-[58px] font-semibold leading-none'>
            <span className='text-violet-700'>Rent</span> Your Dream House With
            Us.
          </h1>
        </div>
        <div className='flex-1 lg:flex justify-end items-end'>
          <img src={Image} alt='' />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
