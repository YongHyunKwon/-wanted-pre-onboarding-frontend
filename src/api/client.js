import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://localhost:8000',
  // baseURL: 'https://pre-onboarding-selection-task.shop/',
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const get = async (url) => {
  try {
    const { data, status } = await client.get(url);

    return { data, status };
  } catch (e) {
    return e.response;
  }
};

export const post = async (url, { ...rest }) => {
  try {
    const { data, status } = await client.post(url, rest);

    return { data, status };
  } catch (e) {
    return e.response;
  }
};

export const put = async (url, id, { ...rest }) => {
  try {
    const { data, status } = await client.put(`${url}/${id}`, rest);

    return { data, status };
  } catch (e) {
    return e.response;
  }
};

export const remove = async (url, { ...rest }) => {
  try {
    const { data, status } = await client.delete(
      `${url}/${Object.values(rest)}`
    );

    return { data, status };
  } catch (e) {
    return e.response;
  }
};
