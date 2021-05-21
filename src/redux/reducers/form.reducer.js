import { SET_FORM_STEP, SET_SELECTED_TAB } from '../../constants';
import initialState from '../../store/initial-state';

const formReducer = (state = initialState.form, action) => {
  switch (action.type) {
    case SET_FORM_STEP:
      return { ...state, step: action.data };

    case SET_SELECTED_TAB:
      return { ...state, selectedTab: action.data };

    default:
      return { ...state };
  }
};

export default formReducer;
