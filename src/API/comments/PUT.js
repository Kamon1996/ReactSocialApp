import { API } from '../consts';

export async function APIchangeComment(payload) {
  const response = await API.put(
    `/comments/comment/${payload.id}`,
    payload.newComment
  );
  return response;
}
