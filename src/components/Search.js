import React from 'react';

// import components
import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';

const Search = () => {
  return (
    <div>
      <CountryDropdown />
      <PropertyDropdown />
    </div>
  );
};

export default Search;
