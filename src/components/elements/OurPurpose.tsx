import ourPurpose from '../../images/ourPurpose.png'

function OurPurpose() {
  return (
    <section className="our-purpose">
      <img className="our-purpose__image" src={ourPurpose} />
      <h2 className="our-purpose__title title-font title-font_regular title-font_size_small">Наша цель</h2>
      <p className="text-font text-font_regular text-font_size_big">Комплексное развитие уличной культуры и спорта. Популяризация уличных дисциплин. Создание положительного образа в информационном пространстве у дисциплин, которые считаются травмоопасными и агрессивными.</p>
    </section>
  );
}

export default OurPurpose;