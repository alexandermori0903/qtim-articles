import axios from "axios";

const httpApiClient = axios.create({
  baseURL: process.env?.BACKEND_API || 'https://6082e3545dbd2c001757abf5.mockapi.io',
});

export default httpApiClient;
