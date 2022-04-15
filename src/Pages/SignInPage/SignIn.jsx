import './index.css';

import React from 'react';
import Input from '../../components/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeInput,
  clearForm,
  reqGetProfile,
  reqSignIn,
} from '../../Redux/actions/user';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const signInFrom = [
  {
    label: 'Email',
    type: 'email',
    placeholder: 'Введите Email',
    name: 'email',
    keyName: 'email',
  },
  {
    label: 'Пароль',
    type: 'password',
    placeholder: 'Введите Пароль',
    name: 'password',
    keyName: 'password',
  },
];

export default function SignIn() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const { email, password } = useSelector((store) => store.user);
  const signInHandler = (e, user) => {
    e.preventDefault();
    dispatch(reqSignIn(user));
  };
  const inputHandler = (keyName, value) => {
    dispatch(changeInput(keyName, value));
  };

  return (
    <div className='login-form-wrapper'>
      <form onSubmit={(e) => signInHandler(e, { email, password })} action=''>
        {signInFrom.map((input) => {
          return (
            <Input
              key={input.keyName}
              label={input.label}
              type={input.type}
              placeholder={input.placeholder}
              name={input.name}
              changeInput={(e) => inputHandler(input.keyName, e.target.value)}
              value={user[input.keyName]}
            />
          );
        })}
        <div className='row'>
          <button
            onClick={() => dispatch(clearForm())}
            className='btn-nice red'
            type='reset'
          >
            Очистить
          </button>
          <button className='btn-nice blue' type='submit'>
            Войти
          </button>
        </div>
      </form>
    </div>
  );
}
