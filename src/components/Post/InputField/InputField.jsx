import './index.css';

import React, { useState } from 'react';

export default function InputField(props) {
  const { onSend } = props;
  const [value, onChangeHandler] = useState('');
  return (
    <div className='input-add-comment-wrapper hide'>
      <div className='mini-avatar'></div>
      <form
        onSubmit={(e) => e.preventDefault(onSend(value), onChangeHandler(''))}
        action=''
      >
        <textarea
          placeholder='Написать комментарий ...'
          className='input-add-comment'
          value={value}
          onChange={(e) => onChangeHandler(e.target.value)}
        ></textarea>
        <button type='submit'>
          <i className='fas fa-paper-plane'></i>
        </button>
      </form>
    </div>
  );
}
