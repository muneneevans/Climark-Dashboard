import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getauth } from "../../Store/Authentication/selectors";
import { login } from "../../Store/Authentication/actions";

import { getFields } from "../../Store/Weather/actions";
import {
  getFetchFieldsProcess,
  getCounties,
  getFields as getFieldsSelector,
  getCountyWards,
  getWardOptions,
  getWards
} from "./selectors";

import Banner from "./Banner";
import FieldWidget from "./FieldWidget";
import FieldSelectionWidget from "./FieldSelectionWidget";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counties: this.props.counties,
      wardOptions: this.props.wardOptions
    };

    
    this.countyChanged = this.countyChanged.bind(this);
  }
  componentDidMount() {
    // this.props.login();
    this.props.getFields();
  }

  countyChanged(countyName) {
    //filter the counties
    console.log(countyName);
    this.setState({
      ...this.state,
      wardOptions: getWardOptions({
        weather: {
          fields: getCountyWards(countyName, this.props.wards)
        }
      })
    });
  }

  render() {
    let { counties, wardOptions } = this.state;
    return (
      <div>
        <Banner />
        <FieldSelectionWidget
          counties={counties}
          wards={wardOptions}
          countyChanged={this.countyChanged}
        />
        <FieldWidget />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: getauth(state.auth),
    fields: getFieldsSelector(state),
    fetchFieldsProcess: getFetchFieldsProcess(state),
    counties: getCounties(state),
    wardOptions: getWardOptions(state),
    wards: getWards(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: bindActionCreators(login, dispatch),
    getFields: bindActionCreators(getFields, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
