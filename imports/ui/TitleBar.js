import React from 'react';
import PropTypes from 'prop-types';
import {Router, Route, browserHistory} from 'react-router';

export default class TitleBar extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    browserHistory.push("/login");
    }

  render() {
    return (<div className='header'>
      <div className='header__content'>
        <div >
          <h3 className='header__title'>{this.props.title}</h3>
        </div>
        {/* <div>
          <button className='button' onClick={this.handleClick}>Admin</button>
        </div> */}
      </div>
    </div>);
  }

}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired
};
