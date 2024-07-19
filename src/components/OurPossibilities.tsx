import CallForRegistration from './elements/CallForRegistration.tsx';
import skateBoard from '../images/skateBoard.png';
import snowBoarder from '../images/snowBoarder.png';
import partners from '../images/partners.png';

function OurPossibilities() {
  return (
    <section className="our-possibilities">
      <CallForRegistration />
      <img className="our-possibilities__element" src={skateBoard} />
      <img className="our-possibilities__element" src={snowBoarder} />
      {/* Это нужно исправить */}
      <img className="our-possibilities__element" src={partners} />
    </section>
  );
}

export default OurPossibilities;