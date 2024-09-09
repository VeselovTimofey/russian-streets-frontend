import { Link } from 'react-router-dom';

import { BUTTON_CLASS } from '../utils/constans/buttonConstans';

function NotFound() {
  return (
    <section className="not-found">
      <h1 className="title-font title-font_regular title-font_size_medium">Страница не найдена</h1>
      <h2 className="not-found__subtitle title-font title-font_regular title-font_size_big">404</h2>
      <p className="title-font title-font_regular title-font_size_small">Страница устарела, была удалена или не существовала вовсе </p>
      <Link className={ BUTTON_CLASS.button_size_medium } to='/'>Вернуться на главную</Link>
    </section>
  );
}

export default NotFound;