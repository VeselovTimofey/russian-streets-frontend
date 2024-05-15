import React from 'react';
import styles from './styles.module.css';

import Input from './Input';
import Button from './Button';

const Form = () => {
  return (
    <form className={styles.form}>
      <Input />
      <Button />
    </form>
  );
};

export default Form;
