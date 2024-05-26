import { useId } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles.module.scss';
import { IUser } from '../../../service/types';
import { useDispatch } from 'react-redux';
import { addUserS } from '../../../service/slice/userSlice';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const id: string = useId();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<IUser>({ mode: 'onBlur' });

  const onSubmit = (data: IUser) => {
    console.log(data);
    const user = data;
    dispatch(addUserS(user));
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label>Имя</label>
      <input
        {...register('firstName', {
          required: 'Это поле обязательно для заполнения!',
          pattern: /^[A-Za-z а-яё]+$/i,
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
          pattern: /^[A-Za-zА-Яа-яЁё\s]/i,
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
          pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
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
          validate: (value?: string) => {
            if (watch('password') != value) {
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
        <label className={styles.label_checkbox}>
          {' '}
          <input {...register('mailing')} type='checkbox' />
          <p>
            Я хотел бы подписаться на уведомления о новых событиях
            (необязательно)
          </p>
        </label>
        <label className={styles.label_checkbox}>
          <input
            {...register('agreement', {
              required: 'Это поле обязательно для заполнения!',
            })}
            type='checkbox'
          />

          <p>
            Регистрируясь, я соглашаюсь на
            <a> обработку моих персональных данных</a>
          </p>
        </label>
        {errors.agreement && (
          <p
            id={`${id}-firstName-error-message`}
            aria-live='assertive'
            className={styles.errors}
          >
            {errors?.agreement?.message || 'Error!'}
          </p>
        )}
      </div>

      <input type='submit' />
    </form>
  );
};

export default RegisterForm;
