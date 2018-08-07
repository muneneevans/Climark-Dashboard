import React from "react";
import {
  Grid,
  Image,
  Segment,
  Header,
  Icon,
  Tab,
  Divider
} from "semantic-ui-react";
import "./style.css";

const WeatherWidget = () => (
  <div className="weatherwidget">
    <Grid>
      <Grid.Row columns={5}>
        <Grid.Column width={5}>
          <div className="todaysdate">
            <div className="tempdisplays">
              <div className="temparature">
                <span className="temparaturevalue"> 19</span>
                <span className="temparaturesign"> &#x2103;</span>
              </div>
              <div className="temparatureadd">
                <span className="temparatureicon">
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

      <Grid.Row>
        <Grid.Column>
          <Image src="/images/wireframe/media-paragraph.png" />
          <div> hello world</div>
        </Grid.Column>
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
