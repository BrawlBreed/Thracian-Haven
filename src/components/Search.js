import React from 'react';

// import components
import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';

const Search = () => {
  return (
    <div>
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
    </div>
  );
};

export default Search;
