import React from "react";
import {Grid, Image, Divider, Header} from "semantic-ui-react";
import "./style.css";
import moment from "moment";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label
} from "recharts";
import dimensions from "react-dimensions";

const dayForcacst = (day, format = "hh a") => {
  return day.forecast.map(hour => {
    return {
      ...hour.wind,
      date: moment(hour.startTime).format(format)
    };
  });
};

const round = (number, decimal) => {
  return + (Math.round(number + `e+${decimal}`) + `e-${decimal}`);
};

const dayAverage = (day, format = "hh a") => {
  return {
    max: round(day.forecast.reduce((total, hour, counter) => {
      return total + hour.wind.max;
    }, 0) / day.forecast.length, 2),
    average: round(day.forecast.reduce((total, hour, counter) => {
      return total + hour.wind.average;
    }, 0) / day.forecast.length, 2),
    min: round(day.forecast.reduce((total, hour, counter) => {
      return total + hour.wind.min;
    }, 0) / day.forecast.length, 2),
    units: day.forecast[0].units,
    date: moment(day.date).format(format)
  };
};

const flatten = (forecasts, format) => {
  return forecasts.map(day => {
    return dayForcacst(day, format);
  });
};

const flattenAllDays = forecasts => {
  return forecasts.map(day => {
    return dayAverage(day, "dddd");
  });
};

const WindForecast = ({
  containerWidth,
  Forecasts,
  height = 350
}) => {
  return (<div>
    <Divider section="section" hidden="hidden"/>
    <div>
      <Header as="h3">Hourly Wind Forecasts</Header>
      <LineChart width={containerWidth} height={height} data={flatten(Forecasts)[0]} margin={{
          top: 5,
          right: 30,
          left: 30,
          bottom: 5
        }}>
        <XAxis dataKey="date"/>
        <YAxis>
          <Label value="m/sec" angle={-90} position="Left"/>
        </YAxis>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend/>
        <Line type="monotone" dataKey="max" stroke="#e67e22"/>
        <Line type="monotone" dataKey="average" stroke="#4CAF50" activeDot={{
            r: 8
          }}/>
        <Line type="monotone" dataKey="min" stroke="#3498db" activeDot={{
            r: 8
          }}/>
      </LineChart>
    </div>

    <Divider section="section"/>
    <Divider section="section" hidden="hidden"/>
    <div>
      <Header as="h3">Average Wind forecasts for the week</Header>
      <LineChart width={containerWidth} height={height} data={flattenAllDays(Forecasts)} margin={{
          top: 5,
          right: 30,
          left: 30,
          bottom: 5
        }}>
        <XAxis dataKey="date"/>
        <YAxis scale={"linear"} domain={["Math.ceil(dataMin)-5", "Math.ceil(dataMax)+5"]}>

          <Label value="m/sec" angle={-90} position="Left"/>
        </YAxis>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend/>
        <Line type="monotone" dataKey="max" stroke="#e67e22" dot={false}/>
        <Line type="monotone" dataKey="average" stroke="#3d3d3d" activeDot={{
            r: 1
          }} dot={false}/>
        <Line type="monotone" dataKey="min" stroke="#3498db" activeDot={{
            r: 1
          }} dot={false}/>
      </LineChart>
    </div>
  </div>);
};

export default dimensions()(WindForecast);
