/* eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import routes from './routes';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { loadRepos } from './actions/repositoryActions';
import { loadPersonalInfo } from './actions/personalInfoActions';

const store = configureStore();
store.dispatch(loadRepos());
store.dispatch(loadPersonalInfo());

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
);
