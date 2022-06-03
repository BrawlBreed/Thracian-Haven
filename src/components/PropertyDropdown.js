import React, { useState, useEffect } from 'react';

// import data
import { houses } from '../data';

// import icon
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

const PropertyDropdown = () => {
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    // return only countries
    const allProperties = houses.map((house) => {
      return house.type;
    });

    // remove duplicates
    const uniqueProperties = ['Property type (any)', ...new Set(allProperties)];

    // set countries state
    setProperties(uniqueProperties);
  }, []);

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
                className='cursor-pointer hover:text-red-500'
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
