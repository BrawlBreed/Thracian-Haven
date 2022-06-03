import React, { useState, useEffect } from 'react';

// import data
import { houses } from '../data';

// import icon
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

const PriceRangeDropdown = () => {
  const [text, setText] = useState('Price range (any)');
  const [dropdown, setDropdown] = useState(false);

  const priceRange = [
    {
      min: 100000,
      max: 130000,
    },
    {
      min: 130000,
      max: 160000,
    },
    {
      min: 160000,
      max: 190000,
    },
    {
      min: 200000,
      max: 230000,
    },
  ];

  return (
    <div className='dropdown'>
      <div onClick={() => setDropdown(!dropdown)} className='dropdown-btn'>
        <RiHome5Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{text}</div>
          <div className='text-[13px]'>Choose price range</div>
        </div>
        {dropdown ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </div>
      {dropdown && (
        <ul className='dropdown-menu'>
          {priceRange.map((price, index) => {
            return (
              <li
                onClick={() => setText(`${price.min} $ - ${price.max} $`)}
                key={index}
                className='cursor-pointer hover:text-red-500'
              >
                Between {price.min} - {price.max}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default PriceRangeDropdown;
