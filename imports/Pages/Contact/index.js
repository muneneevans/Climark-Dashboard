import React, { Component } from "react";
import { Link } from "react-router-dom";
import Banner from "../Home/Banner";
import { Form, Button, Message } from "semantic-ui-react";
import Appheader from "../Home/Appheader";
import Footer from "../Landing/Footer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as processTypes from "../../Store/Shared/processTypes";
import { sendMessage } from "../../Store/Feedback/actions";
import { getSendMessageProcess } from "../../Store/Feedback/selectors";

import { Container, Grid, Segment } from "semantic-ui-react";
import "./style.css";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: {
        name: "",
        email: "",
        message: "",
        submittedName: "",
        submittedEmail: "",
        submittedMessage: ""
      }
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e, { name, value }) => {
    this.setState({
      ...this.state,
      contact: {
        ...this.state.contact,
        [name]: value
      }
    });
  };

  handleSubmit = () => {
    const { name, email, message } = this.state.contact;

    this.props.sendMessage(this.state.contact);

    this.setState({
      ...this.state,
      contact: {
        name: "",
        email: "",
        message: ""
      }
    });
    // alert(JSON.stringify(this.state));
  };

  getAboutSection = () => (
    <section>
      <div className="aboutSection">
        <h1> ABOUT CTA </h1>
        <p>
          The Technical Centre for Agricultural and Rural Cooperation (CTA) is
          an international institution of the African, Caribbean and Pacific
          (ACP) Group of States and the European Union (EU). Its mission is to
          advance food and nutritional security, increase prosperity and
          encourage sound natural resource management in ACP countries. CTA
          promotes information and knowledge sharing; supports the development
          and implementation of evidence-based, multi-stakeholder policies and
          strategies; promotes inclusive value chain development and use of
          ICTs; and strengthens the capacities of agricultural and rural
          development institutions and communities across the ACP. CTA operates
          under the framework of the Cotonou Partnership Agreement and is funded
          by the EU.
        </p>
      </div>
      <div className="aboutSection">
        <h1> ABOUT CLIMARK </h1>
        <p>
          Some 20 million livestock keepers in the Horn of Africa are threatened
          by increasingly frequent and severe droughts. Their food and nutrition
          security, indeed the existence of the pastoral economic system, is
          under threat. The frequent droughts have eroded the pastoralists’
          adaptive capacity and resilience to such an extent that almost every
          drought now results in a humanitarian crisis. Drought has always been
          a feature of the Eastern African ecosystem, so why are pastoralists no
          longer able to cope with drought? One explanation is that they lack
          assets other than livestock that would allow them to recover from a
          drought disaster. Moreover, market mechanisms for risk transfer are
          not yet operational in the pastoral livestock system. By definition,
          pastoralists’ main wealth is their livestock, which they are unlikely
          to transform into less risky assets. This prevents them from
          integrating fully in the non-livestock markets.
        </p>
        <p>
          {" "}
          This CLIMARK (Climate Livestock And Markets) Project has been setup by
          CTA in order to design and deploy a blended weather information
          management system to enhance Market Response to Resilience in
          Livestock Value Chains in East Africa
        </p>
        <p>
          {" "}
          This will enable the local community be aware of the weather patterns
          in the short term and long term for pro-active actionable
          recommendations in order to safeguard their livelihoods.
        </p>
        <p>
          {" "}
          The application of technology will therefore be required in making
          sure that near-real time information is sent through to the various
          stakeholders in the pastoralist community eco-system via channels that
          are accessible to them (SMS, Dashboard and Mobile Application) In this
          regard, Amfratech has developed a functional, easy-to-use mobile based
          application and dashboard that collects weather information from our
          agri-weather platform partner, aWhere to provide forecasted weather
          patterns and actionable information to stakeholders within the
          pastoralist communities in Marsabit and Isiolo Counties
        </p>
      </div>
    </section>
  );

  getContactSection = sendMessageProcess => (
    <section className="contactSection">
      <h1> CONTACT US</h1>
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Name</label>
          <Form.Input
            placeholder="Names"
            name="name"
            required="true"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <Form.Input
            placeholder="account@domain.com"
            name="email"
            type="email"
            required="true"
            onChange={this.handleChange}
          />
        </Form.Field>

        <Form.TextArea
          name="message"
          label="Message"
          placeholder="Share your thoughts and comments..."
          onChange={this.handleChange}
        />
        <Button type="submit">Send</Button>
        <Form.Field>
          {sendMessageProcess.status === processTypes.PROCESSING && (
            <Message
              error
              header="SendMessage Failed"
              content="We encoutered some problems sending the message. Please retry."
            />
          )}
          {sendMessageProcess.status === processTypes.ERROR && (
            <Message
              error
              header="SendMessage Failed"
              content="We encoutered some problems sending the message. Please retry."
            />
          )}
          {sendMessageProcess.status === processTypes.SUCCESS && (
             
            <Message
              success
              header="Message Send"
              content="Your message has been successfuly sent to the Climark. Thank you for your feedback."
            />
          )}
        </Form.Field>
      </Form>
    </section>
  );
  render() {
    return (
      <div className="aboutPage">
        <Appheader />
        <Container>
          <Segment>
            {/* {this.getAboutSection()} */}
            {this.getContactSection(this.props.sendMessageProcess)}
          </Segment>
        </Container>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sendMessageProcess: getSendMessageProcess(state.feedback)
});

const mapDispatchToProps = dispatch => ({
  sendMessage: bindActionCreators(sendMessage, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);