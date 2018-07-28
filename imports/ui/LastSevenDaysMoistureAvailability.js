import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar';
import {LastSevenDaysMA} from './../api/lastSevenDaysMA';
import {Tracker} from 'meteor/tracker';

export default class LastSevenDaysMoistureAvailability extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pastMoisture: []
    }
  }

  //mounting components
  componentDidMount() {
    console.log('Component mounted: Last 7 Days pastMoisture Availability');
    this.moisturePastTracker = Tracker.autorun(() => {
      Meteor.subscribe('lastsevendaysma');
      const pastMoisture = LastSevenDaysMA.find({Ward: "10333609"}).fetch();
      this.setState({pastMoisture: pastMoisture[0]});
      //console.log(this.state.pastMoisture);
    })
  }

  //component will unmount is called when the component is unmounted
  componentWillUnmount() {
    console.log('Component will unmount Seven Day Forecast');
    this.moisturePastTracker.stop();
  }

  ///render the rainfall distribution
  render() {

    let moisture = this.state.pastMoisture;
    console.log(moisture);
    //return
    if (moisture) {
      return (<div className='item__sub'>
        <div key={moisture._id}>
          <div>
            <h1>Moisture Availability:</h1>
            <h2>{moisture.Moisture}</h2>
          </div>
          <div>
            <h1>Implication:</h1>
            <h2>{moisture.Implication}</h2>
          </div>
          <div>
            <h1>Advisory:</h1>
            <h2>{moisture.Advisory}</h2>
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
