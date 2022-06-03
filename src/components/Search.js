import React from 'react';

// import components
import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';

const Search = () => {
  return (
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex justify-between'>
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
    </div>
  );
};

export default Search;
