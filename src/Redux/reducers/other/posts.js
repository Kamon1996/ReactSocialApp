import {
  ADD_NEW_COMMENT,
  ADD_NEW_POST,
  CHANGE_POST,
  DELETE_COMMENT,
  DELETE_POST,
  GET_POSTS_ALL,
} from '../../actions/types';

const initialState = [];

export function posts(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_POST:
      return [...state, { ...action.payload.data, comments: [] }];

    case GET_POSTS_ALL:
      return action.payload.data;

    case DELETE_POST:
      return state.filter((post) => post.id !== action.payload);

    case CHANGE_POST:
      return state.map((post) =>
        post.id === action.payload.id ? { ...post, ...action.payload } : post
      );

    case ADD_NEW_COMMENT:
      return state.map((post) => {
        if (post.id === action.payload.post_id) {
          post.comments.push(action.payload);
          return post;
        }
        return post;
      });
    case DELETE_COMMENT:
      return state.map((post) => {
        if (post.id === action.payload.postId) {
          post.comments = post.comments.filter(
            (comment) => comment.id !== action.payload.commentId
          );
          return post;
        }
        return post;
      });
    default:
      return state;
  }
}
