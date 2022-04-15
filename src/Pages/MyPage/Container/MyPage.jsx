import './index.css';

import React from 'react';
import MyInfo from '../MyInfo/MyInfo';
import NewsHeader from '../NewsHeader/NewsHeader';
import Post from '../../../components/Post/Post';
import { useSelector } from 'react-redux';
import AddNewsField from '../../../components/AddNewsField/AddNewsField';

export default function MyPage() {
  const postsAll = useSelector((store) => store.posts);
  const { id, first_name, last_name, email } = useSelector(
    (store) => store.user
  );
  const myPosts = postsAll.filter((post) => post.user_id === id);
  return (
    <div className='my-page'>
      <MyInfo first_name={first_name} last_name={last_name} email={email} />
      <div className='news'>
        <NewsHeader />
        <AddNewsField />
        {myPosts.length > 0 ? (
          myPosts.map((post) => <Post data={post} key={post.id} />).reverse()
        ) : (
          <h6>У вас пока нет ни одной записи</h6>
        )}
      </div>
    </div>
  );
}
