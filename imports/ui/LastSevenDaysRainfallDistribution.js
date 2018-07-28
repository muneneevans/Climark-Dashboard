import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar';
import {LastSevenDaysRD} from './../api/lastSevenDaysRD';
import {Tracker} from 'meteor/tracker';

export default class LastSevenDaysRainfallDistribution extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pastRainfall: []
    }
  }

  //mounting components
  componentDidMount() {
    console.log('Component mounted: Last 7 Days pastrainfall Availability');
    this.rainfallPastTracker = Tracker.autorun(() => {
      Meteor.subscribe('lastsevendaysrd');
      const pastRainfall= LastSevenDaysRD.find({Ward: "10333609"}).fetch();
      this.setState({pastRainfall: pastRainfall[0]});
      console.log(this.state.pastRainfall);
    })
  }

  //component will unmount is called when the component is unmounted
  componentWillUnmount() {
    console.log('Component will unmount Seven Day Forecast');
    this.rainfallPastTracker.stop();
  }

  ///render the rainfall distribution
  render() {

    let rainfall = this.state.pastRainfall;

    //return
    if (rainfall) {
      return (<div className='item__sub'>
        <div key={rainfall._id}>
          <div>
            <h1>Rainfall Distribution:</h1>
            <h2>{rainfall.rainfallDistribution}</h2>
          </div>
          <div>
            <h1>Implication:</h1>
            <h2>{rainfall.Implication}</h2>
          </div>
          <div>
            <h1>Advisory:</h1>
            <h2>{rainfall.AdvisoryA}</h2>
          </div>
        </div>
      </div>);
    } else {
      return (<div className='item__sub'>
        <p>Loading rainfall Availability</p>
      </div>)
    }

  };
}
