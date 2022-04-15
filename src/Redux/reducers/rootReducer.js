import { combineReducers } from 'redux';
import { posts } from './other/posts';
import { user } from './other/user';
import { correntPost } from './other/correntPost';
import { error } from './other/error';

export const rootReducer = combineReducers({
  user,
  posts,
  correntPost,
  error,
});
