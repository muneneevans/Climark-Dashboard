import React from "react";
import { Grid, Image, Segment } from "semantic-ui-react";

import "./style.css";

const FieldWidget = () => (
  <div className="fieldWidgetContainer">
    <div className="fieldHeaderContainer">
      <h2>Marsabit</h2>
    </div>
    <Segment>
      <Grid divided celled="internally">
        <Grid.Row columns={2}>
                    <Grid.Column computer={4} tablet={4} mobile={16}>
            <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
          </Grid.Column>
          <Grid.Column computer={12} tablet={4} mobile={16}>
            <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>
);

export default FieldWidget;
