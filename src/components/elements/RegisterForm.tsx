import { useId } from 'react';
import { useForm } from 'react-hook-form';

import Input from './Input.tsx';
import { IUser } from '../../service/utils/types';
import { RegUser } from '../../service/actions/userActions';
import { BUTTON_CLASS } from '../../utils/constans/button-constans';

function RegisterForm() {
  const id: string = useId();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<IUser>({ mode: 'onBlur' });

  const onSubmit = (data: IUser) => {
    RegUser(data);
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Input
        class="register"
        id="firstname"
        placeholder="" 
        type="text" 
        title="Имя"
        register={
          register('firstName', {
            required: 'Это поле обязательно для заполнения!',
            pattern: /^[A-Za-z а-яё]+$/i,
          })
        }
        error={errors.firstName}
      />
      <Input
        class="register"
        id="lastName"
        placeholder=""
        type="text"
        title="Фамилия"
        register={
          register('lastName', {
            required: 'Это поле обязательно для заполнения!',
            pattern: /^[A-Za-zА-Яа-яЁё\s]/i,
          })
        }
        error={errors.lastName}
      />
      <Input
        class="register"
        id="phone"
        placeholder=""
        type="tel"
        title="Номер телефона"
        register={
          register('phone', {
            pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
          })
        }
        error={errors.phone}
      />
      <Input
        class="register"
        id="email"
        placeholder=""
        type="email"
        title="E-mail"
        register={
          register('email', {
            required: 'Это поле обязательно для заполнения!',
            pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          })
        }
        error={errors.email}
      />
      <Input
        class="register"
        id="password"
        placeholder=""
        type="password"
        title="Пароль"
        register={
          register('password', {
            required: 'Это поле обязательно для заполнения!',
            minLength: {
              value: 8,
              message: 'Пароль не должен быть менее 8 символов!',
            },
            pattern: /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?~\\/-]{8,}$/,
          })
        }
        error={errors.password}
      />
      <Input
        class="register"
        id="doublePassword"
        placeholder=""
        type="password"
        title="Повтори пароль"
        register={
          register('doublePassword', {
            required: 'Это поле обязательно для заполнения!',
            validate: (value?: string) => {
              if (watch('password') != value) {
                return 'Пароли не совпадают!';
              }
            },
          })
        }
        error={errors.doublePassword}
      />
      <div /* className={styles.checkbox_block} */>
        <label /* className={styles.label_checkbox} */>
          {' '}
          <input {...register('mailing')} type='checkbox' />
          <p>
            Я хотел бы подписаться на уведомления о новых событиях
            (необязательно)
          </p>
        </label>
        <label /* className={styles.label_checkbox} */>
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
            /* className={styles.errors} */
          >
            {errors?.agreement?.message || 'Error!'}
          </p>
        )}
      </div>
      <button className={BUTTON_CLASS.button_size_small} type='submit'>
        Зарегистрироваться
      </button>
    </form>
  );
}

export default RegisterForm;
