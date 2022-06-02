import React, { useState, useEffect } from 'react';

// import data
import { houses } from '../data';

// import icon
import { RiMapPinLine } from 'react-icons/ri';

const CountryDropdown = () => {
  const [text, setText] = useState('Location - (ANY)');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // return only countries
    const allCountries = houses.map((house) => {
      return house.country;
    });

    // remove duplicates
    const uniqueCountries = ['Location - (ANY)', ...new Set(allCountries)];

    // set countries state
    setCountries(uniqueCountries);
  }, []);

  return (
    <div className='dropdown'>
      <RiMapPinLine />
      <div>{text}</div>
      <div>Select your place</div>
      <ul className='bg-red-100'>
        {countries.map((country, index) => {
          return (
            <li onClick={() => setText(country)} key={index}>
              {country}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CountryDropdown;
