import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import Divider from '@mui/material/Divider';
import { store } from '../../store/store';
import { theme } from '../../assets/theme';
import './App.scss';
import { Header } from '../Header/Header';
import { TodoList } from '../TodoList/TodoList';

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Header />
      <TodoList />
      <Divider />
    </Provider>
  </ThemeProvider>
);
