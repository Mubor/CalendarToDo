import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './state/store';
import GlobalStyles from './styles/global';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeProvider theme={baseTheme}>
    <Provider store={store}>
      <React.StrictMode>
        <Helmet>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap'
            rel='stylesheet'
          />
        </Helmet>
        <GlobalStyles />
        <App />
      </React.StrictMode>
    </Provider>
  </ThemeProvider>,
);
