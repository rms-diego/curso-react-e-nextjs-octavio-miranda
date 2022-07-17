import baseUrl from './baseUrl';

const getPhotos = async () => {
  const { data } = await baseUrl.get('/photos');

  return data;
};

export default getPhotos;
