function ButtonWithImage({ image }: { image:string }) {
  return (
    <button className="image-button">
      <img className="image-button__image" src={image} />
    </button>
  );
}

export default ButtonWithImage;