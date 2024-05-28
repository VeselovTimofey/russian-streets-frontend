type InputProps = {
  id: string;
  placeholder: string;
  type: string;
  title: string;
};

function Input(props: InputProps) {
  return (
    <label className="form popup__search-element" htmlFor={props.id}>
      {props.title && <p className="text-font text-font_bold text-font_size_medium">{props.title}</p>}
      <input className="popup__search-input text-font text-font_regular text-font_size_medium" type={props.type} name={props.id} id={props.id} placeholder={props.placeholder} />
      <span className="text-font text-font_regular text-font_size_tiny form__input-error"></span>
    </label>
  );
}

export default Input;