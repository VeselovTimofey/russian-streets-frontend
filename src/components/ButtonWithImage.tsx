type ButtonProps = {
  image: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function ButtonWithImage(props: ButtonProps) {
  return (
    <button className="image-button" onClick={props.onClick}>
      <img className="image-button__image" src={props.image} />
    </button>
  );
}

export default ButtonWithImage;