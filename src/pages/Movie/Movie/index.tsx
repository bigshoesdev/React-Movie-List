import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { isEmpty } from 'lodash';
import api from '../../../services/api';
import { Movie as MovieType } from '../../../types';
import MoviieItem from '../../../components/List/MovieItem';
import List from '../../../styles/List';
import Loading from '../../../components/Loading/Loading';

const Movie: FC = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState<MovieType[]>([]);
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const data = await api.movie.getMovies();
      data && setMovies(data);
    };
    fetchData();
  }, []);

  const handleClick = (id: string): void => navigate(`/movie/:${id}`);

  if (isEmpty(movies)) return <Loading />;

  return (
    <List>
      {movies.map((movie) => (
        <MoviieItem key={movie._id} item={movie} onClick={handleClick} />
      ))}
    </List>
  );
};
export default Movie;
