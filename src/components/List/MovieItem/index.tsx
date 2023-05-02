import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoImage from '../../../assets/logo.jpg';
import Container from './styles/Container';
import { Movie } from '../../../types';
import { Image } from './styles/Image';
import Detail from './Detail';

type MoviieItemProps = {
  item: Movie;
  onClick: (id: string) => void;
};

const MoviieItem: FC<MoviieItemProps> = ({ item, onClick }) => {
  const navigate = useNavigate();
  const handleOnclick = (id: string): void => navigate(`/movie/${id}`);

  return (
    <Container onClick={() => handleOnclick(item._id)}>
      <Image file={LogoImage} />
      <Detail item={item} />
    </Container>
  );
};

export default MoviieItem;
