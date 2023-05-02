import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { isEmpty } from 'lodash';
import { Character, Movie, Quote } from '../../../types';
import api from '../../../services/api';
import Container from './styles/Container';
import Title from './styles/Title';
import DetailBox from '../../../styles/DetailBox';
import Loading from '../../../components/Loading/Loading';

const MovieDetail: FC = () => {
  const { id: quoteId } = useParams();
  const [quote, setQuote] = useState<Quote | undefined>(undefined);
  const [movie, setMovie] = useState<Movie | undefined>(undefined);
  const [character, setCharacter] = useState<Character | undefined>(undefined);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const data = quoteId && (await api.quote.getQuote(quoteId));
      data && setQuote(data);
    };
    quoteId && fetchData();
  }, [quoteId]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const movieData = quote?.movie && (await api.movie.getMovie(quote?.movie));
      movieData && setMovie(movieData);
      const characterData = quote?.character && (await api.character.getCharacter(quote?.character));
      characterData && setCharacter(characterData);
    };
    quote && fetchData();
  }, [quote]);

  if (isEmpty(quote) || isEmpty(movie) || isEmpty(character)) return <Loading />;

  return (
    <Container>
      <DetailBox>
        {character &&
          Object.keys(quote || {})?.map((key) =>
            quote?.[key] ? (
              <Title key={key}>
                {key} - {quote?.[key]}
              </Title>
            ) : undefined,
          )}
        {character &&
          Object.keys(character || {})?.map((key) =>
            character?.[key] ? (
              <Title key={key}>
                {key} - {character?.[key]}
              </Title>
            ) : undefined,
          )}
        {character &&
          Object.keys(movie || {})?.map((key) =>
            movie?.[key] ? (
              <Title key={key}>
                {key} - {movie?.[key]}
              </Title>
            ) : undefined,
          )}
      </DetailBox>
    </Container>
  );
};

export default MovieDetail;
