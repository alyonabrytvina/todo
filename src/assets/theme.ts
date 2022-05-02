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
      light: '#B39CD0',
      main: '#845EC2',
      contrastText: '#FBEAFF',
    },
    secondary: {
      main: '#00C9A7',
      contrastText: '#4D8076',

    },
    success: {
      main: '#532E01',
    },
  },
});

export default theme;
