import { BUTTON_CLASS } from '../../utils/constans/button-constans';

function CallForRegistration() {
  return (
    <section className="call-for-registration our-possibilities__element">
      <p className="title-font title-font_regular title-font_size_small">Развивайся с нами</p>
      <p className="title-font title-font_regular title-font_size_small">Будь в тренде</p>
      <p className="title-font title-font_regular title-font_size_small">Используй все возможности</p>
      <button className={BUTTON_CLASS.button_size_medium + ' call-for-registration__button'}>Стать партнером</button>
    </section>
  );
}

export default CallForRegistration;