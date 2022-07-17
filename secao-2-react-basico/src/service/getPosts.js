import baseUrl from './baseUrl';

const getPosts = async () => {
  const { data } = await baseUrl.get('/posts');

  return data;
};

export default getPosts;
