import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function personalInfoReducer (state = initialState.personalInfo, action) {
  switch (action.type) {
    case types.LOAD_PERSONALINFO_SUCCESS:
      return action.personalInfo;

    default:
      return state;
  }
}
