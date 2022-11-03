import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './domain/state/store';
import GlobalStyles from './domain/styles/global';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from './domain/styles/theme';
import { App } from './app/app';

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
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<App />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  </ThemeProvider>,
);
