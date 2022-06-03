import React, { useState, useEffect } from 'react';

// import data
import { houses } from '../data';

// import icon
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

const CountryDropdown = () => {
  const [text, setText] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    // return only countries
    const allCountries = houses.map((house) => {
      return house.country;
    });

    // remove duplicates
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];

    // set countries state
    setCountries(uniqueCountries);
  }, []);

  return (
    <div className='dropdown'>
      <div onClick={() => setDropdown(!dropdown)} className='dropdown-btn'>
        <RiMapPinLine className='dropdown-icon-primary' />
        <div>
          <div>{text}</div>
          <div>Select your place</div>
        </div>
        {dropdown ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </div>
      {dropdown && (
        <ul className='dropdown-menu'>
          {countries.map((country, index) => {
            return (
              <li
                onClick={() => setText(country)}
                key={index}
                className='cursor-pointer hover:text-red-500'
              >
                {country}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CountryDropdown;
