import OurPurpose from './elements/OurPurpose.tsx';
import OurValuesandMission from './elements/OurValuesandMission.tsx';

function AboutUs() {
  return (
    <section className="about-us section section_flex">
      <h1 className="about-us__title title-font title-font_regular title-font_size_medium">О нас</h1>
      <OurPurpose />
      <OurValuesandMission />
      <p className="about-us__concept text-font text-font_regular text-font_size_large">Мы открываем мир улиц для общества и объединяем людей из разных городов и стран</p>
      <div className="about-us__borderline" />
    </section>
  );
}

export default AboutUs;