import { useParams } from 'react-router-dom';

import NewsName from '../components/NewsName.tsx'
import LastNews from '../components/LastNews.tsx';

import newsJson from '../utils/json/lastNews.json';

function News() {
  let { id } = useParams();
  const news = JSON.parse(JSON.stringify(newsJson))[id];
  return(
    <main className="main-news">
      <NewsName />

      <LastNews isSixNews={false} />
    </main>
  );
}

export default News;