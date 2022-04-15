import './index.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderNavButtons(props) {
  return (
    <div className='header-enter-btns'>
      <Link to='/login' className='log-in btn'>
        Log In
      </Link>
      <Link to='/signin' className='sign-in btn'>
        <i className='fas fa-sign-in-alt'></i>
        <p>Sign In</p>
      </Link>
    </div>
  );
}
