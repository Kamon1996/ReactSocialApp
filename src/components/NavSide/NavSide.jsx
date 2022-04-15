import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default function NavSide() {
  return (
    <nav className='nav-side'>
      <ul>
        <li>
          <Link to='/mypage/'>
            <i className='fas fa-user-circle'></i>
            <span>Моя страница</span>
          </Link>
        </li>
        <li>
          <Link to='/news/'>
            <i className='fas fa-newspaper'></i>
            <span>Новости</span>
          </Link>
        </li>
        <li>
          <Link to='/dialogs/'>
            <i className='fas fa-comment'></i>
            <span>Мессенджер</span>
            <span></span>
          </Link>
        </li>
        <li>
          <Link to='/friends/'>
            <i className='fas fa-user-friends'></i>
            <span>Друзья</span>
            <span></span>
          </Link>
        </li>
        <li>
          <Link to='/groups/'>
            <i className='fas fa-users'></i>
            <span>Сообщества</span>
            <span></span>
          </Link>
        </li>
        <li>
          <Link to='/music/'>
            <i className='fas fa-music'></i>
            <span>Музыка</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
