import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Movie } from '../../../types';
import api from '../../../services/api';
import Container from './styles/Container';
import Title from './styles/Title';
import DetailBox from './styles/Box';

const MovieDetail: FC = () => {
  const { id: moveId } = useParams();
  const [movie, setMovie] = useState<Movie | undefined>(undefined);
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const data = moveId && await api.movie.getMovie(moveId);
      data && setMovie(data);
      console.error(data);
    }
    moveId && fetchData();
  }, [moveId]);

  return <Container>
    <DetailBox>
      <Title>Name - {movie?.name}</Title>
      <Title>Academy Award Nominations - {movie?.academyAwardNominations}</Title>
      <Title>Academy Award Wins - {movie?.academyAwardWins}</Title>
      <Title>Box Off Revenue In - {movie?.boxOfficeRevenueInMillions}</Title>
      <Title>Buget In - {movie?.budgetInMillions}</Title>
      <Title>Rotten Tomatoes Score - {movie?.rottenTomatoesScore}</Title>
      <Title>Run Time In - {movie?.runtimeInMinutes}</Title>
    </DetailBox>
  </Container>;
};

export default MovieDetail;
