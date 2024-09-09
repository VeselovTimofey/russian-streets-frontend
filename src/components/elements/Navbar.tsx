import { ReactElement } from 'react';
import { type IDisciplinesButtons } from '../../utils/interface/disciplineInterface';
//import { FindDiscipline } from '../../service/actions/disciplineAction';
import { disciplines } from '../../utils/constans/disciplinesPathConstant';

function Navbar() {
  /* function handleClick(name: string) {
    FindDiscipline(name);
  } */

  return (
    <ul className="disciplines__list">
      {disciplines.map((item: IDisciplinesButtons): ReactElement => {
        return (
          <li
            className="disciplines__element text-font text-font_regular text-font_size_big"
            key={item.name}
            //onClick={() => handleClick(item.name)}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
}

export default Navbar;
