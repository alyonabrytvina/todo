import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import TodoForm from '../TodoForm/TodoForm';
import { store } from '../../store/store';
import { theme } from '../../assets/theme';
import './App.scss';

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <TodoForm />
    </Provider>
  </ThemeProvider>
);
