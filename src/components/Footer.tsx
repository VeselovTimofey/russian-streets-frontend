import { Link } from 'react-router-dom';

import logoPath from '../images/svg/logo.svg';
import { BUTTON_CLASS } from '../utils/constans/button-constans';
import vkPath from '../images/svg/vk.svg';
import youtubePath from '../images/svg/youtube.svg';

function Footer() {
  return (
    <footer className="footer">
      <section className="footer-nav">
        <img src={logoPath} alt="Лого Улицы России." />
        <nav>
          <ul className="footer-nav__nav-menu">
            <li><Link className="text-font text-font__bold text-font_size_big" to="/">Новости</Link></li>
            <li><Link className="text-font text-font__bold text-font_size_big" to="/">Документы</Link></li> 
            <li><Link className="text-font text-font__bold text-font_size_big" to="/">Блог</Link></li> 
            <li><Link className="text-font text-font__bold text-font_size_big" to="/">Вакансии</Link></li> 
            <li><Link className="text-font text-font__bold text-font_size_big" to="/">Контакты</Link></li> 
            <li><Link className="text-font text-font__bold text-font_size_big" to="/">Сообщить о проблеме</Link></li> 
            <li><Link className="text-font text-font__bold text-font_size_big" to="/">Поддержать организацию</Link></li>
          </ul>
        </nav>
        <article className="footer-subscribe">
          <h1 className="footer-subscribe__title text-font text-font__bold text-font_size_big">Подпишись</h1>
          <h2 className="footer-subscribe__subtitle text-font text-font__regular text-font_size_big">Узнавай о новостях и новых мероприятиях первым!</h2>
          <input className="footer-subscribe__input text-font text-font_regular text-font_size_medium" placeholder="Введите свой e-mail" />
          <button className={BUTTON_CLASS.button_size_small}>Подписаться</button>
          <p className="footer-subscribe__privacy-policy text-font text-font__regular text-font_size_tiny">При подписке ты соглашаешься с нашей
            <Link to="/"> Политикой конфиденциальности </Link>
            и даешь согласие на получение обновлений от нашей компании
          </p>
        </article>
      </section>
      <section className="footer-credits">
        <p className="text-font text-font_regular text-font_size_medium">2021 - 2024 «Улицы России»</p>
        <p className="text-font text-font_regular text-font_size_medium">Общероссийская общественная организация уличной культуры и спорта "Улицы России"</p>
        <p className="text-font text-font_regular text-font_size_medium">ОГРН: 1217700519101</p>
        <p className="text-font text-font_regular text-font_size_medium">ИНН: 2636219592</p>
        <div className="footer-credits__link-block">
          <Link className="footer-credits__link" to="https://vk.com/streetrf"><img src={vkPath} /></Link>
          <Link className="footer-credits__link" to="https://www.youtube.com/channel/UCse4y0X9dK0utXKtjwlZ1dg"><img src={youtubePath} /></Link>
        </div>
      </section>  
    </footer>
  ); 
}

export default Footer;