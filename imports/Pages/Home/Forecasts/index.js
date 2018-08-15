import React from 'react'
import { Tab } from 'semantic-ui-react'
import TemperatureForecast from "../TemperatureForecast";

const panes = [
  { menuItem: 'Temperature', render: ({ Forecasts }) => <TemperatureForecast Forecasts={Forecasts} /> },
  { menuItem: 'Precipitation', render: () => <Tab.Pane attached={false}>Precipitation</Tab.Pane> },
  { menuItem: 'Wind', render: () => <Tab.Pane attached={false}>Wind</Tab.Pane> },
  { menuItem: 'Humidity', render: () => <Tab.Pane attached={false}>Humidity</Tab.Pane> },
  { menuItem: 'Solar', render: () => <Tab.Pane attached={false}>Solar</Tab.Pane> },
]

const Forecasts = ({Forecasts}) => <Tab menu={{ pointing: true }} panes={panes} Forecasts={Forecasts}/>

export default Forecasts
