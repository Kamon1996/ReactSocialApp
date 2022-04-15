import './index.css';

import React from 'react';
import Post from '../../components/Post/Post';
import AddNewsField from '../../components/AddNewsField/AddNewsField';
import { useSelector } from 'react-redux';

export default function NewsPage() {
  const postsAll = useSelector((store) => store.posts);

  return (
    <div className='news'>
      <AddNewsField />
      {postsAll.length > 0 &&
        postsAll.map((post) => <Post data={post} key={post.id} />).reverse()}
    </div>
  );
}
