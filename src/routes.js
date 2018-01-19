import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { App } from './components'; // eslint-disable-line import/no-duplicates

const routes = (
  <BrowserRouter>
    <div>
      <Route path='/' component={App} />
    </div>
  </BrowserRouter>
);

export default routes;
