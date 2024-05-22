import React, { FC, ReactNode } from 'react';
import { Link, useMatch } from 'react-router-dom';

type PropsType = {
  children?: ReactNode;
  to: string;
  props?: string[];
};
const CustomLink: FC<PropsType> = ({ children, to, ...props }) => {
  const match = useMatch({ path: to, end: true });

  return (
    <Link
      to={to}
      {...props}
      style={{
        color: 'white',
        borderBottom: match ? '1px solid white' : '',
      }}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
