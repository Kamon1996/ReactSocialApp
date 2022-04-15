import './index.css';
import Comment from '../Comment/Comment';

import React, { useEffect, useState } from 'react';
import InputField from './InputField/InputField';
import { useDispatch, useSelector } from 'react-redux';
import {
  reqAddNewComment,
  reqChangePost,
  reqDeleteComment,
  reqDeletePost,
  reqGetCorrentPost,
} from '../../Redux/actions/post';
import { Link } from 'react-router-dom';

export default function Post(props) {
  const { id, user_id, title, description, createdAt, updatedAt, comments } =
    props.data;

  const { id: userID } = useSelector((store) => store.user);

  const [fieldIsShowed, showAddCommentField] = useState(false);
  const [wantMoreComments, showMoreComments] = useState(false);
  const [editeble, allowEditeble] = useState(false);

  const dispatch = useDispatch();

  const saveChangeHandler = (post) => {
    const description = post.querySelector('.post-text').innerText;
    const title = post.querySelector('.post-title').innerText;
    dispatch(reqChangePost(id, { title, description }));
    allowEditeble(!editeble);
  };

  const deletePostHandler = (id) => {
    dispatch(reqDeletePost(id));
  };

  const addNewCommentHandler = (comment) => {
    comment && dispatch(reqAddNewComment({ title: comment, post_id: id }));
  };

  const deleteCommentHandler = (commentId) => {
    dispatch(reqDeleteComment(commentId, id));
  };

  return (
    <div id={id} className='post-item'>
      <div className='post-item-header row'>
        <div className='small-avatar'></div>
        <div className='header-info'>
          <h4>{user_id}</h4>
          <p>{createdAt}</p>
        </div>
        <i className='fas fa-ellipsis-h'>
          <ul className='pop-up__wrapper'>
            <Link to={`${id}`} className='btn-nice'>
              Показать детали
            </Link>
            {userID === user_id && (
              <>
                <button
                  onClick={() => allowEditeble(!editeble)}
                  className='btn-nice'
                >
                  Редактировать
                </button>
                <button
                  onClick={() => deletePostHandler(id)}
                  className='btn-nice'
                >
                  Удалить запись
                </button>
              </>
            )}
          </ul>
        </i>
      </div>
      <h3 contentEditable={editeble} className='post-title'>
        {title}
      </h3>
      <h4 contentEditable={editeble} className='post-text'>
        {description}
      </h4>
      {editeble && (
        <button
          onClick={(e) => saveChangeHandler(e.target.parentElement)}
          className='btn-nice blue btn-edit'
        >
          Сохранить
        </button>
      )}
      <div className='post-action-buttons row'>
        <div className='like-btn action-btn row'>
          <i className='fas fa-heart'></i>
          <span>10</span>
        </div>
        <div
          onClick={() => showAddCommentField(!fieldIsShowed)}
          className='comment-btn action-btn row'
        >
          <i className='fas fa-comment-alt'></i>
          <span>{comments?.length}</span>
        </div>
        <div className='repost-btn action-btn row'>
          <i className='fas fa-share'></i>
        </div>
      </div>

      <div className='comments'>
        {comments && wantMoreComments
          ? comments.map((comment) => {
              return (
                <Comment
                  data={comment}
                  userId={userID}
                  key={comment.id}
                  onDelete={() => deleteCommentHandler(comment.id)}
                />
              );
            })
          : comments?.slice(0, 2).map((comment) => {
              return (
                <Comment
                  data={comment}
                  userId={userID}
                  key={comment.id}
                  onDelete={() => deleteCommentHandler(comment.id)}
                />
              );
            })}
        {comments?.length > 2 && !wantMoreComments && (
          <button
            onClick={() =>
              showMoreComments(!wantMoreComments, showAddCommentField(true))
            }
            className='btn-nice'
          >
            Показать следующие комментарии
          </button>
        )}
      </div>
      {fieldIsShowed && <InputField onSend={addNewCommentHandler} />}
    </div>
  );
}
