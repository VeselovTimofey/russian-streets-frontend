import Russia from '../images/svg/russia.svg';

function Agency() {
  return (
    <section className="agency section section_flex-column">
      <h1 className="title-font title-font_regular title-font_size_medium">Представительства</h1>
      <div className="agency__map">
        <input className="agency__input text-font text-font_regular text-font_size_medium" placeholder="Поиск по региону" />
        <select className="agency__select text-font text-font_regular text-font_size_medium">
          <option value="" selected disabled hidden>Выбери регион</option>
        </select>
        <img className="agency__image" src={Russia} />
      </div>
    </section>
  );
}

export default Agency;