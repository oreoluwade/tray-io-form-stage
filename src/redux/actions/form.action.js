import {
  SET_PRIVACY_DATA,
  SET_SELECTED_TAB,
  SET_USER_DATA
} from '../../constants';

export const setSelectedTab = data => {
  return {
    type: SET_SELECTED_TAB,
    data
  };
};

export const setUserData = data => {
  return {
    type: SET_USER_DATA,
    data
  };
};

export const setPrivacyData = data => {
  return {
    type: SET_PRIVACY_DATA,
    data
  };
};
