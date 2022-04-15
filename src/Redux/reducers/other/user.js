import {
  INPUT_CHANGE,
  LOG_OUT,
  SIGN_IN,
  REQUEST_LOG_IN,
  CLEAR_FORM,
} from '../../actions/types';

const initialState = {
  first_name: '',
  last_name: '',
  email: '',
  login: '',
  password: '',
  posts: [{}],
  comments: [{}],
  isLogged: false,
};

export function user(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LOG_IN:
      return state;

    case CLEAR_FORM:
      return {
        ...state,
        first_name: '',
        last_name: '',
        email: '',
        login: '',
        password: '',
      };

    case LOG_OUT:
      localStorage.removeItem('token');
      return { ...state, isLogged: false };
    case INPUT_CHANGE:
      state[action.keyName] = action.value;
      return { ...state };
    case SIGN_IN:
      return {
        ...state,
        ...action.payload.data,
        isLogged: true,
      };
    default:
      return state;
  }
}
