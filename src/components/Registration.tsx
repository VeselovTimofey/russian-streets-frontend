import RegisterForm from './elements/RegisterForm';
import registration from '../images/registration.png';

function Registration() {
  return (
    <section className="registration">
      <div className="registration__left-block">
        <h1 className="registration__text title-font title-font_regular title-font_size_small">Присоединяйся к движению прямо сейчас</h1>
        <RegisterForm />
      </div>
      <img src={registration} alt="Велосипедист на фоне обрыва." className="registration__image" />
    </section>
  );
};

export default Registration;
