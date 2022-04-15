import React, { useEffect, useState } from 'react';
import './index.css';
import HeaderNavButtons from './HeaderNavButtons/HeaderNavButtons';
import HeaderProfileBtn from './HeaderProfileBtn/HeaderProfileBtn';
import { useDispatch, useSelector, shallowEqual, connect } from 'react-redux';
import { flushSync } from 'react-dom';
import { signIn, logOut, clearForm } from '../../Redux/actions/user';
import { Link } from 'react-router-dom';

export default function Header() {
  const dispatch = useDispatch();
  const signInHandler = () => {
    dispatch(signIn());
  };
  const logOutHandler = () => {
    dispatch(logOut());
    dispatch(clearForm());
  };

  return (
    <header className='header'>
      <div className='wrapper'>
        <Link to='/news/' className='logo'>
          <i className='fab fa-react'></i>
          <h3>SocialApp</h3>
        </Link>

        {localStorage.getItem('token') ? (
          <HeaderProfileBtn logOut={logOutHandler} />
        ) : (
          <HeaderNavButtons signIn={signInHandler} />
        )}
      </div>
    </header>
  );
}
