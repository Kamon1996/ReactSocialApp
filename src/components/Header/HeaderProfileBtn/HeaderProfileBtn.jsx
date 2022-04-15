import './index.css';
import React, { useEffect, useState } from 'react';
import './profileImg.jpg';
import { Link } from 'react-router-dom';

export default function HeaderProfileBtn(props) {
  const { logOut } = props;
  const [isPopped = false, togglePopup] = useState();
  return (
    <div className='header-profile-nav'>
      <div onClick={() => togglePopup(!isPopped)} className='profile-nav-btn'>
        <div className='profile-img' alt='IMG-PROFILE' />
        <i className='fas fa-angle-down'></i>
        <ul className='pop-up-list'>
          <li>
            <Link onClick={(e) => logOut(e)} to='/signin'>
              <i className='fas fa-sign-in-alt'></i>
              <span>Выйти</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
