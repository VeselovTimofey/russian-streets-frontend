import Intro from './Intro.tsx';
import Map from './Agency.tsx';
import Members from './Members.tsx';
import AboutUs from './AboutUs.tsx';

function Main() {
  return (
    <main className="main">
      <Intro />
      <Map />
      <Members />
      <AboutUs />
    </main>
  );
}

export default Main;