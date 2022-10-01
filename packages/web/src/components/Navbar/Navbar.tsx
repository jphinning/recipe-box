import React from 'react';
import { useTranslation } from 'react-i18next';
import useAuth from '../../hooks/useAuth';
import NavLink from '../UI/Navlink/NavLink';
import { NavBarButtons, NavbarStyles } from './NavBarStyles';
import logo from '../../assets/logo.svg';
import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

function Navbar() {
  const { token, signOut } = useAuth();
  const { t } = useTranslation();

  if (!token) {
    return (
      <NavbarStyles>
        <NavLink path={'/sign-up'}>
          <img height='50px' alt='logo' src={logo} />
        </NavLink>
        <NavLink path={'/sign-up'}>{t('SignUp.title')}</NavLink>
        <NavLink path={'/login'}>{t('SignIn.signIn')}</NavLink>
      </NavbarStyles>
    );
  }

  return (
    <NavbarStyles>
      <NavLink path={'/home'}>
        <img height='50px' alt='logo' src={logo} />
      </NavLink>
      <NavLink path='/home'>{t('Home.title')}</NavLink>
      <NavLink path='/dashboard'>{t('Dashboard.title')}</NavLink>
      <NavBarButtons>
        <IconButton aria-label='Logout' onClick={signOut}>
          <LogoutIcon />
        </IconButton>
      </NavBarButtons>
    </NavbarStyles>
  );
}

export default Navbar;
