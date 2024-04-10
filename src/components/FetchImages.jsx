import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery';
import CustomLoader from './CustomLoader';


const FetchImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          'https://pixabay.com/api/?key=42285080-c22d5f6a90f49c0ab863c2d8a&image_type=photo&orientation=horizontal&per_page=12&page=1'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data received:', data);
        setImages(data.hits);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      {loading ? <CustomLoader /> : <ImageGallery images={images} />}
    </div>
  );
};

export default FetchImages;
