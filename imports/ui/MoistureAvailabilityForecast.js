import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar';
import {AdvisoryMA} from './../api/advisoryMA';
import {LastSevenDaysMA} from './../api/lastSevenDaysMA';
import {Tracker} from 'meteor/tracker';

export default class MoistureAvailabilityForecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moisture: {},
      pastMoisture: {},
      deviation: 0,
      deviationRule: ''
    }
  }

  //mounting components
  componentDidMount() {
    console.log('Component mounted: Moisture Availability');
    this.moistureTracker = Tracker.autorun(() => {
      Meteor.subscribe('sevenDayForecastMoistureAvailability');
      const moisture = AdvisoryMA.find({Ward:this.props.locationId}).fetch();
      Meteor.subscribe('lastsevendaysma');
      const pastMoist = LastSevenDaysMA.find({Ward:this.props.locationId}).fetch();
      console.log('Seven Days Forecast:' + moisture);
      console.log('Last Seven Days Data:' + pastMoist);

      //implementing the logic for calculating the deviationRule
      if (moisture && pastMoist) {
        this.setState({moisture: moisture[0], pastMoisture: pastMoist[0]});
        let moistureForecastArray = this.state.moisture;
        let pastSevenDaysMoistureArray = this.state.pastMoisture;
        let moistureForecast = parseFloat(moistureForecastArray.Moisture).toFixed(2);
        let pastSevenDaysMoisture = parseFloat(pastSevenDaysMoistureArray.Moisture).toFixed(2);

        let deviation = moistureForecast - pastSevenDaysMoisture;
        console.log(moistureForecastArray);
        console.log(pastSevenDaysMoistureArray);
        console.log(deviation);
        if (deviation < 0) {
          let deviationRule = 'There will be Decrease in Rainfall';
          this.setState({deviation: deviation, deviationRule: deviationRule})
          // console.log(deviationRule);
        } else if (deviation > 0) {
          let deviationRule = 'There will be Increase in Rainfall';
          this.setState({deviation: deviation, deviationRule: deviationRule})
          // console.log(deviationRule);
        } else if (deviation == 0) {
          let deviationRule = 'There will be no change in Rainfall';
          this.setState({deviation: deviation, deviationRule: deviationRule})
          // console.log(deviationRule);
        }
      }
    })
  }

  //component will unmount is called when the component is unmounted
  componentWillUnmount() {
    console.log('Component will unmount Seven Day Forecast');
    this.moistureTracker.stop();
  }

  ///render the rainfall distribution
  render() {

    //return
    if (this.state.moisture && this.state.pastMoisture) {
      let moisture = this.state.moisture;
      let pastMoisture = this.state.pastMoisture;
      let dev = this.state.deviation;
      let devRule = this.state.deviationRule;

      console.log('Moisture:' + moisture);
      console.log('Moisture Past 7 Days:' + pastMoisture)
      return (<div className='item__sub'>
        <div key={moisture._id}>
          <div>
            <h1 className='item__title'>Moisture Availability Index</h1>
          </div>
          <div className='item__line'>
            <h1>
              Last 7 Days</h1>
            <p>{parseFloat(pastMoisture.Moisture).toFixed(2)}</p>
          </div>
          <div className='item__line'>
            <h1>
              Next 7 Days</h1>
            <p>{parseFloat(moisture.Moisture).toFixed(2)}</p>
          </div>
          <div className='item__line'>
            <h1>Observation:</h1>
            <p>{devRule}</p>
          </div>
          <div className='item__line'>
            <h1>Drought Class:</h1>
            <p>{moisture.Implication}</p>
          </div>
          <div className='item__advisory'>
            <h1>Current Status:</h1>
            <p>1. {pastMoisture.Advisory}</p>
            <p>2. {pastMoisture.AdvisoryB}</p>
          </div>
          <div className='item__advisory'>
            <h1>Next 7 Days Advisory:</h1>
            <p>1. {moisture.AdvisoryA}</p>
            <p>2. {moisture.AdvisoryB}</p>
          </div>
        </div>
      </div>);
    } else {
      return (<div className='item__sub'>
        <p>Loading Moisture Availability</p>
      </div>)
    }

  };
}
