import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar';
import RainfallDistributionForecast from './RainfallDistributionForecast';
import DroughtIndexForecast from './DraughtIndexForecast';
import MoistureAvailabilityForecast from './MoistureAvailabilityForecast';
import ForecastMap from './ForecastMap';

export default class SevenDayForeCast extends React.Component {
  constructor(props) {
    super(props);
  }
  //mounting components
  componentDidMount() {
    console.log('Component did mount even Day Forecast');

  }

  //component will unmount is called when the component is unmounted
  componentWillUnmount() {
    console.log('Component will unmount Seven Day Forecast');
  }


  render() {

    console.log(this.props.locationid)
    const locationId=this.props.locationid;
    if (locationId) {
      return (<div className='item__container'>
        <h1 className='item__title'>Weather Advisory</h1>
        <div className='item'>
          <RainfallDistributionForecast locationId={locationId}/>
          <MoistureAvailabilityForecast locationId={locationId}/>
          <DroughtIndexForecast locationId={locationId}/>
        </div>
      </div>);
    } else {
      return (<div>
        <p>This is a placeholder for about climark</p>
      </div>);
    }

  };
}
