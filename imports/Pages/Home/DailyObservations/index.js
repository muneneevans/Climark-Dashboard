import React from "react";
import { Grid, Image, Divider, Header, GridColumn } from "semantic-ui-react";
import HumidityChart from "../HumidityChart";
import "./style.css";
import moment from "moment";
import HistoricalMap from "../../../ui/HistoricalMap";

import sunfilled from "./icons/sun-filled.png";
import rainIcon from "./icons/rain.png";
import humidityIcon from "./icons/humidity.png";
import windIcon from "./icons/wind1.png";

const createTemperaturetable = dailyObservations => {
  console.log("called");
  let table = new Array();
  // console.log(dailyObservations);

  for (let i = 6; i > 2; i--) {
    table.push(
      <Grid.Column width={2}>
        <div className="restofweek">
          <div className="tempdisplay">
            <div className="dayofweek">
              {moment(dailyObservations[i].date).format("Do MMM")}
            </div>
            {/* <div className="tempicon">
              <ion-icon className="observationIcon"  name="sunny" size="small" />
            </div> */}
            <div className="temparature">
              <span className="weektemparaturevalue">
                {" "}
                {Math.round(dailyObservations[i].temperatures.max)}
              </span>
              <span className="weektemparaturesign"> &#x2103;</span>
            </div>
          </div>
        </div>
      </Grid.Column>
    );
    // table.push();
    // console.log(table);
  }
  // console.log(JSON.stringify(table));
  return table;
};
const createHumiditytable = dailyObservations => {
  console.log("called");
  let table = new Array();
  // console.log(dailyObservations);

  for (let i = 6; i > 2; i--) {
    table.push(
      <Grid.Column width={2}>
        <div className="restofweek">
          <div className="tempdisplay">
            <div className="dayofweek">
              {moment(dailyObservations[i].date).format("Do MMM")}
            </div>
            {/* <div className="tempicon">
              <ion-icon className="observationIcon"  name="rainy" size="small" />
            </div> */}
            <div className="temparature">
              <span className="weektemparaturevalue">
                {" "}
                {Math.ceil(dailyObservations[i].relativeHumidity.max)}
              </span>
              <span className="weektemparaturesign"> % </span>
            </div>
          </div>
        </div>
      </Grid.Column>
    );
    // table.push();
    // console.log(table);
  }
  // console.log(JSON.stringify(table));
  return table;
};

const createRainfalltable = dailyObservations => {
  console.log("called");
  let table = new Array();
  // console.log(dailyObservations);

  for (let i = 6; i > 2; i--) {
    table.push(
      <Grid.Column width={2}>
        <div className="restofweek">
          <div className="tempdisplay">
            <div className="dayofweek">
              {moment(dailyObservations[i].date).format("Do MMM")}
            </div>
            {/* <div className="tempicon">
              <ion-icon className="observationIcon"  name="rainy" size="small" />
            </div> */}
            <div className="temparature">
              <span className="weektemparaturevalue">
                {" "}
                {Math.ceil(dailyObservations[i].precipitation.amount)}
              </span>
              <span className="weektemparaturesign"> &#x339C;</span>
            </div>
          </div>
        </div>
      </Grid.Column>
    );
    // table.push();
    // console.log(table);
  }
  // console.log(JSON.stringify(table));
  return table;
};

const createWindtable = dailyObservations => {
  console.log("called");
  let table = new Array();
  // console.log(dailyObservations);

  for (let i = 6; i > 2; i--) {
    table.push(
      <Grid.Column width={2}>
        <div className="restofweek">
          <div className="tempdisplay">
            <div className="dayofweek">
              {moment(dailyObservations[i].date).format("Do MMM")}
            </div>
            {/* <div className="tempicon">
              <ion-icon className="observationIcon"  name="rainy" size="small" />
            </div> */}
            <div className="temparature">
              <span className="weektemparaturevalue">
                {" "}
                {Math.ceil(dailyObservations[i].wind.dayMax)}
              </span>
              <span className="weektemparaturesign"> m/sec </span>
            </div>
          </div>
        </div>
      </Grid.Column>
    );
    // table.push();
    // console.log(table);
  }
  // console.log(JSON.stringify(table));
  return table;
};

