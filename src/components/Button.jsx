import React from 'react';
import styles from './Button.module.css'; // Importă stilurile modulare

const Button = ({ onClick, show }) => {
  return (
    <button onClick={onClick} className={show ? styles.button : styles.hidden}>
      Load more
    </button>
  );
};

export default Button;
