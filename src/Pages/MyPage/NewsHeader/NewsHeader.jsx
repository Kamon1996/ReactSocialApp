import './index.css';

import React, { useEffect, useState } from 'react';

export default function NewsHeader() {
  let inputField;
  useEffect(() => {
    inputField = document.querySelector('.my-news-search');
  });
  return (
    <div className='my-news-nav'>
      <input
        onBlur={(event) => (event.target.value = '')}
        className='my-news-search'
        type='search'
        placeholder='Введите фразу или слово'
      />
      <>
        <div className='row'>
          <a href='#' className='btn-news-nav btn-news-active'>
            Все записи
          </a>
          <a href='#' className='btn-news-nav'>
            Мои записи
          </a>
        </div>
        <i onClick={() => inputField.focus()} className='fas fa-search'></i>
      </>
    </div>
  );
}
