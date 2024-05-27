import Intro from './Intro.tsx';
import Agency from './Agency.tsx';
import Members from './Members.tsx';
import AboutUs from './AboutUs.tsx';
import OurOffers from './OurOffers.tsx';

function Main() {
  return (
    <main className="main">
      <Intro />
      <Agency />
      <Members />
      <AboutUs />
      <OurOffers />
    </main>
  );
}

export default Main;