import React, { useState } from 'react';
import styles from './Searchbar.module.css'; 
import CustomLoader from './CustomLoader';
import searchImages from './searchImages'; // Importă funcția de căutare a imaginilor

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);

    try {
      console.log('Apelare searchImages cu query:', searchQuery); // Adaugă un console.log pentru a verifica apelul funcției searchImages
      const images = await searchImages(searchQuery); // Trimite cererea către API
      onSubmit(images); // Pasează rezultatele către componenta părinte
      setSearchQuery('');
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className={styles.searchbar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button type="submit" className={styles.button}>
          <span className={styles.buttonLabel}>Search</span>
        </button>
        <input
          className={styles.input}
          type="text"
          value={searchQuery}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
      {loading && <CustomLoader />}
    </header>
  );
};

export default Searchbar;
