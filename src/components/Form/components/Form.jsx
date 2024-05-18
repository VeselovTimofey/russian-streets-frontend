import React from 'react';
import styles from './styles.module.css';

const Form = ({ children }) => {
  return <form className={styles.form}>{children}</form>;
};

export default Form;
