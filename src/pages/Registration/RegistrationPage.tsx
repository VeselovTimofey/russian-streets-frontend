import styles from './styles.module.scss';
import { Outlet } from 'react-router-dom';
import RegisterForm from '../../components/elements/Forms/Register/RegisterForm';
import React from 'react';

const RegistrationPage = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.left_block}>
        <div className={styles.form}>
          <h1>Присоединяйся к движению прямо сейчас</h1>
          <RegisterForm />
        </div>
      </div>
      <div className={styles.right_block}></div>
    </section>
  );
};

export default RegistrationPage;
