import { API } from '../consts';

export async function APIDeletePost(id) {
  const response = await API.delete(`/posts/post/${id}`);
  return response;
}
