import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import App, { serverClient } from './App';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={serverClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
