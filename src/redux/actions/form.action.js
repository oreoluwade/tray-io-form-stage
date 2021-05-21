import { SET_FORM_STEP } from '../../constants';

export const setFormStep = data => {
  return {
    type: SET_FORM_STEP,
    data
  };
};
