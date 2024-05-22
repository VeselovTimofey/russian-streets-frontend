import React, { useId } from 'react';
import { useForm } from 'react-hook-form';
import styles from './styles.module.css';

type FormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const LoginForm = () => {
  const id: string = useId();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormData>({ mode: 'onBlur' });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.wrapper_input}>
        <label htmlFor={`${id}-email`}></label>
        Email
        <input
          id={`${id}-email`}
          type='email'
          autoComplete='email'
          aria-describedby={`${id}-email-error-message`}
          {...register('email', {
            required: 'Error:  Это поле обязательно для заполнения!',
          })}
        />
        {errors.email && (
          <p
            id={`${id}-email-error-message`}
            aria-live='assertive'
            className={styles.errors}
          >
            {errors?.email?.message || 'Error!'}
          </p>
        )}
      </div>
      <div className={styles.wrapper_input}>
        <label htmlFor={`${id}-password`}>Password</label>
        <input
          id={`${id}-password`}
          type='password'
          autoComplete='current-password'
          aria-describedby={`${id}-password-error-message`}
          {...register('password', {
            required: 'Error: Это поле обязательно для заполнения!',
          })}
        />
        {errors.password && (
          <p id={`${id}-password-error-message`} className={styles.errors}>
            {errors?.password?.message || 'Error!'}
          </p>
        )}
      </div>
      <div>
        <label htmlFor='rememberMe'>Remember me</label>
        <input type='checkbox' {...register('rememberMe')} />
      </div>

      <button type='submit' disabled={isSubmitting}>
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
