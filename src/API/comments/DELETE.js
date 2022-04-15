import { API } from '../consts';

export async function APIdeleteComment(id) {
  const response = await API.delete(`/comments/comment/${id}`);
  return response;
}
