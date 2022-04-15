import {
  ADD_NEW_COMMENT,
  ADD_NEW_POST,
  CHANGE_COMMENT,
  CHANGE_POST,
  DELETE_COMMENT,
  DELETE_POST,
  GET_CORRENT_POST,
  GET_POSTS_ALL,
  REQUEST_GET_POSTS_LIMITED,
  GET_POSTS_LIMITED,
  REQUEST_ADD_NEW_COMMENT,
  REQUEST_ADD_NEW_POST,
  REQUEST_CHANGE_COMMENT,
  REQUEST_CHANGE_POST,
  REQUEST_DELETE_COMMENT,
  REQUEST_DELETE_POST,
  REQUEST_GET_CORRENT_POST,
} from '../actions/types';

//-----------------------------------------------------------//
//---------------------- POST ACTIONS -----------------------//
//-----------------------------------------------------------//

// --------------------Get All Posts----------------------- //

export const getPostsAll = (allPosts) => ({
  type: GET_POSTS_ALL,
  payload: allPosts,
});

// --------------------Get Posts Limited----------------------- //

export const reqGetPostLimited = (count) => ({
  type: REQUEST_GET_POSTS_LIMITED,
  payload: count,
});

export const getPostsLimited = (posts) => ({
  type: GET_POSTS_LIMITED,
  payload: posts,
});

// --------------------Get Corrent Post----------------------- //

export const reqGetCorrentPost = (id) => ({
  type: REQUEST_GET_CORRENT_POST,
  payload: id,
});

export const getCorrentPost = (post) => ({
  type: GET_CORRENT_POST,
  payload: post,
});

// --------------------Add New Post----------------------- //

export const addNewPost = (newPost) => ({
  type: ADD_NEW_POST,
  payload: newPost,
});

export const getDataForPost = (newPost) => ({
  type: REQUEST_ADD_NEW_POST,
  payload: newPost,
});

// --------------------Delete Post----------------------- //
export const reqDeletePost = (id) => ({
  type: REQUEST_DELETE_POST,
  payload: id,
});

export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id,
});

// --------------------Change Post----------------------- //

export const reqChangePost = (id, newData) => ({
  type: REQUEST_CHANGE_POST,
  payload: { id, newData },
});

export const changePost = (changePost) => ({
  type: CHANGE_POST,
  payload: changePost,
});

//-----------------------------------------------------------//
//---------------------- COMMENT ACTIONS --------------------//
//-----------------------------------------------------------//

// --------------------Add new comment----------------------- //

export const reqAddNewComment = (newComment) => ({
  type: REQUEST_ADD_NEW_COMMENT,
  payload: newComment,
});

export const addNewComment = (newComment) => ({
  type: ADD_NEW_COMMENT,
  payload: newComment,
});

// --------------------Delete Comment----------------------- //

export const reqDeleteComment = (commentId, postId) => ({
  type: REQUEST_DELETE_COMMENT,
  payload: { commentId, postId },
});

export const deleteComment = (commentId, postId) => ({
  type: DELETE_COMMENT,
  payload: { commentId, postId },
});

// --------------------Change Comment----------------------- //

export const reqChangeComment = (id, newComment) => ({
  type: REQUEST_CHANGE_COMMENT,
  payload: { id, newComment },
});

export const changeComment = (id, newComment) => ({
  type: CHANGE_COMMENT,
  payload: { id, newComment },
});
