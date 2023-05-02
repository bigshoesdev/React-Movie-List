import { Suspense, lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import Loading from './components/Loading/Loading';
import MainLayout from './components/MainLayout';

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );

const Movie = Loadable(lazy(() => import('./pages/Movie/Movie')));
const Character = Loadable(lazy(() => import('./pages/Character/Character')));
const Quote = Loadable(lazy(() => import('./pages/Quote/Quote')));
const MovieDetail = Loadable(lazy(() => import('./pages/Movie/MovieDetail')));
const CharacterDetail = Loadable(lazy(() => import('./pages/Character/CharacterDetail')));
const QuoteDetail = Loadable(lazy(() => import('./pages/Quote/QuoteDetail')));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Movie />,
      },
      {
        path: 'movie',
        element: <Movie />,
      },
      {
        path: 'movie/:id',
        element: <MovieDetail />,
      },
      {
        path: 'character',
        element: <Character />,
      },
      {
        path: 'character/:id',
        element: <CharacterDetail />,
      },
      {
        path: 'quote',
        element: <Quote />,
      },
      {
        path: 'quote/:id',
        element: <QuoteDetail />,
      },
    ],
  },
  {
    path: '*',
    element: <MainLayout />,
  },
];

export default routes;
