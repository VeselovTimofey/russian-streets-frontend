import { ReactElement } from 'react';
import { TdisciplinesButtons } from '../../utils/types';
import CustomLink from './CastomLink';
import styles from './styles.module.scss';
import { findDiscipline } from '../../service/actions/disciplineAction';
import { disciplines } from '../../utils/constans';

const Navbar = () => {
  const handleClick = (name: string) => {
    findDiscipline(name);
  };

  return (
    <nav className={styles.nav}>
      <ul>
        {disciplines.map((item: TdisciplinesButtons): ReactElement => {
          return (
            <li className={styles.item} key={item.name}>
              <CustomLink to='{item.to}' onclick={handleClick(item.name)}>
                {item.name}
              </CustomLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
