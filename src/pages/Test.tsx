import { useEffect } from 'react';
import { useDispatch } from 'react-redux'; 

import { AppDispatch } from '../service/types';
import { disciplinesNames, disciplineContent } from '../service/actions/disciplineAction';
import { useAppSelector } from '../service/hooks/hooks';
import { DEFAULT_DISCIPLINE } from '../utils/constans/default-discipline-constans';

function Test() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(disciplinesNames());
  }, [dispatch]);

  const disciplines = useAppSelector(
    state => state.discipline.disciplines,
  );
  const { name, description, imagesUrl, rules } = useAppSelector(
    state => state.discipline.currentDiscipline,
  );

  const onDisciplinesChange: React.MouseEventHandler<HTMLButtonElement> = (e) => dispatch(disciplineContent(disciplines.find(discipline => discipline.name === (e.target as HTMLButtonElement).name) || DEFAULT_DISCIPLINE));

  return (
    <main className='main'>
      <section className='section section_flex-column'>
      <h2>Дисциплины</h2>
        <section className="disciplines__list">
          {disciplines.map(discipline => (
            <button onClick={onDisciplinesChange} name={discipline.name}>{discipline.name}</button>
          ))}
        </section>
        <section className="disciplines__list">
          {imagesUrl.map(imageUrl => (
            <img src={imageUrl} style={{ height: '100px', width: '100px' }} />
          ))}
          <p>{name}</p>
          <p>{description}</p>
          <p>{rules}</p>
        </section>
      </section>
    </main>
  );
}

export default Test;