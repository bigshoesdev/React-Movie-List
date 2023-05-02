import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Divider } from '@mui/material';
import LogoImage from '../../assets/logo.jpg';
import { MENU_TYPE } from '../../types/Menu';
import StyledMenuItem from './styles/MenuItem';
import Container from './styles/Container';
import ToolBar from './styles/ToolBar';
import { Logo } from './styles/Logo';

const MENU_LIST = [
  {
    title: 'Movie',
    key: MENU_TYPE.MOVIE,
  },
  {
    title: 'Character',
    key: MENU_TYPE.CHARACTER,
  },
  {
    title: 'Quote',
    key: MENU_TYPE.QUOTE,
  },
];

type MenuProps = {
  isMenuListOpen: boolean;
  setIsMenuListOpen: (open: boolean) => void;
};

const Menu: FC = () => {
  const navigate = useNavigate();
  const onMenuItemClick = (menu: MENU_TYPE): void => navigate(`/${menu.toString()}`);

  return (
    <Container>
      <AppBar elevation={0}>
        <ToolBar>
          <Logo file={LogoImage} />
          {MENU_LIST.map((menu) => (
            <StyledMenuItem key={menu.key} onClick={() => onMenuItemClick(menu.key)}>
              {' '}
              {menu.title}{' '}
            </StyledMenuItem>
          ))}
        </ToolBar>
        <Divider />
      </AppBar>
    </Container>
  );
};

export default Menu;
