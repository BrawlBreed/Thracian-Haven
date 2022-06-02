import React from 'react';

const SearchForm = () => {
  return (
    <form>
      <div className='w-full flex justify-between'>
        <div>
          <input className='bg-red-100' type='text' />
        </div>
        <div>
          <input className='bg-red-100' type='text' />
        </div>
        <div>
          <input className='bg-red-100' type='text' />
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
