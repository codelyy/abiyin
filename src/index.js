import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';
import 'antd/dist/antd.min.css';

import store from './store';
import { baseTheme } from './assets/theme/index';
import './style/index.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={baseTheme}>
        <HashRouter>
          <Suspense fallback={<div>loading...</div>}>
            <App />
          </Suspense>
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
