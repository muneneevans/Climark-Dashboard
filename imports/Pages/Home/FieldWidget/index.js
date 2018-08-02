import React from "react";
import { Grid, Image, Segment, Header, Icon, Tab } from "semantic-ui-react";

import "./style.css";



const panes = [
  {
    menuItem: "Daily Observations",
    render: () => (
      <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
    )
  },
  {
    menuItem: "Forecasts",
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>
  },
  {
    menuItem: "Current Conditions",
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>
  }
];



const FieldWidget = () => (
  <div className="fieldWidgetContainer">
    <div className="fieldHeaderContainer">
      <Header as="h1">
        <Icon name="map marker" />
        <Header.Content>Marsabit</Header.Content>
      </Header>
    </div>
    <Segment>
      <Grid divided celled="internally">
        <Grid.Row columns={2}>
          <Grid.Column computer={4} tablet={4} mobile={16}>
            <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
          </Grid.Column>
          <Grid.Column computer={12} tablet={4} mobile={16}>
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>
);

export default FieldWidget;
