import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import './fonts.scss';

export const theme = createTheme({
  typography: {
    body1: {
      fontWeightMedium: 600,
    },
    subtitle2: {
      fontSize: 16,
      fontWeightMedium: 600,
    },
    fontFamily: 'Montserrat',
  },
  status: {
    danger: red[500],
  },
  palette: {
    primary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
    secondary: {
      main: '#ffcc00',
    },
    success: {
      main: '#532E01',
    },
  },
});

export default theme;
