import styles from './styles.module.scss';
import { Outlet } from 'react-router-dom';
import CustomLink from '../../components/CastomLink/CustomLink';
import RegisterForm from '../../components/Forms/Register/RegisterForm';

const RegistrationPage = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.left_block}>
        <div className={styles.form}>
          <h1>Присоединяйся к движению прямо сейчас</h1>
          {/*<nav className={styles.nav}>
            <CustomLink to={'reg'}>Участник</CustomLink>
            <CustomLink to={'org'}>Организация</CustomLink>
          </nav>*/}
          {/*<Outlet />*/}
          <RegisterForm />
        </div>
      </div>
      <div className={styles.right_block}></div>
    </section>
  );
};

export default RegistrationPage;
