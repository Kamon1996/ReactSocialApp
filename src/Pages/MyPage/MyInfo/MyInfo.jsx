import './index.css';
import React, { useState } from 'react';

const MoreInfoBlock = () => (
  <div className='more-info-block'>
    <div className='my-info-main info-block'>
      <div className='row'>
        <span>Родной город</span>
        <span>Минск</span>
      </div>
      <div className='row'>
        <span>Языки</span>
        <span>Русский, English</span>
      </div>
      <div className='row'>
        <span>Братья, сестры</span>
        <span>Фамилия Имя, Фамилия Имя</span>
      </div>
    </div>
  </div>
);

export default function MyInfo(props) {
  const [showMore = false, toggle] = useState();
  const { first_name, last_name, email } = props;
  return (
    <div className='my-info'>
      <div className='my-info-header'>
        <h3>
          {first_name} {last_name}
        </h3>
        <h5>Статус</h5>
      </div>
      <div className='my-info-promo info-block'>
        <div className='row'>
          <span>День рождения</span>
          <span>16 июля 1996</span>
        </div>
        <div className='row'>
          <span>Город</span>
          <span>Минск</span>
        </div>
        <div className='row'>
          <span>email</span>
          <span>{email}</span>
        </div>
      </div>
      <button onClick={(e) => toggle(!showMore)} className='more-info'>
        Показать подробную информацию
      </button>
      {showMore ? <MoreInfoBlock /> : null}
    </div>
  );
}
