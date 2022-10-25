import axios from 'axios';

export const client = axios.create();

// client.defaults.baseURL = 'http://localhost:8000';
client.defaults.baseURL = 'https://pre-onboarding-selection-task.shop/';
client.defaults.headers.common[
  'Authorization'
] = `Bearer ${localStorage.getItem('access_token')}`;

export const get = async (url) => {
  try {
    const { data } = await client.get(url);

    return data;
  } catch (e) {
    return e.response.data;
  }
};

export const post = async (url, { ...rest }) => {
  try {
    const { data, status } = await client.post(url, rest);

    return { data, status };
  } catch (e) {
    return e.response.data;
  }
};

export const put = async (url, id, { ...rest }) => {
  try {
    const { data, status } = await client.put(`${url}/${id}`, rest);

    return { data, status };
  } catch (e) {
    return e.response.data;
  }
};

export const remove = async (url, { ...rest }) => {
  try {
    const { data, status } = await client.delete(
      `${url}/${Object.values(rest)}`
    );

    return { data, status };
  } catch (e) {
    return e.response.data;
  }
};
