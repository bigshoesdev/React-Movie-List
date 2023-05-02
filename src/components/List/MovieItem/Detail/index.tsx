import { FC } from 'react';
import Container from './styles/Container';
import { Movie } from '../../../../types';

type DetailProps = {
  item: Movie;
};

const Detail: FC<DetailProps> = ({ item }) => <Container>{item.name}</Container>;

export default Detail;
