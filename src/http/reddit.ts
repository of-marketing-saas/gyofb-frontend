import axios from 'axios';
import querystring from 'querystring';

export const getRedditToken = async (queryCode: string) => {
  const payload = {
    grant_type: 'authorization_code',
    code: queryCode,
    redirect_uri: import.meta.env.VITE_REDDIT_REDIRECT_URI,
  };
  const data = await axios.post(
    'https://www.reddit.com/api/v1/access_token',
    querystring.stringify(payload),
    {
      headers: {
        Authorization: `Basic ${btoa(
          `${import.meta.env.VITE_REDDIT_CLIENT_ID}:${import.meta.env.VITE_REDDIT_CLIENT_SECRET}`,
        )}`,
        'content-type': 'application/x-www-form-urlencoded',
      },
    },
  );
  return data.data;
};

export const getRedditUser = async (token: string) => {
  const data = await axios.get('https://oauth.reddit.com/api/v1/me.json', {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
  return data.data;
};
