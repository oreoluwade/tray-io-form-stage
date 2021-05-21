import { SET_FORM_STEP, SET_SELECTED_TAB } from '../../constants';

export const setFormStep = data => {
  return {
    type: SET_FORM_STEP,
    data
  };
};

export const setSelectedTab = data => {
  return {
    type: SET_SELECTED_TAB,
    data
  };
};
