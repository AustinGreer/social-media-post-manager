import axios from "axios";

// this will throw an error if you don't have your mock api url set correctly
if (!process.env.NEXT_PUBLIC_MOCK_API_URL) {
  throw new Error(
    "NEXT_PUBLIC_MOCK_API_URL is not defined!!! Please set it in your .env file"
  );
}

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MOCK_API_URL,
});

export default api;
