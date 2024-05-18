import React from 'react';
import styles from './styles.module.css';

const Input = ({ ...props }) => {
  return (
    <input className={styles.input} {...props}>
      {/*{children}*/}
    </input>
  );
};

export default Input;
