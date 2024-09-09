import { Link } from 'react-router-dom';

import eventsJson from '../utils/json/newEvents.json';
import EventCard from './elements/EventCard.tsx';
import { BUTTON_CLASS } from '../utils/constans/buttonConstans';

function UpcomingEvents() {
  const events = JSON.parse(JSON.stringify(eventsJson));
  return (
    <article className="upcoming-events">
      <h1 className="title-font title-font_regular title-font_size_medium">Ближайшие события</h1>
      <Link className={BUTTON_CLASS.button_hollow_size_small + ' upcoming-events__link'} to="/">Смотреть всё</Link>
      <div className="upcoming-events__cards">
        {Object.keys(events).map((keyName) => (
          <EventCard
            id={events[keyName].id}
            name={events[keyName].name}
            description={events[keyName].description}
            image_url={events[keyName].image_url}
            start_date={events[keyName].start_date}
            place={events[keyName].place}
          />
        ))}
      </div>
    </article>
  );
}

export default UpcomingEvents;