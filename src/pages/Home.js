import React from 'react';

// import components
import HouseList from '../components/HouseList';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Banner />
      <HouseList />
    </div>
  );
};

export default Home;
