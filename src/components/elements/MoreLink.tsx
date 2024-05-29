import { Link } from 'react-router-dom';

type InputProps = {
  to: string;
}

function MoreLink(props: InputProps) {
  return(
    <Link className="more-link text-font text-font_regular text-font_size_big" to="/">Подробнее&nbsp;&#707;</Link>
  );
}

export default MoreLink;