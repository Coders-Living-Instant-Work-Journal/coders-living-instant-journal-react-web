import React from 'react';
import { connect } from 'react-redux';

import ToggleButton from '../SideDrawer/ToggleButton';
import './MainHeader.scss';

//Tool bar images
import logo from '../../assets/logo.png';
import { GoGear } from 'react-icons/go';

const mapStateToProps = (state) => {
  return {
    journals: state.journals,
  };
};

const MainHeader = (props) => (
  <header className='toolbar'>
    <nav className='toolbar_navigation'>
      <div>
        <ToggleButton click={props.drawerClickHandler} />
      </div>
      <div className='spacer' />
      <div className='toolbar_logo'>
        {' '}
        <a href='/'>
          <img className='logo' src={logo} alt='Logo' />
        </a>
      </div>
      <div className='spacer' />
      <div className='settingsMenu'>
        <GoGear className='gear' />
      </div>
    </nav>
  </header>
);

export default connect(mapStateToProps)(MainHeader);
