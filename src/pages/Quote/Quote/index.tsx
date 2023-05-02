import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { isEmpty } from 'lodash';
import api from '../../../services/api';
import { Quote as QuoteType } from '../../../types';
import QuoteItem from '../../../components/List/QuoteItem';
import List from '../../../styles/List';
import Loading from '../../../components/Loading/Loading';

const Character: FC = () => {
  const navigate = useNavigate();
  const [quotes, setQuotes] = useState<QuoteType[]>([]);
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const data = await api.quote.getQuotes();
      data && setQuotes(data);
    };
    fetchData();
  }, []);

  const handleClick = (id: string): void => navigate(`/quote/:${id}`);
  if (isEmpty(quotes)) return <Loading />;

  return (
    <List>
      {quotes.map((item) => (
        <QuoteItem key={item._id} item={item} onClick={handleClick} />
      ))}
    </List>
  );
};
export default Character;
