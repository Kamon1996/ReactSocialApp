import './index.css';

import React from 'react';
import Input from '../../components/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { changeInput, clearForm, reqlogIn } from '../../Redux/actions/user';
import { useNavigate } from 'react-router';

const loginFrom = [
  {
    label: 'Имя',
    type: 'text',
    placeholder: 'Введите Имя',
    name: 'name',
    keyName: 'first_name',
  },
  {
    label: 'Фамилия',
    type: 'text',
    placeholder: 'Введите Фамилию',
    name: 'sername',
    keyName: 'last_name',
  },
  {
    label: 'Почта',
    type: 'email',
    placeholder: 'Введите Почту',
    name: 'email',
    keyName: 'email',
  },
  {
    label: 'Логин',
    type: 'text',
    placeholder: 'Введите Логин',
    name: 'login',
    keyName: 'login',
  },
  {
    label: 'Пароль',
    type: 'password',
    placeholder: 'Введите Пароль',
    name: 'password',
    keyName: 'password',
  },
];

export default function LoginForm() {
  const dispatch = useDispatch();
  const inputHandler = (keyName, value) => {
    dispatch(changeInput(keyName, value));
  };
  const navigate = useNavigate();
  const logInHandler = (e) => {
    e.preventDefault();
    dispatch(reqlogIn());
    navigate('/signin', { replace: true });
  };
  const user = useSelector((store) => store.user);
  return (
    <div className='login-form-wrapper'>
      <form onSubmit={logInHandler} action=''>
        {loginFrom.map((input, index) => {
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
            Подтвердить
          </button>
        </div>
      </form>
    </div>
  );
}
