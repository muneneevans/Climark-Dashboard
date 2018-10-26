import React from "react";
import { AdvisoryDroughtIndex } from "./../../../api/advisorydroughtIndex";

import { isUndefined } from "../../../lib/utils";

import { Container, Grid, Dimmer, Loader } from "semantic-ui-react";
import "./style.css";
import { AdvisoryMA } from "./../../../api/advisoryMA";
import { pastMoistureCondition } from "./../../../api/pastMoistureCondition";
import { pastRainfallCondition } from "./../../../api/pastRainfallCondition";
import { Tracker } from "meteor/tracker";
import moment from "moment";

// function weekToDate(week) {
//  var dt = new Date();
//  var date = moment().day("Monday").year("2018").week(week);
//  console.log(date)

//  return date.toString();
// }
function startDate(week, noofdays) {
  var date = moment().day("Monday").year("2018").week(week);
  dates = moment(date).subtract(noofdays, "days").format("DD-MM-YYYY");
  return dates;
}

export default class Advisory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moistureAvailability: [],
      pastDroughtIndex: [],
      droughtIndex: [],
      pastMoisture: [],
      pastRainfall: [],
      deviation: 0,
      devRule: ""
    };
  }

  //mounting components
  componentDidMount() {
    console.log("Component mounted: Draught Index");
    this.droughtIndexTracker = Tracker.autorun(() => {
      Meteor.subscribe("pastRainfallCondition");
      Meteor.subscribe("advisoryMA");
      Meteor.subscribe("pastMoistureCondition");
      Meteor.subscribe("advisoryDroughtIndex");

      console.log(this.props.wardData.wardDetails.LOCATION_ID);
      const pastRainfall = pastRainfallCondition
        .find({
          locationId: String(this.props.wardData.wardDetails.LOCATION_ID)
        })
        .fetch();
      const droughtIndex = AdvisoryDroughtIndex.find({
        locationId: String(this.props.wardData.wardDetails.LOCATION_ID)
      }).fetch();
      const moistureAvailability = AdvisoryMA.find({
        locationId: String(this.props.wardData.wardDetails.LOCATION_ID)
      }).fetch();
      const pastMoisture = pastMoistureCondition
        .find({
          locationId: String(this.props.wardData.wardDetails.LOCATION_ID)
        })
        .fetch();

      this.setState({
        droughtIndex: droughtIndex[0],
        pastMoisture: pastMoisture[0],
        pastRainfall: pastRainfall[0],
        moistureAvailability: moistureAvailability[0]
      });

      console.log("MoistureAvailability");
      console.log(moistureAvailability);
      console.log("past moisture condition");
      console.log(pastMoisture);
      console.log("drought index");
      // console.log(droughtIndex[0].locationId);
      // console.log(droughtIndex[0].advisoryA);
      console.log(droughtIndex);
      console.log("past Rainfall condition");
      console.log(pastRainfall);
      console.log(this.state.droughtIndex.advisoryA);
      console.log(this.state.pastRainfall.advisoryA);
      console.log(this.state.pastMoisture.advisoryA);
    });
  }

  //component will unmount is called when the component is unmounted
  componentWillUnmount() {
    console.log("Component will unmount Draught Index");
    console.log("hasvfvasjfvasfvasv");
    this.droughtIndexTracker.stop();
  }

  ///render the rainfall distribution
  render() {
    return (
      <Container>
        {isUndefined(this.state.droughtIndex) ? (
          <Dimmer active>
            <Loader size="huge">Loading Advisories</Loader>
          </Dimmer>
        ) : (
          <Grid columns={2} stackable divided>
            <Grid.Row>
              <Grid.Column>
                <div className="advisoryDisplayCard">
                  <div className="AdvisoryHeader">
                    {" "}
                    Current Moisture Condictions
                   
                  </div>
                  <span> Based on data from the last 30 days starting from {startDate(this.state.pastMoisture.week , 30)} to {startDate(this.state.pastMoisture.week , 0)}</span>
                  <div className="item advisoryItem implication">
                    {this.state.pastMoisture.implication}
                  </div>
                  <div className="notesHeader"  font-weight="bold"> Advisory Notes </div>
                  {/* <div className="ui bulleted list">
                    <div className="item advisoryItem">
                      {this.state.pastMoisture.advisoryA}
                    </div>
                    <div className="item advisoryItem">
                      {this.state.pastMoisture.advisoryB}
                    </div>
                  </div> */}
                 
                  <ol class="ui list">
                    <li className="item advisoryItem" value=""> <i class="lightbulb icon"></i> {this.state.pastMoisture.advisoryA}</li>
                    <li className="item advisoryItem" value=""> <i class="lightbulb icon"></i>{this.state.pastMoisture.advisoryB}</li>
                    
                  </ol>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="advisoryDisplayCard">
                  <div className="AdvisoryHeader">
                    Current Rainfall Distribution
                  </div>
                  <span> Based on data from the last 30 days from {startDate(this.state.pastRainfall.week ,30)} to {startDate(this.state.pastRainfall.week ,0)}</span>
                  <div className="item advisoryItem implication">
                    {this.state.pastRainfall.implication}
                  </div>
                  <div className="notesHeader"> Advisory Notes </div>
                  {/* <div className="ui bulleted list">
                    <div className="item advisoryItem">
                      {this.state.pastRainfall.advisoryA}
                    </div>
                    <div className="item advisoryItem">
                      {this.state.pastRainfall.advisoryB}
                    </div>
                    <div className="item advisoryItem">
                      {this.state.pastRainfall.advisoryC}
                    </div>
                  </div> */}
                  <ol class="ui list">
                    <li className="item advisoryItem" value=""><i class="lightbulb icon"></i>{this.state.pastRainfall.advisoryA}</li>
                    <li className="item advisoryItem" value="">{this.state.pastRainfall.advisoryB}</li>
                    <li className="item advisoryItem" value=""><i class="lightbulb icon"></i>{this.state.pastRainfall.advisoryC}</li>
                    
                  </ol>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <div className="advisoryDisplayCard">
                  <div className="AdvisoryHeader">
                    {" "}
                    Expected Drought Conditions
                  </div>
                  <span> Based on forecasted data for the next  7 days days from {startDate(this.state.droughtIndex.week, 0)} to {startDate(this.state.droughtIndex.week, -6)} </span>
                  <div className="item advisoryItem implication ">
                    {this.state.droughtIndex.implication}
                  </div>
                  <div className="notesHeader"> Advisory Notes </div>
                  {/* <div className="ui bulleted list">
                    <div className="item advisoryItem">
                      {this.state.droughtIndex.advisoryA}
                    </div>
                    <div className="item advisoryItem">
                      {this.state.droughtIndex.advisoryB}
                    </div>
                    <div className="item advisoryItem">
                      {this.state.droughtIndex.advisoryC}
                    </div>
                    <div className="item advisoryItem">
                      {this.state.droughtIndex.advisoryD}
                    </div>
                  </div> */}
                  <ol class="ui list">
                    <li className="item advisoryItem" value=""><i class="lightbulb icon"></i>{this.state.droughtIndex.advisoryA}</li>
                    <li className="item advisoryItem" value=""><i class="lightbulb icon"></i>{this.state.droughtIndex.advisoryB}</li>
                    <li className="item advisoryItem" value=""><i class="lightbulb icon"></i>{this.state.droughtIndex.advisoryC}</li>
                    <li className="item advisoryItem" value=""><i class="lightbulb icon"></i>{this.state.droughtIndex.advisoryD}</li>
                    
                  </ol>

                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="advisoryDisplayCard">
                  <div className="AdvisoryHeader">
                    Expected Moisture Conditions
                  </div>
                  <span> Based on forecasted data for the next  7 days days from {startDate(this.state.moistureAvailability.week, 0)} to {startDate(this.state.moistureAvailability.week, -6)} </span>
                  <div className="item advisoryItem implication">
                    {this.state.moistureAvailability.implication}
                    
                  </div>
                 
                  <div className="notesHeader"> Advisory Notes </div>
                  {/* <div className="ui bulleted list">
                    <div className="item advisoryItem">
                      {this.state.moistureAvailability.advisoryA}
                    </div>
                    <div className="item advisoryItem">
                      {this.state.moistureAvailability.advisoryB}
                    </div>
                  </div> */}
                  <ol class="ui list">
                    <li className="item advisoryItem"  value=""><i class="lightbulb icon"></i>{this.state.moistureAvailability.advisoryA}</li>
                    <li className="item advisoryItem"  value=""><i class="lightbulb icon"></i>{this.state.moistureAvailability.advisoryB}</li>                                        
                  </ol>

                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )}
      </Container>
    );
  }
}
