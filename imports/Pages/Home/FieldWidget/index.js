import React from "react";
import { Grid, Image, Segment, Header, Icon, Tab } from "semantic-ui-react";
import LocationWidget from "../LocationWidget";
import DailyObservations from "../DailyObservations";
import Forecasts from "../Forecasts"
import "./style.css";

const panes = [ 
  {
    menuItem: "Daily Observations",
    render: ({ graphs, wardData }) => <DailyObservations graphs={graphs} dailyObservations={wardData.dailyObservations.data}  />
  },
  {
    menuItem: "Forecasts",
    render: ({ graphs, wardData}) => <Forecasts Forecasts={wardData.forecasts.data}/>
  },
  {
    menuItem: "Current Conditions",
    render: () => (
      <Image src="https://im2.ezgif.com/tmp/ezgif-2-7543dffd0d.gif" />
    )
  }
];

const FieldWidget = ({ title = "Some Place", graphs, wardData }) => (
  <div className="fieldWidgetContainer">
    <div className="fieldHeaderContainer">
      <Header as="h1">
        <Icon name="map marker" />
        <Header.Content>{title}</Header.Content>
      </Header>
    </div>

    <Segment>
      <Grid divided celled="internally">
        <Grid.Row columns={2}>
          <Grid.Column computer={4} tablet={4} mobile={16}>
            <LocationWidget />
          </Grid.Column>

          <Grid.Column computer={12} tablet={4} mobile={16}>
            <Tab
              menu={{ secondary: true, pointing: true, stackable: true }}
              panes={panes}
              graphs={graphs}
              wardData={wardData}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>
);

export default FieldWidget;
