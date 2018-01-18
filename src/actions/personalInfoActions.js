import * as types from './actionTypes';
import { beginAjaxCall } from './ajaxStatusActions';
import personalInfo from '../api/mockInfoApi';

export function loadPersonalInfoSuccess (personalInfo) {
  // console.log(personalInfo);
  return {type: types.LOAD_PERSONALINFO_SUCCESS, personalInfo};
}

export function loadPersonalInfo () {
  return dispatch => {
    dispatch(beginAjaxCall());
    return personalInfo.getAllPersonalInfo().then(personalInfo => {
      dispatch(loadPersonalInfoSuccess(personalInfo));
    }).catch(error => {
      throw (error);
    });
  };
}
