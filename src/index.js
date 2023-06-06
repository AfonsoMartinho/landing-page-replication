import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { store } from './store';
import { ThemeProvider } from "styled-components";
import theme from './styles/Theme.styled'
import GlobalStyle from './styles/Global.styled'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
