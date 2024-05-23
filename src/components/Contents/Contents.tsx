import styles from './styles.module.scss';

const Contents = ({ data }: propsType[]) => {
  return (
    <div className={styles.section}>
      {data.map((item, id) => {
        <>
          <div className={styles.image_block}></div>
          <div className={styles.caption_block}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </>;
      })}
    </div>
  );
};

export default Contents;
