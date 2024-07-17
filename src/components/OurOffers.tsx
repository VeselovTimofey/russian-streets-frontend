import ourOffers from '../images/ourOffers.png';

function OurOffers() {
  return (
    <section className="our-offers">
      <h1 className="title-font title-font_regular title-font_size_small">Что мы предлагаем</h1>
      <ul className="our-offers__list">
        <li><p className="text-font text-font_regular text-font_size_big">Познакомиться ближе с уличной культурой</p></li>
        <li><p className="text-font text-font_regular text-font_size_big">Участие в спортивных культурных мероприятиях в твоём регионе, а также международных и федеральных</p></li>
        <li><p className="text-font text-font_regular text-font_size_big">Участие в бесплатных мастер-классах</p></li>
        <li><p className="text-font text-font_regular text-font_size_big">Полезные деловые контакты</p></li>
        <li><p className="text-font text-font_regular text-font_size_big">Развитие деятелей уличного спорта и культуры, развитие инфраструктуры</p></li>
        <li><p className="text-font text-font_regular text-font_size_big">Помощь в реализации информационных проектов</p></li>
        <li><p className="text-font text-font_regular text-font_size_big">Содействие и опыт в реализации молодёжных событий</p></li>
        <li><p className="text-font text-font_regular text-font_size_big">Рекламные интеграции производимых услуг и продукций</p></li>
      </ul>
      <img className="our-offers__image" src={ourOffers} />
    </section>
  );
}

export default OurOffers;