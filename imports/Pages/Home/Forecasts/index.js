import React from "react";
import { Grid, Image, Divider, Header } from "semantic-ui-react";
import HumidityChart from "../HumidityChart";
import "./style.css";
import moment from 'moment';

const Forecasts = ({ graphs, dailyObservations }) => (
  
    <div className="forecastwidget"> 
    
    <Grid>
      <Grid.Row classname="firstsection" columns={5}>
        <Grid.Column width={5}>
          <div className="todaysdate">
            <div className="tempdisplays">
              <div className="temparature">
                <span className="temparaturevalue">
                  {" "}
                  {Math.ceil(dailyObservations[0].temperatures.max)}
                </span>
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
              <div className="dayofweek">
                {moment(dailyObservations[1].date).format("dddd ")}
              </div>
              <div className="tempicon">
                <i className="sun icon" />
              </div>
              <div className="temparature">
                <span className="weektemparaturevalue">
                  {" "}
                  {Math.ceil(dailyObservations[1].temperatures.max)}
                </span>
                <span className="weektemparaturesign"> &#x2103;</span>
              </div>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column width={2}>
          <div className="restofweek">
            <div className="tempdisplay">
              <div className="dayofweek">
                {moment(dailyObservations[2].date).format("dddd ")}
              </div>
              <div className="tempicon">
                <i className="sun icon" />
              </div>
              <div className="temparature">
                <span className="weektemparaturevalue">
                  {Math.ceil(dailyObservations[1].temperatures.max)}
                </span>
                <span className="weektemparaturesign"> &#x2103;</span>
              </div>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column width={2}>
          <div className="restofweek">
            <div className="tempdisplay">
              <div className="dayofweek">
                {moment(dailyObservations[3].date).format("dddd ")}
              </div>
              <div className="tempicon">
                <i className="sun icon" />
              </div>
              <div className="temparature">
                <span className="weektemparaturevalue">
                  {Math.ceil(dailyObservations[3].temperatures.max)}
                </span>
                <span className="weektemparaturesign"> &#x2103;</span>
              </div>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column width={2}>
          <div className="restofweek">
            <div className="tempdisplay">
              <div className="dayofweek">
                {moment(dailyObservations[4].date).format("dddd ")}
              </div>
              <div className="tempicon">
                <i className="sun icon" />
              </div>
              <div className="temparature">
                <span className="weektemparaturevalue">
                  {Math.ceil(dailyObservations[3].temperatures.max)}
                </span>
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
        <HumidityChart data={graphs.dailyObservations.data} height={400} />
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={4}>
          <div className="extraweather">
            <div className="iconweather">
              <i className="sun icon" />
            </div>
            <div className="extraweatheramount">
              <span className="extraweathervalue">
                {Math.ceil(dailyObservations[0].wind.average)}
              </span>
              <span className="extraweathersign">
                {dailyObservations[0].wind.units}
              </span>
            </div>
            <div className="extraweathercoment">Wind </div>
          </div>
        </Grid.Column>
        <Grid.Column width={4}>
          <div className="extraweather">
            <div className="iconweather">
              {" "}
              <i className="sun icon" />
            </div>
            <div className="extraweatheramount">
              <span className="extraweathervalue">
                {Math.ceil(dailyObservations[0].solar.amount)}
              </span>
              <span className="extraweathersign">
                {dailyObservations[0].solar.units}
              </span>
            </div>
            <div className="extraweathercoment">Solar </div>
          </div>
        </Grid.Column>
        <Grid.Column width={4}>
          <div className="extraweather">
            <div className="iconweather">
              <i className="sun icon" />
            </div>
            <div className="extraweatheramount">
              <span className="extraweathervalue">
                {Math.ceil(dailyObservations[0].precipitation.amount)}
              </span>
              <span className="extraweathersign">
                {dailyObservations[0].precipitation.units}
              </span>
            </div>
            <div className="extraweathercoment">Rainfall</div>
          </div>
        </Grid.Column>
        <Grid.Column width={4}>
          <div className="extraweather">
            <div className="iconweather">
              {" "}
              <i className="sun icon" />
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

export default Forecasts;

