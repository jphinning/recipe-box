import React from 'react';
import { NavLinkStyles } from './NavLinkStyles';

type IProps = {
  path: string;
  children: JSX.Element | string;
};

function NavLink({ path, children }: IProps) {
  return (
    <NavLinkStyles to={path}>
      <span>{children}</span>
    </NavLinkStyles>
  );
}

export default NavLink;
