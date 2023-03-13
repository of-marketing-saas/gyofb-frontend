/* eslint-disable no-undef */
import axios from 'axios';

export const getRedditToken = async (queryCode) => {
  const payload = {
    grant_type: 'authorization_code',
    code: queryCode,
    redirect_uri: process.env.VITE_REDDIT_REDIRECT_URI,
  };
  const data = await axios.post('https://www.reddit.com/api/v1/access_token', payload, {
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.VITE_REDDIT_CLIENT_ID}:${process.env.VITE_REDDIT_CLIENT_SECRET}`,
      ).toString('base64')}`,
      'content-type': 'application/x-www-form-urlencoded',
    },
  });
  return data.data;
};

export const getRedditUser = async (token) => {
  const data = await axios.get('https://oauth.reddit.com/api/v1/me.json', {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
  return data.data;
};
