import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar';
import {AdvisoryDroughtIndex} from './../api/advisorydraughtIndex';
import {LastSevenDaysDI} from './../api/lastSevenDaysDI';
import {Tracker} from 'meteor/tracker';

export default class DroughtIndexForecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      droughtIndex: [],
      pastDroughtIndex: [],
      deviation: 0,
      devRule: ''
    }
  }

  //mounting components
  componentDidMount() {
    console.log('Component mounted: Draught Index');
    this.droughtIndexTracker = Tracker.autorun(() => {
      Meteor.subscribe('sevenDayForecastDroughtIndex');
      Meteor.subscribe('lastsevendaysdi');
      const droughtIndex = AdvisoryDroughtIndex.find({ward: this.props.locationId}).fetch();
      const pastDroughtIndex = LastSevenDaysDI.find({ward: this.props.locationId}).fetch();
      if (!!droughtIndex && !!pastDroughtIndex) {
        this.setState({droughtIndex: droughtIndex[0], pastDroughtIndex: pastDroughtIndex[0]});
        let forecastDIArray = this.state.droughtIndex;
        let pastSevenDaysDIArray = this.state.pastDroughtIndex;
        let forecastDI = parseFloat(forecastDIArray.draughtIndex);
        let pastSevenDaysDI = parseFloat(pastSevenDaysDIArray.draughtIndex);
        let deviation = forecastDI - pastSevenDaysDI;
        console.log(forecastDI);
        console.log(pastSevenDaysDI);
        console.log(deviation);
      }

    })
  }

  //component will unmount is called when the component is unmounted
  componentWillUnmount() {
    console.log('Component will unmount Draught Index');
    this.droughtIndexTracker.stop();
  }

  ///render the rainfall distribution
  render() {
    let di = this.state.droughtIndex;
    let LastSevenDaysDI = this.state.pastDroughtIndex;
    console.log(di);
    console.log(LastSevenDaysDI);
    //return
    if (di && LastSevenDaysDI) {
      return (<div className='item__sub'>
        <div key={di._id}>
          <div>
            <h1 className='item__title'>Drought Index</h1>
          </div>
          <div className='item__line'>
            <h1>
              Last 7 Days (%):</h1>
            <p>{parseFloat(LastSevenDaysDI.draughtIndex).toFixed(2)}</p>
          </div>
          <div className='item__line'>
            <h1>
              Next 7 Days (%):</h1>
            <p>{parseFloat(di.draughtIndex).toFixed(2)}</p>
          </div>
          <div className='item__line'>
            <h1>Drought Class:</h1>
            <p>{di.implication}</p>
          </div>
          <div className='item__advisory'>
            <h1>Current Status:</h1>
            <p>1. {LastSevenDaysDI.advisoryA}</p>
            <p>2. {LastSevenDaysDI.advisoryB}</p>
            <p>3. {LastSevenDaysDI.advisoryC}</p>
            <p>4. {LastSevenDaysDI.advisoryD}</p>
          </div>
          <div className='item__advisory'>
            <h1>Next 7 Days Advisory:</h1>
            <p>1. {di.advisoryA}</p>
            <p>2. {di.advisoryB}</p>
            <p>3. {di.advisoryC}</p>
            <p>4. {di.advisoryD}</p>

          </div>
        </div>
      </div>);
    } else {
      return (<div className='item__sub'>
        <p>Loading Draught Index</p>
      </div>)
    }

  };
}
