import React from "react";
import { Grid, Image, Divider, Header } from "semantic-ui-react";
import HumidityChart from "../HumidityChart";
import "./style.css";

const WeatherWidget = ({ graphs }) => (
  <div className="weatherwidget">
    <Grid>
      <Grid.Row columns={5}>
        <Grid.Column width={5}>
          <div className="todaysdate">
            <div className="tempdisplays">
              <div className="temparature">
                <span className="temparaturevalue"> 19</span>
                <span className="temparaturesigns"> &#x2103;</span>
              </div>
              <div className="temparatureadd">
                <span className="temparatureicon">
                  {" "}
                  <i className="sun icon" />
                </span>
                <span className="temparaturesign"> Sunny</span>
              </div>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column width={2}>
          <div className="restofweek">
            <div className="tempdisplay">
              <div className="dayofweek">Monday</div>
              <div className="tempicon">
                <i className="sun icon" />
              </div>
              <div className="temparature">
                <span className="weektemparaturevalue"> 19</span>
                <span className="weektemparaturesign"> &#x2103;</span>
              </div>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column width={2}>
          <div className="restofweek">
            <div className="tempdisplay">
              <div className="dayofweek">Monday</div>
              <div className="tempicon">
                <i className="sun icon" />
              </div>
              <div className="temparature">
                <span className="weektemparaturevalue"> 19</span>
                <span className="weektemparaturesign"> &#x2103;</span>
              </div>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column width={2}>
          <div className="restofweek">
            <div className="tempdisplay">
              <div className="dayofweek">Monday</div>
              <div className="tempicon">
                <i className="sun icon" />
              </div>
              <div className="temparature">
                <span className="weektemparaturevalue"> 19</span>
                <span className="weektemparaturesign"> &#x2103;</span>
              </div>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column width={2}>
          <div className="restofweek">
            <div className="tempdisplay">
              <div className="dayofweek">Monday</div>
              <div className="tempicon">
                <i className="sun icon" />
              </div>
              <div className="temparature">
                <span className="weektemparaturevalue"> 19</span>
                <span className="weektemparaturesign"> &#x2103;</span>
              </div>
            </div>
          </div>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row stretched className="dailyObservationsSection container">
      <Divider section />
        <div className="dailyObservationSectionHeader">
          <Header as="h2">Humidity</Header>
        </div>
        <HumidityChart data={graphs.dailyObservations.data} height={400}/>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={4}>
          <div className="extraweather">
            <div className="iconweather">
              <i className="sun icon" />
            </div>
            <div className="extraweatheramount">
              <span className="extraweathervalue">19</span>
              <span className="extraweathersign">&#x2103;</span>
            </div>
            <div className="extraweathercoment">Wind </div>
          </div>
        </Grid.Column>
        <Grid.Column width={4}>
          <div className="extraweather">
            <div className="iconweather"> <i className="sun icon" />
            </div>
            <div className="extraweatheramount">
              <span className="extraweathervalue">19</span>
              <span className="extraweathersign">&#x2103;</span>
            </div>
            <div className="extraweathercoment">Sunlight </div>
          </div>
        </Grid.Column>
        <Grid.Column width={4}>
          <div className="extraweather">
            <div className="iconweather"><i className="sun icon" />
            </div>
            <div className="extraweatheramount">
              <span className="extraweathervalue">19</span>
              <span className="extraweathersign">&#x2103;</span>
            </div>
            <div className="extraweathercoment">Rainfall</div>
          </div>
        </Grid.Column>
        <Grid.Column width={4}>
          <div className="extraweather">
            <div className="iconweather"> <i className="sun icon" />
            </div>
            <div className="extraweatheramount">
              <span className="extraweathervalue">19</span>
              <span className="extraweathersign">&#x2103;</span>
            </div>
            <div className="extraweathercoment">Wind Speed </div>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default WeatherWidget;
