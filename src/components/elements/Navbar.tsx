import { ReactElement } from 'react';
import { TdisciplinesButtons } from '../../service/utils/types';
import { useFindDiscipline } from '../../service/actions/disciplineAction';
import { disciplines } from '../../service/utils/constant';

function Navbar() {
  function useHandleClick(name: string) {
    useFindDiscipline(name);
  }

  return (
    <ul className="disciplines__list">
      {disciplines.map((item: TdisciplinesButtons): ReactElement => {
        return (
          <li
            className="disciplines__element text-font text-font_regular text-font_size_big"
            key={item.name}
            onClick={() => useHandleClick(item.name)}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
}

export default Navbar;
