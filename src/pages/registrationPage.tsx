import React, { useState } from 'react';
import styles from './styles.module.scss';
import RegisterForm from '../components/Forms/Register/registerForm';
import { Link, Outlet, useMatch } from 'react-router-dom';
import CustomLink from '../components/CastomLink/CustomLink';

const RegistrationPage = () => {
  const [active, setActive] = useState<number>(0);
  return (
    <div className={styles.wrapper}>
      <div className={styles.left_block}>
        <div className={styles.form}>
          <h1>Стань частью команды прямо сейчас</h1>
          <nav className={styles.nav}>
            <CustomLink to={'/'}>Участник</CustomLink>
            <CustomLink to={'/organization'}>Организация</CustomLink>
          </nav>
          <Outlet />
        </div>
      </div>
      <div className={styles.right_block}></div>
    </div>
  );
};

export default RegistrationPage;
