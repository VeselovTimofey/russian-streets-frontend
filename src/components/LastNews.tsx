import { Link } from 'react-router-dom';

import  newsJson from '../utils/json/lastNews.json';
import NewsCard from './elements/NewsCard';
import { BUTTON_CLASS } from '../utils/constans/button-constans';

type InputProps = {
  isSixNews: boolean;
};

function LastNews(props: InputProps) {
  const news = JSON.parse(JSON.stringify(newsJson));

  return(
    <article className="last-news">
      <h1 className="title-font title-font_regular title-font_size_medium">{props.isSixNews ? "Новости" : "Последние новости"}</h1>
      <Link className={BUTTON_CLASS.button_hollow_size_small + " upcoming-events__link"} to="/">Смотреть всё</Link>
      <div className="last-news__cards">
        {Object.keys(news).map((keyName, i) => (
          (i < 3 || props.isSixNews) && 
          <NewsCard
            id={news[keyName].id}
            name={news[keyName].name}
            image_url={news[keyName].image_url}
            description={news[keyName].description}
          />
        ))}
      </div>
    </article>
  );
}

export default LastNews;