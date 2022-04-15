import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Post from '../../components/Post/Post';
import { reqGetCorrentPost } from '../../Redux/actions/post';

export default function CorrentPost() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { correntPost, posts } = useSelector((store) => store);

  useEffect(() => {
    dispatch(reqGetCorrentPost(id));
  }, [id, posts]);

  return correntPost && <Post data={correntPost} />;
}
