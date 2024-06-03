import type { UseFormRegisterReturn, FieldError } from "react-hook-form";

type InputProps = {
  id: string;
  placeholder: string;
  type: string;
  title: string;
  register?: UseFormRegisterReturn;
  error?: FieldError;
};

function Input(props: InputProps) {
  return (
    <label className="form popup__search-element" htmlFor={props.id}>
      {props.title && <p className="text-font text-font_bold text-font_size_medium">{props.title}</p>}
      <input className="popup__search-input text-font text-font_regular text-font_size_medium" type={props.type} id={props.id} placeholder={props.placeholder} {...props.register} />
      {props.error && <span className="text-font text-font_regular text-font_size_tiny form__input-error" id={props.id} aria-live="assertive">{props.error.message}</span>}
    </label>
  );
}

export default Input;