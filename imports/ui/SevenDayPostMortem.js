import React from 'react';
import PropTypes from 'prop-types';
import LastSevenDaysMoistureAvailability from './LastSevenDaysMoistureAvailability';
import LastSevenDaysRainfallDistribution from './LastSevenDaysRainfallDistribution';
import LastSevenDaysDroughtIndex from './LastSevenDaysDroughtIndex';

export default class SevenDayPostMortem extends React.Component {
  render() {
    return (<div>
      <h1>Last 7 Days Data</h1>
      <div className='item'>
        <LastSevenDaysMoistureAvailability/>
        <LastSevenDaysRainfallDistribution/>
        <LastSevenDaysDroughtIndex/>
      </div>
    </div>);
  }
}
