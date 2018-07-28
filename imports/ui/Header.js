import React from 'react';
import PropTypes from 'prop-types';
import {Router, Route, browserHistory} from 'react-router';

export default class Header extends React.Component {


  render() {
    return (<div className='header'>
      <div className='header__content'>
        <div >
          <h3 className='header__title'>Climark  Weather Admin Dashboard</h3>
        </div>
      </div>
    </div>);
  }

}
