import axios from 'axios';

const searchImages = async (searchQuery, pageNumber, apiKey) => {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=cat&page=1&key=42285080-c22d5f6a90f49c0ab863c2d8a&image_type=photo&orientation=horizontal&per_page=12`
    );
    if (!response.data.hits) {
      throw new Error('No images found.');
    }
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};

export default searchImages;




