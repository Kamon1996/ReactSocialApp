import { REMOVE_ERROR, SHOW_ERROR } from '../../actions/types';

const initialState = { isShowed: false, message: '' };

export function error(state = initialState, action) {
  switch (action.type) {
    case SHOW_ERROR:
      return { isShowed: true, message: action.payload };
    case REMOVE_ERROR:
      return { isShowed: false, message: '' };
    default:
      return state;
  }
}
