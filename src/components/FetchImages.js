import axios from 'axios';

export const fetchImages = async (value, page, controller) => {
  const API_KEY = '29499204-a77a5df2d9e32bd170e84cd3d';
  const response = await axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`,
    { signal: controller.signal }
  );
  return response.data;
};
