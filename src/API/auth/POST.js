import { store } from '../../Redux/store/configureStore';
import { API } from '../consts';

export async function APIsignIn() {
  const {
    user: { email, password },
  } = store.getState();
  const response = await API.post(`/auth/sign_in`, {
    email,
    password,
  });
  API.defaults.headers.common['Authorization'] = response.headers.authorization;
  localStorage.setItem('token', response.headers.authorization);
  return response;
}

export async function APIlogIn() {
  const {
    user: { first_name, last_name, login, email, password },
  } = store.getState();
  const response = await API.post(`/auth/sign_up`, {
    first_name,
    last_name,
    login,
    email,
    password,
  });
  return response;
}
