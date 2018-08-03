import React from "react";
import { Grid, Image, Segment, Header, Icon, Tab } from "semantic-ui-react";
import  ForecastMap from "../../../ui/ForecastMap"
import WeatherWidget from "../WeatherWidget";
import "./style.css";



const panes = [
  {
    menuItem: "Daily Observations",
    render: () => (
      <WeatherWidget/>
      
    )
  },
  {
    menuItem: "Forecasts",
    render: () => (
      <Image src="https://im2.ezgif.com/tmp/ezgif-2-7543dffd0d.gif" />
    )
  },
  {
    menuItem: "Current Conditions",
    render: () => (
      <Image src="https://im2.ezgif.com/tmp/ezgif-2-7543dffd0d.gif" />
    )
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
            
           <ForecastMap/>
          </Grid.Column>
       
          <Grid.Column computer={12} tablet={4} mobile={16}>
            <Tab menu={{ secondary: true, pointing: true, stackable: true }} panes={panes} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>
);

export default FieldWidget;
