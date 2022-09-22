import React from 'react';
import { useTranslation } from 'react-i18next';
import NavLink from '../UI/navlink/NavLink';
import { NavbarStyles } from './NavBarStyles';

function Navbar() {
  const { t } = useTranslation();

  return (
    <NavbarStyles>
      <NavLink path='/'>{t('Home.title')}</NavLink>
      <NavLink path='/dashboard'>{t('Dashboard.title')}</NavLink>
    </NavbarStyles>
  );
}

export default Navbar;
