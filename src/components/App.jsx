import React, { useState } from 'react';
import Searchbar from './Searchbar';
import FetchImages from './FetchImages';
import ImageList from './ImageList';
import CustomLoader from './CustomLoader';

export const App = () => {
  const [loading, setLoading] = useState(false);

  const handleLoading = (isLoading) => {
    console.log('Is loading:', isLoading); // Adaugă un console.log pentru a verifica starea de încărcare
    setLoading(isLoading);
  };

  return (
    <div>
      <Searchbar />
      {/* Utilizează CustomLoader în loc de Loader */}
      <CustomLoader loading={loading} /> 
      <FetchImages setLoading={handleLoading} />
      <ImageList />
    </div>
  );
};

export default App;
