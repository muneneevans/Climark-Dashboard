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
            <div className="tempdisplay">
              <div className="temparature">
                <span className="temparaturevalue"> 19</span>
                <span className="temparaturesign"> &#x2103;</span>
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
          <div className="date">
            <div className="ui list">
              <div className="day">
                <div className="content">Monday</div>
              </div>
              <div className="temparaturedescription">
                <div className="content">
                  <i className="sun icon" />
                </div>
              </div>
              <div className="temparature">
                <div className="content">
                  19
                  <i className="thermometer quarter icon" />
                </div>
              </div>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column width={2}>
          <div className="date">
            <div className="ui list">
              <div className="day">
                <div className="content">Tuesday</div>
              </div>
              <div className="temparaturedescription">
                <div className="content">
                  <i className="sun icon" />
                </div>
              </div>
              <div className="temparature">
                <div className="content">
                  19
                  <i className="thermometer quarter icon" />
                </div>
              </div>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column width={2}>
          <div className="date">
            <div className="ui list">
              <div className="day">
                <div className="content">Monday</div>
              </div>
              <div className="temparaturedescription">
                <div className="content">
                  <i className="sun icon" />
                </div>
              </div>
              <div className="temparature">
                <div className="content">
                  19
                  <i className="thermometer quarter icon" />
                </div>
              </div>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column width={2}>
          <div className="date">
            <div className="ui list">
              <div className="day">
                <div className="content">Monday</div>
              </div>
              <div className="temparaturedescription">
                <div className="content">
                  <i className="sun icon" />
                </div>
              </div>
              <div className="temparature">
                <div className="content">
                  19
                  <i className="thermometer quarter icon" />
                </div>
              </div>
            </div>
          </div>
        </Grid.Column>
      </Grid.Row>

      <Divider section />
      <Grid.Row stretched>
        <div className="dailyObservationSectionHeader">
          <Header as="h2">Humidity</Header>
        </div>
        <HumidityChart data={graphs.dailyObservations.data} />
      </Grid.Row>

      {/* <Grid.Row>
        <Grid.Column>
          <Image src="/images/wireframe/media-paragraph.png" />
          <div> Wind speed</div>
        </Grid.Column>
        <Grid.Column>
          <Image src="/images/wireframe/media-paragraph.png" />
          <div> Sunlight </div>
        </Grid.Column>
        <Grid.Column>
          <Image src="/images/wireframe/media-paragraph.png" />
          <div> rainfall</div>
        </Grid.Column>
        <Grid.Column>
          <Image src="/images/wireframe/media-paragraph.png" />
          <div> Speed </div>
        </Grid.Column>
      </Grid.Row> */}
    </Grid>

    {/* <div className="secondsection"> 
    
     lool
    </div>

    <div className="thirdsection"> 
    
    lool
  
    </div> */}
  </div>
);

export default WeatherWidget;
