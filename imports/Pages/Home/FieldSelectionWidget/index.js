import React, { Component } from "react";
import {
  Container,
  Grid,
  Card,
  Form,
  Dropdown,
  Header,
  Button
} from "semantic-ui-react";

import "./style.css";

// // <<<<<<< HEAD
// import {AdvisoryDroughtIndex} from './../../../api/advisorydroughtIndex';
// // =======
import {AdvisoryDroughtIndex} from './../../../api/advisorydroughtIndex';
import { AdvisoryMA } from "./../../../api/advisoryMA";
import { pastMoistureCondition } from "./../../../api/pastMoistureCondition";
import { pastRainfallCondition } from "./../../../api/pastRainfallCondition";
// >>>>>>> 53289e5fc72c55d2db95a669edf2ee05a749d45b
// import {LastSevenDaysDI} from './../../../api/lastSevenDaysDI';

class FieldSelectionWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ward: {}
    };

    this.handleCountyChange = this.handleCountyChange.bind(this);
    this.handleWardChange = this.handleWardChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  //mounting components
  componentDidMount() {
    console.log('Component mounted: Field Selection Widget');
    this.droughtIndexTracker = Tracker.autorun(() => {
      Meteor.subscribe("pastRainfallCondition");
      Meteor.subscribe("advisoryMA");
      Meteor.subscribe("pastMoistureCondition");
      Meteor.subscribe("advisoryDroughtIndex");

      // Meteor.subscribe('lastsevendaysdi');

    })
  }
  //
  handleCountyChange = (event, data) => {
    this.props.countyChanged(
      data.options.find(option => option.value === data.value).county
    );
  };

  handleWardChange = (event, data) => {

    this.setState({
      ...this.state,
      ward: data.options.find(option => option.value === data.value).ward
    });
  };

  handleSubmit = () => {
    this.props.submitAction(this.state.ward);
  };

  render() {
    let { counties, wards } = this.props;
    return (
      <div className="fieldAdditionWidgetContainer">
        <Container>
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column computer={1} mobile={16} />
              <Grid.Column computer={6} mobile={16}>
                <Header as="h1">Select a location </Header>
                <Header as="h4">
                  Select an area of your choice to view a weather summary at
                  that location. You can further view each field by selecting
                  the More button in the field widget.
                </Header>
              </Grid.Column>
              <Grid.Column computer={6} mobile={16}>
                <Card fluid>
                  <Card.Content>
                    <Form>
                      <Form.Field>
                        <label>County</label>
                        <Dropdown
                          placeholder="select a county"
                          fluid
                          search
                          selection
                          options={counties}
                          onChange={this.handleCountyChange}
                        />
                      </Form.Field>
                      <Form.Field>
                        <label>Ward</label>
                        <Dropdown
                          placeholder="select a ward"
                          fluid
                          search
                          selection
                          options={wards}
                          onChange={this.handleWardChange}
                        />
                      </Form.Field>
                      <Form.Field>
                        <Button
                          toggle
                          active={true}
                          fluid
                          onClick={this.handleSubmit}
                        >
                          Add
                        </Button>
                      </Form.Field>
                    </Form>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default FieldSelectionWidget;
