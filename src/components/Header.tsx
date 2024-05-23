import { Link } from 'react-router-dom';

import ButtonWithImage from './ButtonWithImage.tsx';

import logoPath from '../images/svg/logo.svg';
import locationPath from '../images/svg/location.svg';
import buttonSearch from '../images/svg/buttonSearch.svg';
import buttonAccount from '../images/svg/buttonAccount.svg';
import menu from '../images/svg/menu.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logoPath} alt="Лого Улицы России." />
      <ButtonWithImage image={locationPath} />
      <nav className="header__nav">
        <ul className="header__nav-menu">
          <li><Link className="header__link text-font text-font_bold text-font_size_big" to="/">Дисциплины</Link></li>
          <li><Link className="header__link text-font text-font_bold text-font_size_big" to="/">События</Link></li>
          <li><Link className="header__link text-font text-font_bold text-font_size_big" to="/">Контакты</Link></li>
        </ul>
      </nav>
      <ul className="header__menu">
        <li><button className="button button_size_small text-font text-font_bold text-font_size_medium">Поддержать организацию</button></li>
        <li><ButtonWithImage image={buttonSearch} /></li>
        <li><ButtonWithImage image={buttonAccount} /></li>
        <li><ButtonWithImage image={menu} /></li>
      </ul>
      <section className="popup popup__background_grey">
        <label className="popup__search-element" htmlFor="header-search">
          <input className="popup__search-input text-font text-font_regular text-font_size_medium" type="text" name="header-search" id="header-search" placeholder="Искать &#128269;" />
          <div className="text-font text-font_regular text-font_size_tiny form__input-error"></div>
        </label>
      </section>
      <section className="popup popup__background_black">
        <nav className="popup__menu">
          <ul className="popup__menu_list">
            <li><Link className="header__link subtitle-font subtitle-font_regular" to="/">Представительства</Link></li>
            <li><Link className="header__link subtitle-font subtitle-font_regular" to="/">Наши участники</Link></li>
            <li><Link className="header__link subtitle-font subtitle-font_regular" to="/">О нас</Link></li>
            <li><Link className="header__link subtitle-font subtitle-font_regular" to="/">Проекты</Link></li>
            <li><Link className="header__link subtitle-font subtitle-font_regular" to="/">Блог</Link></li>
            <li><Link className="header__link subtitle-font subtitle-font_regular" to="/">Контакты</Link></li>
            <li><Link className="header__link subtitle-font subtitle-font_regular" to="/">Документы</Link></li>
            <li><Link className="header__link subtitle-font subtitle-font_regular" to="/">Руководство</Link></li>
            <li><Link className="header__link subtitle-font subtitle-font_regular" to="/">Партнеры</Link></li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Header;