import { useAppSelector } from '../../service/hooks/hooks';
import styles from './styles.module.scss';

const Contents = () => {
  //const { name, description, images_url } = useAppSelector(
  //  (store) => store.discipline.discipline
  //);
  const item = {
    name: 'Skateboarding',
    images_url: '../../images/Image.png',
    description:
      'Скейтбординг (англ. skateboarding) — экстремальный вид спорта, связанный с катанием, преодолением препятствий и акробатическими трюками на доске с роликами. Скейтбординг привлекает не только молодёжь, но и людей среднего возраста. Это можно объяснить его зрелищностью и доступностью. Как вид спорта скейтборд популярен давно, но международным спортивным комитетом он признан относительно недавно и стал официальным видом спорта.',
  };

  return (
    <div className={styles.section}>
      <div className={styles.image_block}>
        <img src={item.images_url} alt={item.name} />
      </div>
      <div className={styles.caption_block}>
        <div className={styles.wrapper}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Contents;
