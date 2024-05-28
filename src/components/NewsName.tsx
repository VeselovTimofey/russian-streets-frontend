import { Link } from 'react-router-dom';

type InputProps = {
  name: string, 
};

function NewsName(props:InputProps) {
  return(
    <section className="news-name">
      <nav className="news-name__nav">
        <Link className="news-name__text text-font text-font-regular text-font_size_medium" to="/russian-streets-frontend/">Главная</Link>
        <p className="news-name__text text-font text-font-regular text-font_size_medium">&ensp;&#707;&ensp;</p>
        <Link className="news-name__text text-font text-font-regular text-font_size_medium" to="/russian-streets-frontend/">Новости</Link>
      </nav>
      <h1 className="news-name__text title-font title-font_regular title-font_size_medium">{props.name}</h1>
    </section>
  );
}

export default NewsName;