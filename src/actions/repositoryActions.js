import * as types from './actionTypes';
import { beginAjaxCall } from './ajaxStatusActions';
import repos from '../api/mockRepoApi';

export function loadReposSuccess (repos) {
  return { type: types.LOAD_REPOS_SUCCESS, repos };
}


export function loadRepos () {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return repos.getAllRepos().then(repos => {
      dispatch(loadReposSuccess(repos));
    }).catch(error => {
      throw (error);
    });
  };
}
