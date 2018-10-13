import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container, Grid } from "semantic-ui-react";

class About extends Component {
  getAboutSection = () => (
    <section>
      <div>
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
  render() {
    return (
      <div>
        <Container>{this.getAboutSection()}</Container>
      </div>
    );
  }
}

export default About;
