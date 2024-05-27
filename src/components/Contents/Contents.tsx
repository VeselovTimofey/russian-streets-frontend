import { useAppSelector } from '../../service/hooks/hooks';
import styles from './styles.module.scss';

const Contents = () => {
  const { name, description, images_url } = useAppSelector(
    (state) => state.discipline.discipline
  );
  return (
    <div className={styles.section}>
      <div className={styles.image_block}>
        <img src={images_url[0]} alt={name} />
      </div>
      <div className={styles.caption_block}>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Contents;
