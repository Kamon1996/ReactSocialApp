import { API } from '../consts';

export async function APIAddNewComment(payload) {
  const response = await API.post(`/comments/add`, payload);
  return response.data;
}
