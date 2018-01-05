/* eslint-disable import/default */
import { render } from 'react-dom';
import routes from './routes';
//import configureStore from './store/configureStore';
//import routes from './routes.js';
//import { Provider } from 'react-redux';

render(
  routes,
  document.getElementById('app')
);
