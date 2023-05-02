import { Quote } from '../../types';
import { api } from './base';

const GET_QUOTE_URL = `/quote`;

export const getQuotes = async (): Promise<Quote[]> => {
  const {
    data: { docs: objects },
  } = await api.get(GET_QUOTE_URL);
  return objects as Quote[];
};

export const getQuote = async (id: string): Promise<Quote> => {
  const {
    data: { docs: objects },
  } = await api.get(`${GET_QUOTE_URL}/${id}`);

  const quotes = objects as Quote[];
  return quotes[0] || {};
};
