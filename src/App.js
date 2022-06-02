import React from 'react';

// import data
import { houses } from './data.js';

// import components
import SearchForm from './components/SearchForm.js';

console.log(houses);

const App = () => {
  return (
    <div className='container mx-auto'>
      <SearchForm />
    </div>
  );
};

export default App;
