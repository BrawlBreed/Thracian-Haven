import React, { useContext } from 'react';

// import components
import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';

// import context
import { HouseContext } from './HouseContext';

const Search = () => {
  const { handleClick } = useContext(HouseContext);
  return (
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex justify-between'>
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
