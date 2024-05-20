import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './styles.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type Inputs = {
  email: string;
  password: string;
};

let userSchema = yup
  .object({
    password: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required();

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onBlur',
    resolver: yupResolver(userSchema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      {' '}
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue='test' {...register('email', { required: true })} />
        {errors.email && <p>{errors?.email?.message || 'Error!'}</p>}
        <input
          {...register('password', {
            required: 'Это поле обязательно для заполнения!',
            //pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
          })}
        />

        {errors.password && <p>{errors?.password?.message || 'Error!'}</p>}

        <input type='submit' />
      </form>
    </>
  );
}
