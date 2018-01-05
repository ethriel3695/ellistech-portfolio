import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { App } from 'components'; // eslint-disable-line import/no-duplicates

const routes = (
  <HashRouter>
    <div>
      <Route path='/' component={App} />
    </div>
  </HashRouter>
);

export default routes;