const WeatherWidget = ({ graphs, dailyObservations }) => {
  return (
    <div className="weatherwidget">
      <Divider section />
      <Grid centered>
        <Grid.Row className="firstSection " columns={5}>
          <Grid.Column width={4}>
            {/* <ion-icon classname="sun-color"color="blue" name="sunny" size="large" /> */}

            {/* <div class="weatherIcon">
              <div class="sunny">
                <div class="inner" />
              </div>
            </div> */}
            <div className="weatherIcon">
            <img
                        src={sunfilled}
                        alt=""
                        className="icon"
                      />
            </div>

            <Grid.Row>
           
              <div className="tempdisplays">
              <div className="todaySign"> Today </div>
                <div className="temparature">
               
                 <span className="temparaturevalue">
                    {Math.ceil(dailyObservations[0].temperatures.max)}
                  </span>
                  <span className="temparaturesigns"> &#x2103;</span>
                </div>
                <div className="temparatureadd">
                  <span className="temparatureicon" />
                  <span className="temparaturesign"> Temperature</span>
                </div>
              </div>
            </Grid.Row>
          </Grid.Column>

          {createTemperaturetable(dailyObservations)}
        </Grid.Row>
        <Divider section />
        <Grid.Row className="firstSection " columns={5}>
          <Grid.Column width={4}>
            {/* <ion-icon className="observationIcon" name="water" size="large" /> */}
            <div className="weatherIcon">
            <img
                        src={humidityIcon}
                        alt=""
                        className="icon"
                      />
            </div>
            <Grid.Row>
              <div className="todaysdate">
                <div className="tempdisplays">
                <div className="todaySign"> Today </div>
                  <div className="temparature">
                    <span className="temparaturevalue">
                      {Math.ceil(dailyObservations[0].relativeHumidity.max)}
                    </span>
                    {/* <span className="temparaturesigns"> &#x2103;</span> */}
                  </div>
                  <div className="temparatureadd">
                    <span className="temparatureicon" />
                    <span className="temparaturesign"> Humidity</span>
                  </div>
                </div>
              </div>
            </Grid.Row>
          </Grid.Column>

          {createHumiditytable(dailyObservations)}
        </Grid.Row>
        <Divider section />
        <Grid.Row className="firstSection " columns={5}>
          <Grid.Column width={4}>
            {/* <ion-icon className="observationIcon" name="rainy" size="large" /> */}
            <div className="weatherIcon">
            <img
                        src={rainIcon}
                        alt=""
                        className="icon"
                      />
            </div>
            <Grid.Row>
              <div className="todaysdate">
                <div className="tempdisplays">
                <div className="todaySign"> Today </div>
                  <div className="temparature">
                    <span className="temparaturevalue">
                      {Math.ceil(dailyObservations[0].precipitation.amount)}
                    </span>
                    <span className="temparaturesigns"> &#x339C;</span>
                  </div>
                  <div className="temparatureadd">
                    <span className="temparatureicon" />
                    <span className="temparaturesign"> Rainfall </span>
                  </div>
                </div>
              </div>
            </Grid.Row>
          </Grid.Column>

          {createRainfalltable(dailyObservations)}
        </Grid.Row>
        <Divider section />
        <Grid.Row className="firstSection " columns={5}>
          <Grid.Column width={4}>
            {/* <ion-icon className="observationIcon" name="swap" size="large " /> */}
            <div className="weatherIcon">
            <img
                        src={windIcon}
                        alt=""
                        className="icon"
                      />
            </div>
            <Grid.Row>
              <div className="todaysdate">
                <div className="tempdisplays">
                <div className="todaySign"> Today </div>
                  <div className="temparature">
                    <span className="temparaturevalue">
                      {Math.ceil(dailyObservations[0].wind.dayMax)}
                    </span>
                    <span className="temparaturesigns"> m/sec </span>
                  </div>
                  <div className="temparatureadd">
                    <span className="temparatureicon" />
                    <span className="temparaturesign"> Wind</span>
                  </div>
                </div>
              </div>
            </Grid.Row>
          </Grid.Column>

          {createWindtable(dailyObservations)}
        </Grid.Row>
        <Divider section />
        <Grid.Row>
          <Grid.Column width={16}>
            <HistoricalMap />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
export default WeatherWidget;
