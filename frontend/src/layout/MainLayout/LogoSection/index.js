import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonBase } from '@mui/material';
import config from 'config';
import { MENU_OPEN } from 'store/actions';

// Import your image file
import logoImage from '../../../assets/images/eventHUB.png'

const LogoSection = () => {
  const defaultId = useSelector((state) => state.customization.defaultId);
  const dispatch = useDispatch();

  return (
    <ButtonBase disableRipple onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })} component={Link} to={config.defaultPath} >
      <img src={logoImage} alt="Logo" style={{ maxWidth: '90%', height: '12vh',marginLeft:'10vh                              '}} />
    </ButtonBase>
  );
};

export default LogoSection;
