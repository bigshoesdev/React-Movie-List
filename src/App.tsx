import { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router';

const App: FC = () => {
  const content = useRoutes(routes);
  return <div>{content}</div>;
};
export default App;
