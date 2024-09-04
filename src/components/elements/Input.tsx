import type { UseFormRegisterReturn, FieldError } from 'react-hook-form';

import { INPUT_CLASS } from '../../utils/constans/input-constans';

type InputProps = {
  class: 'register' | 'search',
  id: string;
  placeholder: string;
  type: string;
  title: string;
  defaultValue?: string;
  register?: UseFormRegisterReturn;
  error?: FieldError;
};

function Input(props: InputProps) {
  return (
    <label className={INPUT_CLASS[props.class].label} htmlFor={props.id}>
      {props.title && <p className={INPUT_CLASS[props.class].title}>{props.title}</p>}
      <input className={INPUT_CLASS[props.class].input} type={props.type} id={props.id} placeholder={props.placeholder} defaultValue={props.defaultValue} {...props.register} />
      {props.error && <span className={INPUT_CLASS[props.class].error} id={props.id} aria-live="assertive">{props.error.message}</span>}
    </label>
  );
}

export default Input;