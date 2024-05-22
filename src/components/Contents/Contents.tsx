import styles from './styles.module.scss';

const title = '123';
const Contents = () => {
  return (
    <div className={styles.section}>
      <div className={styles.image_block}>123</div>
      <div className={styles.caption_block}>
        <h2>{title}</h2>
        <p></p>
      </div>
    </div>
  );
};

export default Contents;
