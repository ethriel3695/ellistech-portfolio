import { combineReducers } from 'redux';
import repos from './reporeducer';
import personalInfo from './personalInfoReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  repos,
  personalInfo,
  ajaxCallsInProgress
});

export default rootReducer;
