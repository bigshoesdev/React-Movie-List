import axios from 'axios';

export const BASE_URL = `https://the-one-api.dev/v2`;

const TOKEN = 'R-qPjYYY6xNQvSH6g7SE';

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: { Authorization: `Bearer ${TOKEN}` },
});
