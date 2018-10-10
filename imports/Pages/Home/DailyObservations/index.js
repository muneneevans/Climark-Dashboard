import React from "react";
import { Grid, Image, Divider, Header, GridColumn } from "semantic-ui-react";
import HumidityChart from "../HumidityChart";
import "./style.css";
import moment from "moment";
import HistoricalMap from "../../../ui/HistoricalMap";

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
              {moment(dailyObservations[i].date).format("dddd ")}
            </div>
            {/* <div className="tempicon">
              <ion-icon name="sunny" size="large" />
            </div> */}
            <div className="temparature">
              <span className="weektemparaturevalue">
                {" "}
                {Math.ceil(dailyObservations[i].temperatures.max)}
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
              {moment(dailyObservations[i].date).format("dddd ")}
            </div>
            {/* <div className="tempicon">
              <ion-icon name="rainy" size="large" />
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
              {moment(dailyObservations[i].date).format("dddd ")}
            </div>
            {/* <div className="tempicon">
              <ion-icon name="rainy" size="large" />
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
              {moment(dailyObservations[i].date).format("dddd ")}
            </div>
            {/* <div className="tempicon">
              <ion-icon name="rainy" size="large" />
            </div> */}
            <div className="temparature">
              <span className="weektemparaturevalue">
                {" "}
                {Math.ceil(dailyObservations[i].wind.average)}
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
      <Grid centered>
        <Grid.Row className="firstSection " columns={5}>
          <Grid.Column width={4}>
            <div className="todaysdate">
              <div className="tempdisplays">
                <div className="temparature">
                  <span className="temparaturevalue">
                    {Math.ceil(dailyObservations[0].temperatures.max)}
                  </span>
                  <span className="temparaturesigns"> &#x2103;</span>
                </div>
                <div className="temparatureadd">
                  <span className="temparatureicon">
                    <ion-icon name="sunny" size="large" />
                  </span>
                  <span className="temparaturesign"> Sunny</span>
                </div>
              </div>
            </div>
          </Grid.Column>

          {createTemperaturetable(dailyObservations)}
        </Grid.Row>
        <Divider section />
        <Grid.Row className="firstSection " columns={5}>
          <Grid.Column width={4}>
            <div className="todaysdate">
              <div className="tempdisplays">
                <div className="temparature">
                  <span className="temparaturevalue">
                    {Math.ceil(dailyObservations[0].relativeHumidity.max)}
                  </span>
                  {/* <span className="temparaturesigns"> &#x2103;</span> */}
                </div>
                <div className="temparatureadd">
                  <span className="temparatureicon">
                    <ion-icon name="water" size="large" />
                  </span>
                  <span className="temparaturesign"> Humidity</span>
                </div>
              </div>
            </div>
          </Grid.Column>

          {createHumiditytable(dailyObservations)}
        </Grid.Row>
        <Divider section />
        <Grid.Row className="firstSection " columns={5}>
          <Grid.Column width={4}>
            <div className="todaysdate">
              <div className="tempdisplays">
                <div className="temparature">
                  <span className="temparaturevalue">
                    {Math.ceil(dailyObservations[0].precipitation.amount)}
                  </span>
                  <span className="temparaturesigns"> &#x339C;</span>
                </div>
                <div className="temparatureadd">
                  <span className="temparatureicon">
                    <ion-icon name="rainy" size="large" />
                  </span>
                  <span className="temparaturesign"> rainfall </span>
                </div>
              </div>
            </div>
          </Grid.Column>

          {createRainfalltable(dailyObservations)}
        </Grid.Row>
        <Divider section />
        <Grid.Row className="firstSection " columns={5}>
          <Grid.Column width={4}>
            <div className="todaysdate">
              <div className="tempdisplays">
                <div className="temparature">
                  <span className="temparaturevalue">
                    {Math.ceil(dailyObservations[0].wind.average)}
                  </span>
                  <span className="temparaturesigns"> m/sec </span>
                </div>
                <div className="temparatureadd">
                  <span className="temparatureicon">
                    <ion-icon name="swap" size="large" />
                  </span>
                  <span className="temparaturesign"> wind</span>
                </div>
              </div>
            </div>
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
