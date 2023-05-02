import { FC, useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { AppBar, Divider } from '@mui/material';
import LogoImage from '../../../assets/logo.jpg';
import Container from './styles/Container';
import { Movie, Quote } from '../../../types';
import { Image } from './styles/Image';
import Detail from './Detail';

type QuoteItemProps = {
  item: Quote;
  onClick: (id: string) => void;
};

const QuoteItem: FC<QuoteItemProps> = ({ item, onClick }) => {
  const navigate = useNavigate();
  const handleOnclick = (id: string): void => navigate(`/quote/${id}`);

  return (
    <Container onClick={() => handleOnclick(item._id)}>
      <Image file={LogoImage} />
      <Detail item={item} />
    </Container>
  );
};

export default QuoteItem;
