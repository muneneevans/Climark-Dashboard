import React from "react";
import {AdvisoryDroughtIndex} from './../../../api/advisorydraughtIndex';
//import {LastSevenDaysDI} from './../../../api/lastSevenDays';

//import PropTypes from 'prop-types';
//import TitleBar from './TitleBar';

//import {Tracker} from 'meteor/tracker';
//import { div } from "gl-matrix/src/gl-matrix/vec3";

export default class Advisory extends React.Component {
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
      Meteor.subscribe('advisoryDroughtIndex');
     // Meteor.subscribe('lastsevendaysdi');
     console.log(this.props.wardData.wardDetails.LOCATION_ID);
     const droughtIndex = AdvisoryDroughtIndex.find({locationId: this.props.wardData.wardDetails.LOCATION_ID}).fetch();
     // const pastDroughtIndex = LastSevenDays.find({ward: this.props.wardData.wardDetails.LOCATION_ID}).fetch();
    //   if (!!droughtIndex && !!pastDroughtIndex) {
    //     this.setState({droughtIndex: droughtIndex[0], pastDroughtIndex: pastDroughtIndex[0]});
    //     {ward: this.props.wardData.wardDetails.LOCATION_ID
    //     let pastSevenDaysDIArray = this.state.pastDroughtIndex;
    //     let forecastDI = parseFloat(forecastDIArray.draughtIndex);
    //     let pastSevenDaysDI = parseFloat(pastSevenDaysDIArray.draughtIndex);
    //     let deviation = forecastDI - pastSevenDaysDI;
    //     console.log(forecastDI);
    //     console.log(pastSevenDaysDI);
    //     console.log(deviation);
    //   }
    this.setState({droughtIndex: droughtIndex[0]});
    console.log(this.state.droughtIndex);
    
       console.log("thchbsjfbdbvsdvhjb")
       console.log("thchbsjfbdbvsdvhjb")
       console.log("thchbsjfbdbvsdvhjb")
       console.log(droughtIndex)
    })
  }

  //component will unmount is called when the component is unmounted
  componentWillUnmount() {
    console.log('Component will unmount Draught Index');
  //  this.droughtIndexTracker.stop();
  }

  ///render the rainfall distribution
  render() {
   
   return (

    <div>  AAdvisory</div>
   )

  };
}
