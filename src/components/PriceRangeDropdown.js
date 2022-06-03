import React, { useState, useEffect, useContext } from 'react';

// import icons
import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from 'react-icons/ri';

// import context
import { HouseContext } from './HouseContext';

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [dropdown, setDropdown] = useState(false);
  const prices = [
    {
      value: 'Price range (any)',
    },
    {
      value: '$100,000 - $130,000',
    },
    {
      value: '$130,000 - $160,000',
    },
    {
      value: '$160,000 - $190,000',
    },
    {
      value: '$190,000 - $220,000',
    },
  ];

  return (
    <div className='dropdown'>
      <div onClick={() => setDropdown(!dropdown)} className='dropdown-btn'>
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
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
          {prices.map((price, index) => {
            return (
              <li
                onClick={() => setPrice(price.value)}
                key={index}
                className='cursor-pointer hover:text-red-500'
              >
                {price.value}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default PriceRangeDropdown;
