import { createSlice, configureStore } from '@reduxjs/toolkit';
import { housesData } from '../../data';
import { fetchHouses } from './housesAPI';

const initialState = {
  houses: housesData,
  testHouses: [],
  country: 'Location (any)',
  countries: [],
  property: 'Property type (any)',
  properties: [],
  price: 'Price range (any)',
  loading: false,
};

const housesSlice = createSlice({
  name: 'houses',
  initialState,
  reducers: {
    setHouses(state, action) {
      state.houses = action.payload;
    },
    setCountry(state, action) {
      state.country = action.payload;
    },
    setCountries(state, action) {
      state.countries = action.payload;
    },
    setProperty(state, action) {
      state.property = action.payload;
    },
    setProperties(state, action) {
      state.properties = action.payload;
    },
    setPrice(state, action) {
      state.price = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    // Add more reducers as needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHouses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHouses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.testHouses = action.payload; // Assume the payload is an array of houses
      })
      .addCase(fetchHouses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },

});

export const {
  setHouses,
  setCountry,
  setCountries,
  setProperty,
  setProperties,
  setPrice,
  setLoading,
} = housesSlice.actions;

export default housesSlice.reducer;

