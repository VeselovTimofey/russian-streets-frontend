import CallForRegistration from "./elements/CallForRegistration";
import skateBoard from "../images/skateBoard.png";
import snowBoarder from "../images/snowBoarder.png";

function OurPossibilities() {
  return (
    <section className="our-possibilities">
      <CallForRegistration />
      <img src={skateBoard} />
      <img src={snowBoarder} />
    </section>
  );
}

export default OurPossibilities;