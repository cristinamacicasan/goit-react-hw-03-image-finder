import React, { useState } from 'react';
import Button from './Button'; // Asigură-te că importă componenta Button
import axios from 'axios'; // Importează axios pentru a face cereri HTTP

const ImageList = () => {
  const [images, setImages] = useState([]); // Starea pentru lista de imagini
  const [pageNumber, setPageNumber] = useState(1); // Starea pentru numărul de pagină

  // Funcția pentru a încărca mai multe imagini
  const fetchMoreImages = async () => {
    try {
      // Faceți o cerere către API pentru a obține următoarea serie de imagini
        const response = await axios.get(`https://pixabay.com/api/?key=42285080-c22d5f6a90f49c0ab863c2d8a&image_type=photo&orientation=horizontal&per_page=12


`);

      // Verificați dacă răspunsul conține date valide
      if (response.data && response.data.length > 0) {
          const newImages = response.data.hits; // Salvează noile imagini
        setImages([...images, ...newImages]); // Adaugă noile imagini la lista existentă de imagini
        setPageNumber(pageNumber + 1); // Actualizează numărul de pagină
      } else {
        throw new Error('No more images available.'); // Aruncă o excepție dacă nu există mai multe imagini disponibile
      }
    } catch (error) {
      console.error('Error fetching more images:', error);
    }
  };

  return (
    <div>
      {/* Afiseaza lista de imagini */}
      {images.map((image, index) => (
        <img key={index} src={image.url} alt={image.alt} />
      ))}
      
      {/* Afișează butonul "Load More" doar dacă există imagini încărcate */}
      <Button onClick={fetchMoreImages} show={images.length > 0} />
    </div>
  );
};

export default ImageList;
