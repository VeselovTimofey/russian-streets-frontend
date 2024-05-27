import { useEffect } from 'react';
import styles from './styles.module.scss';
import { IDiscipline } from '../../utils/types';

const data = {
  images_url:
    'https://previews.123rf.com/images/nikitafedorov/nikitafedorov2005/nikitafedorov200500085/147983908-young-nice-woman-has-a-bike-ride-in-a-park-on-sunset-copy-space.jpg',
  name: 'zxc',
  description: 'gala plrgmkolp mhgbdpokg',
};

const Contents = () => {
  return (
    <div className={styles.section}>
      <>
        <div className={styles.image_block}>
          <img src={data.images_url} alt={data.name} />
        </div>
        <div className={styles.caption_block}>
          <h2>{data.name}</h2>
          <p>{data.description}</p>
        </div>
      </>
      ;
    </div>
  );
};

export default Contents;
