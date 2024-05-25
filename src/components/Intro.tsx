import { Link } from 'react-router-dom';

import { BUTTON_CLASS } from '../utils/constans/constans.tsx';

function Intro() {
  return (
    <section className="section section_size_full intro">
      <iframe 
        className="intro__video"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=yzZj7pbZe9M29_Lc&amp;controls=0&autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ" 
        title="YouTube video rickroll" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      <h1 className="intro__title title-font title-font_regular title-font_size_big">Улицы начинаются с тебя</h1>
      <Link className={BUTTON_CLASS.button_size_medium + ' intro__button'} to="/">Зарегистрироваться</Link>
    </section>
  );
}

export default Intro;