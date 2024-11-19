// src/utils/api.js
import axios from 'axios';

const BASE_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

export const fetchTickets = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data; // Assuming the API returns JSON data
  } catch (error) {
    console.error('Error fetching tickets:', error);
    return [];
  }
};
