import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar';
// import {AdvisoryRD} from './../api/advisoryRD';
import {LastSevenDaysRD} from './../api/lastSevenDaysRD'
import {Tracker} from 'meteor/tracker';

export default class RainfallDistributionForecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rainfall: [],
      pastRainfall: [],
      deviation: 0,
      deviationRule: ''
    }
  }

  //mounting components
  componentDidMount() {
    console.log('Component mounted: RainfallDistribution');
    console.log(this.props.locationId);

    let locationId = 'this.props.locationId';
    this.rainfallTracker = Tracker.autorun(() => {
      //subscribing to the forecasted rainfall distribution
      Meteor.subscribe('nextsevendaysrd');
      const rain = AdvisoryRD.find({Ward: this.props.locationId}).fetch();

      //subscribing to past rainfall Distribution
      Meteor.subscribe('lastsevendaysrd');
      const pastRain = LastSevenDaysRD.find({Ward: this.props.locationId}).fetch();
      if (!!rain && !!pastRain) {
        this.setState({rainfall: rain[0], pastRainfall: pastRain[0]});
        // console.log('Next 7 Days: '+rain[0]+' Past 7 days: ' + pastRain[0]);
        let rainForecastArray = this.state.rainfall;
        let pastSevenDaysRainArray = this.state.pastRainfall;
        let rainForecast = parseFloat(rainForecastArray.rainfallDistribution);
        let pastSevenDaysRain = parseFloat(pastSevenDaysRainArray.rainfallDistribution);

        let deviation = rainForecast - pastSevenDaysRain;
        console.log(rainForecast);
        console.log(pastSevenDaysRain);
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
    this.rainfallTracker.stop();
  }

  ///render the rainfall distribution
  render() {

    if (this.state.rainfall && this.state.pastRainfall) {
      let rain = this.state.rainfall;
      let pastSevenDaysRain = this.state.pastRainfall;
      let dev = this.state.deviation;
      let devRule = this.state.deviationRule;
      console.log('PastRain:' + pastSevenDaysRain.rainfallDistribution);
      console.log('Deviation:' + dev);
      console.log('Deviation Rule:' + devRule);

      return (<div className='item__sub'>
        <div key={rain._id}>
          <div>
            <h1 className='item__title'>Rainfall Distribution
            </h1>
          </div>
          <div className='item__line'>
            <h1>Last 7 Days (mm)</h1>
            <p>{pastSevenDaysRain.rainfallDistribution}
            </p>
          </div>
          <div className='item__line'>
            <h1>Next 7 Days (mm)</h1>
            <p>{rain.rainfallDistribution}
            </p>
          </div>

          <div className='item__line'>
            <h1>Observation:</h1>
            <p>{devRule}
            </p>
          </div>
          <div className='item__line'>
            <h1>Rainfall Class:</h1>
            <p>{rain.Implication}</p>
          </div>
          <div className='item__advisory'>
            <h1>Current Status</h1>
            <p>
              1. {pastSevenDaysRain.AdvisoryA}</p>
            <p>
              2. {pastSevenDaysRain.AdvisoryB}</p>
          </div>
          <div className='item__advisory'>
            <h1>Next 7 Days Advisory:</h1>
            <p>1.{rain.AdvisoryA}</p>
            <p>2.{rain.AdvisoryB}</p>
          </div>
        </div>
      </div>);

    } else {
      return (<div className='item__sub'>
        <p>Loading Rainfall Distribution</p>
      </div>)
    }

  }
}
