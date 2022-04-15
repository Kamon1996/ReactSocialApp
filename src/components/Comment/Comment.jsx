import './index.css';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reqChangeComment } from '../../Redux/actions/post';

export default function Comment(props) {
  const { id, post_id, title, user_id, createdAt, updatedAt } = props.data;
  const { userId } = props;
  const { onDelete } = props;

  const dispatch = useDispatch();
  const changeCommentHandler = (id, newComment) => {
    dispatch(reqChangeComment(id, newComment));
  };
  const [editeble, allowEdit] = useState(false);
  return (
    <div id={id} className='comment-item'>
      <div className='comment-item-avatar'></div>
      <div className='comment-item-body'>
        <div className='row comment-header'>
          <h5 className='author'>{user_id}</h5>
          <div className='row comment-buttons'>
            {userId === user_id && (
              <>
                <button onClick={() => allowEdit(true)}>
                  <i className='fas fa-pen'></i>
                </button>
                <button onClick={onDelete}>
                  <i className='fas fa-times'></i>
                </button>
              </>
            )}
          </div>
        </div>
        <h4 contentEditable={editeble} className='text'>
          {title}
        </h4>
        {editeble && (
          <button
            onClick={(e) =>
              allowEdit(
                false,
                changeCommentHandler(
                  id,
                  e.target.previousElementSibling.innerText
                )
              )
            }
            className='btn-nice blue'
          >
            Сохранить
          </button>
        )}
        <p className='data-info'>{createdAt}</p>
      </div>
    </div>
  );
}
