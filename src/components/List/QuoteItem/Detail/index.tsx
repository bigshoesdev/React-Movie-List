import { FC } from 'react';
import Container from './styles/Container';
import { Quote } from '../../../../types';

type DetailProps = {
  item: Quote;
};

const Detail: FC<DetailProps> = ({ item }) => <Container>{item.dialog}</Container>;

export default Detail;
