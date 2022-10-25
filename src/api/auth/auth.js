import { post } from 'api/client';

export const reqSignUp = (email, password) => {
  return post('/auth/signup', { email, password });
};

export const reqSignIn = (email, password) => {
  return post('/auth/signin', { email, password });
};
