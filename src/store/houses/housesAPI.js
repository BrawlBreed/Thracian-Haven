import { createAsyncThunk } from '@reduxjs/toolkit';

// Define the async thunk
export const fetchHouses = createAsyncThunk(
  'houses/fetchHouses',
  async () => {
    const response = await fetch('');
    const data = await response.json();
    return data;
  }
);
