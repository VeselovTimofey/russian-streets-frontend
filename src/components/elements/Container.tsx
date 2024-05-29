import { useAppSelector } from '../../service/hooks/hooks';
import MoreLink from './MoreLink';

function Contents() {
  const { name, description, images_url } = useAppSelector(
    (state) => state.discipline.discipline
  );

  return (
    <div className="disciplines__content">
      <img className="disciplines__image" src={images_url[0]} alt={name} />
      <h2 className="title-font title-font_bold title-font_size_small">{name}</h2>
      <p className="text-font text-font_regular text-font_size_big">{description}</p>
      <MoreLink to="/" />
    </div>
  );
};

export default Contents;
