import React, { Component } from "react";
import { Link } from "react-router-dom";

import styles from "./style.css";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility
} from "semantic-ui-react";

class Home extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ visible: false });
  showFixedMenu = () => this.setState({ visible: true });

  render() {
    const { visible } = this.state;

    return (
      <div>
        <Visibility
          as="div"
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: "1em 0em" }}
            vertical
            className="banner"
          >
            
            <div>
              <Header
                as="h2"
                content="CLIMARK WEATHER DASHBOARDS" // inverted
                style={{
                  fontSize: "3em",
                  marginBottom: 0,
                  marginTop: "5em"
                }}
                as="h3"
                className="heading"
              />
              <Header
                as="h2"
                content="plan for tomorrow's weather, today" // inverted
                style={{ fontSize: "1.7em", fontWeight: "normal" }}
              />
            </div>
          </Segment>

          <Segment
            style={{ padding: "8em 0em" }}
            vertical
            className="contentBlock"
          >
            <Grid container stackable verticalAlign="middle">
              <Grid.Row>
                <Grid.Column width={12}>
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    What it is about
                  </Header>
                  <p className="description">
                    Ducimus tempore mollitia est perspiciatis odio provident
                    ipsum. Molestiae distinctio sapiente odit. Enim dolorem
                    assumenda quos consequatur non recusandae nisi dolores. Eum
                    explicabo voluptas voluptatem veniam quos sed adipisci
                    voluptatem. Rerum autem sunt distinctio nihil unde accusamus
                    quia eveniet. Et temporibus et et est magni iusto. Eum iusto
                    non nemo. Quas voluptatem facere in. Optio hic ut
                    praesentium et earum error. Corrupti consequatur officia
                    modi quos quos iure libero qui. Molestiae magni eos autem.
                    Incidunt cum eos consequatur. Debitis molestiae rerum
                    necessitatibus expedita atque maxime facilis. Voluptatem
                    pariatur eaque sit distinctio. Aperiam cum assumenda
                    possimus numquam quo. Omnis et suscipit autem beatae
                    veritatis et. Molestiae fugiat molestiae ut. Numquam est
                    harum odit quisquam sit. Dolorum labore rerum quo iste
                    assumenda magni eum deleniti. Asperiores ducimus sed ex
                    consequatur ut hic sunt officiis. Laborum voluptatem amet
                    praesentium illum ut sint quis facere. Dicta sunt
                    necessitatibus excepturi dolore non sed maxime. Ut quo culpa
                    corrupti placeat cum. Dolores dignissimos enim natus nobis
                    quia doloribus. Similique accusantium neque ut qui rerum
                    officia porro.
                  </p>
                </Grid.Column>
                <Grid.Column floated="right" width={2} />
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="left">
                  <Link to="/dashboard">
                    <Button bordered size="huge">
                      View Dashboard
                      <Icon name="right arrow" />
                    </Button>
                  </Link>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Visibility>

        
      </div>
    );
  }
}

export default Home;
