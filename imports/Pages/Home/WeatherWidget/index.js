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
      <Grid.Row columns={5} divided>
        <Grid.Column width={5}>
          <Grid centered padded>
            <div className="todaysdate">
              <div className="ui header">
                <Icon size="massive" className="sun icon" />
                <div className="content">
                  19
                  <div className="sub header">C</div>
                </div>
              </div>
            </div>
          </Grid>
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

      <Grid.Row>
        <Grid.Column>
          <Image src="/images/wireframe/media-paragraph.png" />
          <div> hello world</div>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Image src="/images/wireframe/media-paragraph.png" />
          <div> hello world</div>
        </Grid.Column>
        <Grid.Column>
          <Image src="/images/wireframe/media-paragraph.png" />
          <div> hello world</div>
        </Grid.Column>
        <Grid.Column>
          <Image src="/images/wireframe/media-paragraph.png" />
          <div> hello world</div>
        </Grid.Column>
        <Grid.Column>
          <Image src="/images/wireframe/media-paragraph.png" />
          <div> hello world</div>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <div className="secondsection" />

    <div className="thirdsection" />
  </div>
);

export default WeatherWidget;
