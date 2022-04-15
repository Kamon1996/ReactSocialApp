import { GET_CORRENT_POST } from '../../actions/types';

const initialState = {};

export function correntPost(state = initialState, action) {
  switch (action.type) {
    case GET_CORRENT_POST:
      return action.payload;
    default:
      return state;
  }
}
