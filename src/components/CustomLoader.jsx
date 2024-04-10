import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import styles from './CustomLoader.module.css'; // Importă module CSS
const CustomLoader = () => {
  return (
    <div className={styles.loaderContainer}>
    <TailSpin
      color="red"
      height={80}
      width={80}
    />
    </div>
  );
};


export default CustomLoader;
