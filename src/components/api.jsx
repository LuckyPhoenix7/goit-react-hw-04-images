import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (imageName, page = 1) => {
  const params = {
    key: '39362847-41ae394614fadabdd72bf94a7',
    q: imageName,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 24,
    page,
  };

  const response = await axios.get('', { params });
  return response.data;
};
