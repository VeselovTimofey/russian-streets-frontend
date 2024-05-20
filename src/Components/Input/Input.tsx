import React from 'react';

const Input = (props: any) => {
  return (
    <input
      className='form__input text-font text-font_regular text-font_size_medium'
      type={props.type}
      name={props.name}
      id={props.id}
      placeholder={props.placeholder}
      disabled
      {...props}
    />
  );
};

export default Input;
