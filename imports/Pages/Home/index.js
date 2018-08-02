import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getauth } from "../../Store/Authentication/selectors";
import { login } from "../../Store/Authentication/actions";

import Banner from "./Banner";
import FieldWidget from "./FieldWidget";
import FieldSelectionWidget from "./FieldSelectionWidget";

class Home extends Component {
  componentDidMount() {
    this.props.login();
  }

  render() {
    return (
      <div>
        <Banner />
        <FieldSelectionWidget />
        <FieldWidget />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: getauth(state.auth)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: bindActionCreators(login, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
