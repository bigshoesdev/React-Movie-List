import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { isEmpty } from 'lodash';
import { Character } from '../../../types';
import api from '../../../services/api';
import Container from './styles/Container';
import Title from './styles/Title';
import DetailBox from './styles/Box';
import Loading from '../../../components/Loading/Loading';

const MovieDetail: FC = () => {
  const { id: characterId } = useParams();
  const [character, setCharacter] = useState<Character | undefined>(undefined);
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const data = characterId && (await api.character.getCharacter(characterId));
      data && setCharacter(data);
    };
    characterId && fetchData();
  }, [characterId]);

  if (isEmpty(character)) return <Loading />;

  return (
    <Container>
      <DetailBox>
        {character &&
          Object.keys(character)?.map((key) =>
            character?.[key] ? (
              <Title key={key}>
                {key} - {character?.[key]}
              </Title>
            ) : undefined,
          )}
      </DetailBox>
    </Container>
  );
};

export default MovieDetail;
