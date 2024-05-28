import { Link } from 'react-router-dom';

type InputProps = {
  id: number;
  name: string;
  image_url: string;
  description: string;
};

function NewsCard(props: InputProps) {
  return(
    <article className="news-card" key={props.id}>
      <img className="news-card__image" src={props.image_url} />
      <h2 className="subtitle-font subtitle-font_regular">{props.name}</h2>
      <p className="news-card__discription text-font text-font_regular text-font_size_medium">{props.description}</p>
      <Link className="news-card__link text-font text-font_regular text-font_size_big" to={'/russian-streets-frontend/news/' + props.id}>Подробнее&nbsp;&#707;</Link>
    </article>
  );
}

export default NewsCard;