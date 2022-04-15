import { API } from '../consts';

export async function APIgetPostsAll() {
  const response = await API.get(`/posts/all`);
  return response;
}

export async function APIgetCorrentPost(id) {
  const response = await API.get(`/posts/post/${id}`);
  return response.data;
}

export async function APIgetPostsLimited(count) {
  const response = await API.get(`/posts/all/${count}`);
  return response.data;
}
