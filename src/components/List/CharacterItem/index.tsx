import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoImage from '../../../assets/logo.jpg';
import Container from './styles/Container';
import { Character } from '../../../types';
import { Image } from './styles/Image';
import Detail from './Detail';

type CharactertemProps = {
  item: Character;
  onClick: (id: string) => void;
};

const Charactertem: FC<CharactertemProps> = ({ item, onClick }) => {
  const navigate = useNavigate();
  const handleOnclick = (id: string): void => navigate(`/character/${id}`);

  return (
    <Container onClick={() => handleOnclick(item._id)}>
      <Image file={LogoImage} />
      <Detail item={item} />
    </Container>
  );
};

export default Charactertem;
