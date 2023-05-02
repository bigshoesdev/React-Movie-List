import { Movie } from '../../types/Movie';
import { api } from './base';

const GET_MOVIE_URL = `/movie`;

export const getMovies = async (): Promise<Movie[]> => {
  const {
    data: { docs: objects },
  } = await api.get(GET_MOVIE_URL);
  return objects as Movie[];
};

export const getMovie = async (id: string): Promise<Movie> => {
  const {
    data: { docs: objects },
  } = await api.get(`${GET_MOVIE_URL}/${id}`);
  const movies = objects as Movie[];
  return movies[0];
};
