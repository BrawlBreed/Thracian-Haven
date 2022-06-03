import React, { useState, useEffect, useContext } from 'react';

// import icons
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

// import context
import { HouseContext } from './HouseContext';

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className='dropdown'>
      <div onClick={() => setDropdown(!dropdown)} className='dropdown-btn'>
        <RiHome5Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>
            {property}
          </div>
          <div className='text-[13px]'>Choose property type</div>
        </div>
        {dropdown ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </div>
      {dropdown && (
        <ul className='dropdown-menu'>
          {properties.map((property, index) => {
            return (
              <li
                onClick={() => setProperty(property)}
                key={index}
                className='cursor-pointer hover:text-violet-700 transition'
              >
                {property}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default PropertyDropdown;
