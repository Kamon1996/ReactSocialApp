import { API } from '../consts';

export async function APIgetProfile() {
  const response = await API.get(`/user/profile`);
  return response;
}
