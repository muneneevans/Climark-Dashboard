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
      </Grid.Row>
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
