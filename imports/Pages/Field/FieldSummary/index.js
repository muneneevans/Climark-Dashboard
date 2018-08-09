import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";

import "./style.css";

const FieldSummary = () => {
  return (
    <Grid columns={4} centered className="fieldSummaryContainer container">
      <Grid.Column>
        <Grid columns={2} verticalAlign="middle" centered >
          <Grid.Column className="summaryIcon" width={4}>
            {/* <Image src="https://react.semantic-ui.com/images/wireframe/image.png" /> */}
            <ion-icon name="rainy" size="large" />
          </Grid.Column>
          <Grid.Column width={8}>
            <h3 className="summaryLabel">Temperature</h3>
            <h2 className="summaryValue">20</h2>
          </Grid.Column>
        </Grid>
      </Grid.Column>

      <Grid.Column>
        <Grid columns={2} verticalAlign="middle" centered>
          <Grid.Column className="summaryIcon" width={4}>
            <ion-icon name="swap" size="large" />
            {/* <Image src="https://react.semantic-ui.com/images/wireframe/image.png" /> */}
          </Grid.Column>
          <Grid.Column>
            <h3 className="summaryLabel">Wind</h3>
            <h2 className="summaryValue">20</h2>
          </Grid.Column>
        </Grid>
      </Grid.Column>

      <Grid.Column>
        <Grid columns={2} verticalAlign="middle" centered>
          <Grid.Column className="summaryIcon" width={4}>
            <ion-icon name="water" size="large" />
            {/* <Image src="https://react.semantic-ui.com/images/wireframe/image.png" /> */}
          </Grid.Column>
          <Grid.Column>
            <h3 className="summaryLabel">Precipitation</h3>
            <h2 className="summaryValue">20</h2>
          </Grid.Column>
        </Grid>
      </Grid.Column>

      <Grid.Column>
        <Grid columns={2} verticalAlign="middle" centered>
          <Grid.Column className="summaryIcon" width={4}>
            <ion-icon name="sunny" size="large" />
            {/* <Image src="https://react.semantic-ui.com/images/wireframe/image.png" /> */}
          </Grid.Column>
          <Grid.Column className="summaryIcon" width={4}>
            <h3 className="summaryLabel">Wind</h3>
            <h2 className="summaryValue">20</h2>
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </Grid>
  );
};

export default FieldSummary;
