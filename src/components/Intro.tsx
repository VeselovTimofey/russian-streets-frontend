import { Link } from 'react-router-dom';

import { BUTTON_CLASS } from '../utils/constans/button-constans.ts';
import RussianStreet from '../images/video/RussianStreet.mp4';

function Intro() {
  return (
    <section className='section section_flex-column intro'>
      {/* Это плохое решение которое в будущем стоит переписать. */}
      <video className='intro__video' src={RussianStreet} autoPlay muted loop />
      <h1 className='intro__title title-font title-font_regular title-font_size_big'>
        Улицы начинаются с тебя
      </h1>
      <Link
        className={BUTTON_CLASS.button_size_medium + ' intro__button'}
        to='/reg'
      >
        Зарегистрироваться
      </Link>
    </section>
  );
}

export default Intro;
