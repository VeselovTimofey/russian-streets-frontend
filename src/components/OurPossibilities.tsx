import CallForRegistration from './elements/CallForRegistration.tsx';
import OurPartners from './elements/OurPartners.tsx';
import skateBoard from '../images/skateBoard.png';
import snowBoarder from '../images/snowBoarder.png';
import { type IPartner } from '../utils/interface/aboutUsInterface';

type InputProps = {
  partners: IPartner[],
};

function OurPossibilities(props: InputProps) {
  return (
    <section className="our-possibilities">
      <CallForRegistration />
      <img className="our-possibilities__element" src={skateBoard} />
      <img className="our-possibilities__element" src={snowBoarder} />
      <OurPartners partners={props.partners} />
    </section>
  );
}

export default OurPossibilities;