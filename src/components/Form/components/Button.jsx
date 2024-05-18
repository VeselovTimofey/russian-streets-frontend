import React from 'react';

import styles from './styles.module.css';

const Button = ({ text, type }) => {
  return (
    <button type={type} className={styles.button}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
