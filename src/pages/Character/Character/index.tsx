import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { isEmpty } from 'lodash';
import api from '../../../services/api';
import { Character as CharacterType } from '../../../types';
import Charactertem from '../../../components/List/CharacterItem';
import List from '../../../styles/List';
import Loading from '../../../components/Loading/Loading';

const Character: FC = () => {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const data = await api.character.getCharacters();
      data && setCharacters(data);
    };
    fetchData();
  }, []);

  const handleClick = (id: string): void => navigate(`/game/:${id}`);

  if (isEmpty(characters)) return <Loading />;

  return (
    <List>
      {characters.map((movie) => (
        <Charactertem key={movie._id} item={movie} onClick={handleClick} />
      ))}
    </List>
  );
};

export default Character;
