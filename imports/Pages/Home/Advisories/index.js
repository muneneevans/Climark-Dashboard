import React from "react";
import { AdvisoryDroughtIndex } from "./../../../api/advisorydraughtIndex";

import { isUndefined } from "../../../lib/utils";

import { Container, Grid, Image, Card } from "semantic-ui-react";
import "./style.css";
import { AdvisoryMA } from "./../../../api/advisoryMA";
import { pastMoistureCondition } from "./../../../api/pastMoistureCondition";
import { pastRainfallCondition } from "./../../../api/pastRainfallCondition";
import { Tracker } from "meteor/tracker";

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
      <div>
        <Grid columns={4} stackable >
          {isUndefined(this.state.droughtIndex) ? (
            <h1>could not get the drought index</h1>
          ) : (
            <Grid.Row>
              <Card.Group>
                <Card>
                  <Card.Content header="Current Moisture Condictions" />
                  <Card.Content>
                    {this.state.pastMoisture.advisoryA}
                  </Card.Content>
                  <Card.Content>
                    {this.state.pastMoisture.advisoryB}
                  </Card.Content>
                  <Card.Content extra>
                    {this.state.pastMoisture.implication}
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content header="Current Rainfall Distribution" />
                  <Card.Content>
                    {this.state.pastRainfall.advisoryA}
                  </Card.Content>
                  <Card.Content>
                    {this.state.pastRainfall.advisoryB}
                  </Card.Content>
                  <Card.Content>
                    {this.state.pastRainfall.advisoryC}
                  </Card.Content>
                </Card>

                <Card>
                  <Card.Content header="Expected Drought Conditions" />
                  <Card.Content>
                    {this.state.droughtIndex.advisoryA}
                  </Card.Content>

                  <Card.Content>
                    {this.state.droughtIndex.advisoryB}
                  </Card.Content>

                  <Card.Content>
                    {this.state.droughtIndex.advisoryC}
                  </Card.Content>

                  <Card.Content>
                    {this.state.droughtIndex.advisoryD}
                  </Card.Content>

                  <Card.Content extra>
                    {this.state.droughtIndex.implication}
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content header=" Expected Moisture Conditions" />
                  <Card.Content>
                    {this.state.moistureAvailability.advisoryA}
                  </Card.Content>
                  <Card.Content>
                    {this.state.moistureAvailability.advisoryB}
                  </Card.Content>
                  <Card.Content extra>
                    {this.state.moistureAvailability.implication}
                  </Card.Content>
                </Card>
              </Card.Group>
            </Grid.Row>
          )}
        </Grid>
      </div>
    );
  }
}
