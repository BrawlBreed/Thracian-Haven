import React, { useState, useContext } from 'react';

// import icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

// import context
import { HouseContext } from './HouseContext';

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className='dropdown relative'>
      <div onClick={() => setDropdown(!dropdown)} className='dropdown-btn'>
        <RiMapPinLine className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{country}</div>
          <div className='text-[13px]'>Select your place</div>
        </div>
        {dropdown ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </div>
      {dropdown && (
        <ul className='dropdown-menu absolute w-full bg-white z-10'>
          {countries.map((country, index) => {
            return (
              <li
                onClick={() => setCountry(country)}
                key={index}
                className='cursor-pointer hover:text-violet-700 transition'
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
