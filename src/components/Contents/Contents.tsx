import styles from './styles.module.scss';
import { IDiscipline } from '../../utils/types';
import { useAppSelector } from '../../service/hooks/hooks';

const data = {
  images_url:
    'https://previews.123rf.com/images/nikitafedorov/nikitafedorov2005/nikitafedorov200500085/147983908-young-nice-woman-has-a-bike-ride-in-a-park-on-sunset-copy-space.jpg',
  name: 'zxc',
  description: 'gala plrgmkolp mhgbdpokg',
};
const { name, description, images_url } = useAppSelector(
  (state) => state.discipline.discipline
);
const Contents = () => {
  return (
    <div className={styles.section}>
      <>
        <div className={styles.image_block}>
          <img src={images_url[0]} alt={name} />
        </div>
        <div className={styles.caption_block}>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </>
      ;
    </div>
  );
};

export default Contents;
