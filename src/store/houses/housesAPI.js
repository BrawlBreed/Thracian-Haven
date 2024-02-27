import { createAsyncThunk } from '@reduxjs/toolkit';

// Define the async thunk
export const fetchHouses = createAsyncThunk(
  'houses/fetchHouses',
  async () => {
    const response = await fetch('https://virtserver.swaggerhub.com/ANTONIUSZLATIN/ASP_NET_CORE/1.0.0/inventory');
    const data = await response.json();
    return data;
  }
);
