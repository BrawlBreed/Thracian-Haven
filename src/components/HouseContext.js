import React, { createContext, useState, useEffect } from 'react';

// import data
import { houses } from '../data';

// create context
export const HouseContext = createContext();

// provider
const HouseContextProvider = ({ children }) => {
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);

  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);

  const [price, setPrice] = useState('Price range (any)');

  useEffect(() => {
    // return all countries
    const allCountries = houses.map((house) => {
      return house.country;
    });

    // remove duplicates
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];

    // set countries state
    setCountries(uniqueCountries);
  }, []);

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
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
