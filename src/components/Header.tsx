import { Link } from 'react-router-dom';

import ButtonWithImage from './ButtonWithImage.tsx';

import logoPath from '../images/svg/logo.svg';
import locationPath from '../images/svg/location.svg';
import buttonSearch from '../images/svg/buttonSearch.svg';
import buttonAccount from '../images/svg/buttonAccount.svg';
import menu from '../images/svg/menu.svg';

type HeaderProps = {
  isOpenPopupMenu: boolean;
  isOpenPopupSearch: boolean;
  isOpenPopupLocation: boolean;
  handleOpenPopupMenu: React.MouseEventHandler<HTMLButtonElement>;
  handleOpenPopupSearch: React.MouseEventHandler<HTMLButtonElement>;
  handleOpenPopupLocation: React.MouseEventHandler<HTMLButtonElement>;
  handleClosePopup: React.MouseEventHandler<HTMLButtonElement>;
};

function Header(props: HeaderProps) {
  const isOpenMenu = props.isOpenPopupMenu ? ' popup_active' : '';
  const isOpenSearch = props.isOpenPopupSearch ? ' popup_active' : '';
  const isOpenLocation = props.isOpenPopupLocation ? ' popup_active' : '';

  return (
    <header className="header" aria-label="Заголовок.">
      <img className="header__logo" src={logoPath} alt="Лого Улицы России." />
      <ButtonWithImage image={locationPath} onClick={props.handleOpenPopupLocation} />
      <nav className="header__nav">
        <ul className="header__nav-menu">
          <li><Link className="header__link text-font text-font_bold text-font_size_big" to="/">Дисциплины</Link></li>
          <li><Link className="header__link text-font text-font_bold text-font_size_big" to="/">События</Link></li>
          <li><Link className="header__link text-font text-font_bold text-font_size_big" to="/">Контакты</Link></li>
        </ul>
      </nav>
      <ul className="header__menu">
        <li><button className="button button_size_small text-font text-font_bold text-font_size_medium">Поддержать организацию</button></li>
        <li><ButtonWithImage image={buttonSearch} onClick={props.handleOpenPopupSearch} /></li>
        <li><ButtonWithImage image={buttonAccount} onClick={() => {console.log('Функция в разработке.');}} /></li>
        <li><ButtonWithImage image={menu} onClick={props.handleOpenPopupMenu}/></li>
      </ul>
      <section className={'popup popup__background_grey' + isOpenSearch} onClick={props.handleClosePopup}>
        <label className="popup__search-element" htmlFor="header-search">
          <input className="popup__search-input text-font text-font_regular text-font_size_medium" type="text" name="header-search" id="header-search" placeholder="Искать &#128269;" />
          <div className="text-font text-font_regular text-font_size_tiny form__input-error"></div>
        </label>
      </section>
      <section className={'popup popup__background_black' + isOpenMenu} onClick={props.handleClosePopup}>
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
      <section className={'popup popup__background_black' + isOpenLocation} onClick={props.handleClosePopup}>
        <div className="popup__location">
          <h1 className="popup__location-title text-font text-font_regular text-font_size_big">Местоположение</h1>
          <p className="popup__location-text text-font text-font_regular text-font_size_medium">Твоя геолокация Москва?</p>
          <button className="popup__location-button_direction_right button button_hollow button_size_small text-font text-font_bold text-font_size_medium">Изменить</button>
          <button className="button button_size_small text-font text-font_bold text-font_size_medium">Да</button>
        </div>
      </section>
    </header>
  );
}

export default Header;