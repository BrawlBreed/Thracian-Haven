import React, { createContext, useState, useEffect } from 'react';

// import data
import { housesData } from '../data';

// create context
export const HouseContext = createContext();

// provider
const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);

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

  const handleClick = () => {
    // console.log(country, property, price);
    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    };

    const minPrice = parseInt(price.split(' ')[0]);
    const maxPrice = parseInt(price.split(' ')[2]);

    // return a single array
    const x = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }
    });

    setHouses(x);
  };

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
        handleClick,
        houses,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
