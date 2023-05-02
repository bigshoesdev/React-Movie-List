import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import api from '../../../services/api';
import { Quote as QuoteType } from '../../../types';
import List from './styles/List';
import QuoteItem from '../../../components/List/QuoteItem';

const Character: FC = () => {
  const navigate = useNavigate();
  const [quote, setQuote] = useState<QuoteType[]>([]);
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const data = await api.quote.getQuotes();
      data && setQuote(data);
    }
    fetchData();
  }, []);

  const handleClick = (id: string): void => navigate(`/quote/:${id}`);

  return <List>{quote.map((item) => <QuoteItem key={item._id} item={item} onClick={handleClick} />)}</List>;
};
export default Character;
