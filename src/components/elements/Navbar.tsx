import { ReactElement } from 'react';
import { TdisciplinesButtons } from '../../service/utils/types';
import { findDiscipline } from '../../service/actions/disciplineAction';
import { disciplines } from '../../service/utils/constant';

function Navbar() {
  function handleClick(name: string) {
    findDiscipline(name);
  };

  return (
    <ul className="disciplines__list">
      {disciplines.map((item: TdisciplinesButtons): ReactElement => {
        return (
          <li
            className="disciplines__element text-font text-font_regular text-font_size_big"
            key={item.name}
            onClick={() => handleClick(item.name)}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
