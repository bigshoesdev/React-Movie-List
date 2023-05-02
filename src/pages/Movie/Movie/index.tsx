import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import api from '../../../services/api';
import { Movie as MovieType } from '../../../types';
import List from './styles/List';
import MoviieItem from '../../../components/List/MovieItem';

const Movie: FC = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState<MovieType[]>([]);
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const data = await api.movie.getMovies();
      data && setMovies(data);
    }
    fetchData();
  }, []);

  const handleClick = (id: string): void => navigate(`/movie/:${id}`);

  return <List>{movies.map((movie) => <MoviieItem key={movie._id} item={movie} onClick={handleClick} />)}</List>;
};
export default Movie;
