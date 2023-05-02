import { createTheme } from '@mui/material/styles';

export const MENU_HEIGHT = '64px';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#000000',
      dark: '#191919',
      light: '#918a39',
    },
    secondary: {
      main: '#ff4d2d',
      light: '#FFFFFF',
      dark: '#998E8D',
    },
    error: {
      main: '#e81b18',
    },
    success: {
      main: '#000000',
      light: '#22C48A',
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'bicyclette, sans-serif',
      fontStyle: 'normal',
      fontWeight: 'bold',
    },
  },
});

export default theme;
