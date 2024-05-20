import React from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles.module.css';
import Form from '../components/Form';
import Input from '../components/Input';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });
  const onSubmit = (data) => console.log(data);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('email', {
          required: 'Это поле обязательно для заполнения!',
        })}
        type='email'
        name='email'
        placeholder='Введите свой адресс электронной почты'
      />
      <div className={styles.errors}>
        {errors?.email && <p>{errors?.email?.message}</p>}
      </div>
      <Input
        {...register('password', {
          required: 'Это поле обязательно для заполнения!',
        })}
        type='password'
        name='password'
        placeholder='Введите свой пароль'
      />{' '}
      <div className={styles.errors}>
        {errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}
      </div>
      <input type='submit' />
    </Form>
  );
};

export default LoginForm;
