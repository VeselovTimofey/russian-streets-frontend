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
        color: match ? 'red' : '#222222',
      }}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
