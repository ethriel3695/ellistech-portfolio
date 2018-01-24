import * as types from './actionTypes';
import { beginAjaxCall } from './ajaxStatusActions';
import userInfo from '../api/githubApi';

export function loadReposSuccess (repos) {
  return { type: types.LOAD_REPOS_SUCCESS, repos };
}


export function loadRepos (user) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return userInfo(user).then(repos => {
      dispatch(loadReposSuccess(repos));
    }).catch(error => {
      throw (error);
    });
  };
}
