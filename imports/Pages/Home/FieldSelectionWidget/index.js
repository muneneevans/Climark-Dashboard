import React from "react";
import {
  Container,
  Grid,
  Card,
  Form,
  Dropdown,
  Header,
  Button
} from "semantic-ui-react";

import "./style.css";

const options = [
  { key: 1, text: "Marsabit", value: 1 },
  { key: 2, text: "Isiolo", value: 2 }
];

const FieldSelectionWidget = ({ counties, wards, countyChanged }) => {
  const handleCountyChange = (event, data) => {
    countyChanged(data.options.find(option=> option.value === data.value).county);
  };

  
  return (
    <div className="fieldAdditionWidgetContainer">
      <Container>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column computer={1} mobile={16} />
            <Grid.Column computer={6} mobile={16}>
              <Header as="h1">Add a field</Header>
              <Header as="h4">
                Select an area of your choice to view a weather summary at that
                location. You can further view each field by selecting the More
                button in the field widget.
              </Header>
            </Grid.Column>
            <Grid.Column computer={6} mobile={16}>
              <Card fluid>
                <Card.Content>
                  <Form>
                    <Form.Field>
                      <label>County</label>
                      <Dropdown
                        placeholder="select a county"
                        fluid
                        search
                        selection
                        options={counties}
                        onChange={handleCountyChange}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Ward</label>
                      <Dropdown
                        placeholder="select a ward"
                        fluid
                        search
                        selection
                        options={wards}
                      />
                    </Form.Field>
                    <Form.Field>
                      <Button
                        toggle
                        active={true}
                        fluid
                        onClick={this.handleClick}
                      >
                        Add
                      </Button>
                    </Form.Field>
                  </Form>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default FieldSelectionWidget;
