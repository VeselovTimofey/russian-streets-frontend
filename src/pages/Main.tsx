import Intro from '../components/Intro.tsx';
import Agency from '../components/Agency.tsx';
import Members from '../components/Members.tsx';
import AboutUs from '../components/AboutUs.tsx';
import OurOffers from '../components/OurOffers.tsx';
import OurPossibilities from '../components/OurPossibilities.tsx';
import UpcomingEvents from '../components/UpcomingEvents.tsx';
import LastNews from '../components/LastNews.tsx';
import Disciplines from './Disciplines/Disciplines';
import { Provider } from 'react-redux';
import { setupStore } from '../service/store.ts';

const store = setupStore();

function Main() {
  return (
    <Provider store={store}>
      {' '}
      <main className='main'>
        <Intro />
        <Agency />
        <Disciplines />
        <Members />
        <AboutUs />
        <OurOffers />
        <OurPossibilities />
        <UpcomingEvents />
        <LastNews isSixNews={true} />
      </main>
    </Provider>
  );
}

export default Main;
