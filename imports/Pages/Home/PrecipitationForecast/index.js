import React from "react";
import { Grid, Image, Divider, Header } from "semantic-ui-react";
import "./style.css";
import moment from "moment";
import HistoricalMap from "../../../ui/ForecastMap";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
  import dimensions from "react-dimensions";
import ForecastMap from "../../../ui/ForecastMap";
  

  const dayForcacst = (day,format='hh a') => {
    return day.forecast.map(hour => {
      return {
        ...hour.precipitation,
        date: moment(hour.startTime).format(format)     
      };
    });
  };
  
  const flatten = (forecasts, format) => {
    return forecasts.map(day => {
      return dayForcacst(day, format);
    });
  };
  
  const flattenAllDays = forecasts => {
    return flatten(forecasts, "dddd Do").reduce((accumulator, current) => {
      return [...accumulator, ...current];
    }, []);
  };


const PrecipitationForecast = ({ containerWidth, Forecasts, Norms, height=250 }) => {
  return(
<div>

      <div>
      <LineChart width={containerWidth} height={height} data={flatten(Forecasts)[0]} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="chance" stroke="#e67e22" />
      <Line type="monotone" dataKey="amount" stroke="#3498db" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="value" stroke="#3498db" activeDot={{ r: 8 }} />
      </LineChart>
    </div>

<div>
      <LineChart width={containerWidth} height={height} data={flattenAllDays(Forecasts)} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="chance" stroke="#e67e22" dot={false} />
      <Line type="monotone" dataKey="amount" stroke="#3498db" activeDot={{ r: 1 }} dot={false}/>
      <Line type="monotone" dataKey="value" stroke="#3d3d3d" activeDot={{ r: 1 }} dot={false} />
      </LineChart>
    </div>

    <div>
        <ForecastMap />
    </div>
    <div>
      <div> {Norms}</div>
    </div>

</div>
    ) 
};

export default dimensions()(PrecipitationForecast);
