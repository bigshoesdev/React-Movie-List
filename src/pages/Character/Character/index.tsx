import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import api from '../../../services/api';
import { Character as CharacterType } from '../../../types';
import List from './styles/List';
import Charactertem from '../../../components/List/CharacterItem';

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

  return (
    <List>
      {characters.map((movie) => (
        <Charactertem key={movie._id} item={movie} onClick={handleClick} />
      ))}
    </List>
  );
};

export default Character;
