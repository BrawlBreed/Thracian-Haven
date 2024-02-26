import { createAsyncThunk } from '@reduxjs/toolkit';

// Define the async thunk
export const fetchHouses = createAsyncThunk(
  'houses/fetchHouses',
  async () => {
    const response = await fetch('https://fd34-79-100-28-167.ngrok-free.app/');
    const data = await response.json();
    console.log('Data:', data);
    return data;
  }
);
