import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#4c4c4c',
      main: '#202020',
      dark: '#161616',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffffff',
      main: '#ffffff',
      dark: '#b2b2b2',
      contrastText: '#000',
    },
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </HashRouter>
);
