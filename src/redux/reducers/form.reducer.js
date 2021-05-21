import { SET_FORM_STEP } from '../../constants';
import initialState from '../../store/initial-state';

const formReducer = (state = initialState.form, action) => {
  switch (action.type) {
    case SET_FORM_STEP:
      return { ...state, step: action.data };

    default:
      return { ...state };
  }
};

export default formReducer;
