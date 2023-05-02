import { FC } from 'react';
import Container from './styles/Container';
import { Character } from '../../../../types';

type DetailProps = {
  item: Character;
};

const Detail: FC<DetailProps> = ({ item }) => <Container>{item.name}</Container>;

export default Detail;
