import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../Menu';
import Container from './styles/Container';
import Body from './styles/Body';

type MainLayoutProps = {
  children?: React.ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <Container>
    <Menu />
    <Body>{children || <Outlet />}</Body>
  </Container>
);

export default MainLayout;
