import {
  SET_SELECTED_TAB,
  SET_USER_DATA,
  SET_PRIVACY_DATA
} from '../../constants';
import initialState from '../../store/initial-state';

const formReducer = (state = initialState.form, action) => {
  switch (action.type) {
    case SET_SELECTED_TAB:
      return { ...state, selectedTab: action.data };

    case SET_USER_DATA:
      return {
        ...state,
        data: { ...state.data, user: { ...state.data.user, ...action.data } }
      };

    case SET_PRIVACY_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          privacy: { ...state.data.privacy, ...action.data }
        }
      };

    default:
      return { ...state };
  }
};

export default formReducer;
