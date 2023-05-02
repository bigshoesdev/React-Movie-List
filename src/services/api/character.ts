import { Character } from '../../types';
import { Movie } from '../../types/Movie';
import { api } from './base';

const GET_CHARACTER_URL = `/character`;

export const getCharacters = async (): Promise<Character[]> => {
  const {
    data: { docs: objects },
  } = await api.get(GET_CHARACTER_URL);

  return objects as Character[];
};

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await api.get(`${GET_CHARACTER_URL}/${id}`);
  const {
    data: { docs: objects },
  } = await api.get(`${GET_CHARACTER_URL}/${id}`);
  const characters = objects as Character[];
  return characters[0];
};

export const getCharacterQuote = async (id: string): Promise<void> => {
  const { data } = await api.get(`${GET_CHARACTER_URL}/${id}/quote`);
  console.error(data);
};
