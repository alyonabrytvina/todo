import { createTheme } from '@mui/material/styles';
import { orange, red } from '@mui/material/colors';

export const theme = createTheme({
  typography: {
    body1: {
      fontWeightMedium: 600,
      fontFamily: ['Open Sans', 'Arial', 'sans-serif'].join(','),
    },
    subtitle2: {
      fontSize: 16,
      fontWeightMedium: 600,
    },
  },
  status: {
    danger: red[500],
  },
  palette: {
    primary: {
      // main: orange[600],
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    secondary: {
      main: '#ffcc00',
    },
  },
});

export default theme;
