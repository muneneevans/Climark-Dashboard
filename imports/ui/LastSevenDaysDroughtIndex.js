import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar';
import {LastSevenDaysDI} from './../api/lastSevenDaysDI';
import {Tracker} from 'meteor/tracker';

export default class LastSevenDaysDroughtIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pastDroughtIndex: []
    }
  }

  //mounting components
  componentDidMount() {
    console.log('Component mounted: Last 7 Days pastrainfall Availability');
    this.pastDroughtIndexTracker = Tracker.autorun(() => {
      Meteor.subscribe('lastsevendaysdi');
      const pastDroughtIndex= LastSevenDaysDI.find({ward: "10333609"}).fetch();
      this.setState({pastDroughtIndex: pastDroughtIndex[0]});
      //console.log(this.state.pastDroughtIndex);
    })
  }

  //component will unmount is called when the component is unmounted
  componentWillUnmount() {
    console.log('Component will unmount Seven Day Forecast');
    this.pastDroughtIndexTracker.stop();
  }

  ///render the rainfall distribution
  render() {

    let di = this.state.pastDroughtIndex;
    console.log(di);

    //return
    if (di) {
      return (<div className='item__sub'>
        <div key={di._id}>
          <div>
            <h1>Drought Index</h1>
            <h2>{di.draughtIndex}</h2>
          </div>
          <div>
            <h1>Implication:</h1>
            <h2>{di.implication}</h2>
          </div>
          <div>
            <h1>Advisory:</h1>
            <h2>{di.advisoryA}</h2>
          </div>
        </div>
      </div>);
    } else {
      return (<div className='item__sub'>
        <p>Loading drought index</p>
      </div>)
    }

  };
}
