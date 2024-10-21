import { type IPartner } from '../../utils/interface/aboutUsInterface';

type InputProps = {
  partners: IPartner[],
};

function OurPartners(props: InputProps) {
  return (
    <section className="partners our-possibilities__element">
      <h2 className="partners__title title-font title-font_regular title-font_size_small">Наши партнеры</h2>
      {props.partners.map((partner) => {
        return (
          <img className="partners__image" src={partner.imageUrl} alt={partner.name} />
        );
      })}
    </section>
  );
}

export default OurPartners;