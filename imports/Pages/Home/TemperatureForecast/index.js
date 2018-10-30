import React from "react";
import { Grid, Image, Divider, Header } from "semantic-ui-react";
import "./style.css";
import moment from "moment";
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


const dayForcacst = (day, format = "hh a") => {
  return day.forecast.map(hour => {
    return {
      ...hour.temperatures,
      date: moment(hour.startTime).format(format)
    };
  });
};

const round = (number, decimal) => {
  return +(Math.round(number + `e+${decimal}`) + `e-${decimal}`);
};

const dayAverage = (day, format = "hh a") => {
  return {
    max: round(
      day.forecast.reduce((total, hour, counter) => {
        return total + hour.temperatures.max;
      }, 0) / day.forecast.length,
      2
    ),
    value: round(
      day.forecast.reduce((total, hour, counter) => {
        return total + hour.temperatures.value;
      }, 0) / day.forecast.length,
      2
    ),
    min: round(
      day.forecast.reduce((total, hour, counter) => {
        return total + hour.temperatures.min;
      }, 0) / day.forecast.length,
      2
    ),
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
const shift = forecasts => {
  forecasts.shift();
  forecasts.pop();
    return forecasts.map(day => {
    return dayAverage(day, "dddd");
  });
};

var COUNT = 0;
var NEWCOUNT = 6;
// this is a temporary fix
function shiftDays(forecasts) {
  
  if (COUNT == 0) {
    COUNT = NEWCOUNT;
    return shift(forecasts);
    
  }
  
   return flattenAllDays(forecasts)
}

// function shift(forecasts) {
//   var isShift = false;
//   if (isShift) {

//   forecasts.shift();
//   forecasts.pop();

//   return forecasts.map(day => {
//     return dayAverage(day, "dddd");
//   });

//   }
//   return forecasts.map(day => {
//     return dayAverage(day, "dddd");
//   });

// }

const TemperatureForecast = ({ containerWidth, Forecasts, height = 350 }) => {
  return (
    <div>
      <Divider section hidden />
      <div>
        <Header as="h3">Hourly Temperature forecasts for {moment(Forecasts[0].date).format('ll')}</Header>
        <LineChart
          width={containerWidth}
          height={height}
          data={flatten(Forecasts)[0]}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="date" />
          <YAxis label="&#x2103;" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="max" stroke="#e67e22" />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#4CAF50"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="min"
            stroke="#3498db"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>

      <Divider section />
      <Divider section hidden />
      <div>
        <Header as="h3">Average Temperature forecasts for the week between {moment(Forecasts[0].date).add('days', 1).format('ll')} and {moment(Forecasts[0].date).add('days', 7).format('ll')}</Header>
        <LineChart
          width={containerWidth}
          height={height}
          data={shiftDays(Forecasts)}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="date" />
          <YAxis
            scale={"linear"}
            domain={["dataMin-2", "dataMax+2"]}
            label="&#x2103;"
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="max" stroke="#e67e22" dot={false} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3d3d3d"
            activeDot={{ r: 1 }}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="min"
            stroke="#3498db"
            activeDot={{ r: 1 }}
            dot={false}
          />
        </LineChart>
      </div>
    </div>
  );
};

export default dimensions()(TemperatureForecast);
