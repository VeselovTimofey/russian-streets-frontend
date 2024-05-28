import { ReactElement } from 'react';
import { TdisciplinesButtons } from '../../../service/utils/types';
import styles from './styles.module.scss';
import { findDiscipline } from '../../../service/actions/disciplineAction';
import { disciplines } from '../../../service/utils/constans';

const Navbar = () => {
  const handleClick = (name: string) => {
    findDiscipline(name);
  };

  return (
    <nav className={styles.nav}>
      <ul>
        {disciplines.map((item: TdisciplinesButtons): ReactElement => {
          return (
            <li
              className={styles.item}
              key={item.name}
              onClick={() => handleClick(item.name)}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
