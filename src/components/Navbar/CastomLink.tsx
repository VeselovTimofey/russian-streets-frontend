import React, { FC, ReactNode } from 'react';
import { Link, useMatch } from 'react-router-dom';

type PropsType = {
  children?: ReactNode;
  to: string;
  onclick: () => void;
  props?: string[];
};
const CustomLink: FC<PropsType> = ({ children, to, onclick, ...props }) => {
  const match = useMatch({ path: to, end: true });

  return (
    <Link
      to={to}
      onClick={onclick}
      {...props}
      style={{
        color: match ? 'white' : '#8585AD',
      }}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
