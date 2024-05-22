import React, { useId } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './styles.module.css';

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  doublePassword: string;
  mailing: boolean;
  agreement: boolean;
};

const RegisterForm = () => {
  const id: string = useId();
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<FormData>({ mode: 'onBlur' });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label>Имя</label>
      <input
        {...register('firstName', {
          required: 'Это поле обязательно для заполнения!',
          pattern: /^[A-Za-z]+$/i,
        })}
        type='text'
      />
      {errors.firstName && (
        <p
          id={`${id}-firstName-error-message`}
          aria-live='assertive'
          className={styles.errors}
        >
          {errors?.firstName?.message || 'Error!'}
        </p>
      )}
      <label>Фамилия</label>
      <input
        {...register('lastName', {
          required: 'Это поле обязательно для заполнения!',
          pattern: /^[A-Za-z]+$/i,
        })}
        type='text'
      />
      {errors.lastName && (
        <p
          id={`${id}-lastName-error-message`}
          aria-live='assertive'
          className={styles.errors}
        >
          {errors?.lastName?.message || 'Error!'}
        </p>
      )}

      <label>Номер телефона</label>
      <input
        {...register('phone', {
          pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
        })}
        type='tel'
      />
      {errors.phone && (
        <p
          id={`${id}-phone-error-message`}
          aria-live='assertive'
          className={styles.errors}
        >
          {errors?.phone?.message || 'Error!'}
        </p>
      )}

      <label>E-mail</label>
      <input
        {...register('email', {
          required: 'Это поле обязательно для заполнения!',
          pattern:
            /^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$/,
        })}
        type='email'
        required
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

      <label>Пароль</label>
      <input
        {...register('password', {
          required: 'Это поле обязательно для заполнения!',
          minLength: {
            value: 8,
            message: 'Пароль не должен быть менее 8 символов!',
          },
        })}
        type='password'
      />
      {errors.password && (
        <p
          id={`${id}-password-error-message`}
          aria-live='assertive'
          className={styles.errors}
        >
          {errors?.password?.message || 'Error!'}
        </p>
      )}
      <label>Повтори пароль</label>
      <input
        {...register('doublePassword', {
          required: 'Это поле обязательно для заполнения!',
          validate: (val: string) => {
            if (watch('password') != val) {
              return 'Пароли не совпадают!';
            }
          },
        })}
        type='password'
        required
      />
      {errors.doublePassword && (
        <p
          id={`${id}-doublePassword-error-message`}
          aria-live='assertive'
          className={styles.errors}
        >
          {errors?.doublePassword?.message || 'Error!'}
        </p>
      )}

      <div className={styles.checkbox_block}>
        <label className={styles.label}>
          {' '}
          <input {...register('mailing')} type='checkbox' />
          <p>
            Я хотел бы подписаться на уведомления о новых событиях
            (необязательно)
          </p>
        </label>
        <label className={styles.label}>
          {' '}
          <input {...register('agreement')} type='checkbox' />
          <p>
            Регистрируясь, я соглашаюсь на обработку моих персональных данных
          </p>
        </label>
      </div>

      <input type='submit' />
    </form>
  );
};

export default RegisterForm;
