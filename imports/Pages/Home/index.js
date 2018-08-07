import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getauth } from "../../Store/Authentication/selectors";
import { login } from "../../Store/Authentication/actions";

import {
  getFields,
  getCountyWards,
  addWardWidget
} from "../../Store/Weather/actions";
import {
  getFetchFieldsProcess,
  getCounties,
  getFields as getFieldsSelector,
  getWardOptions,
  getWards
} from "../../Store/Weather/selectors";

import Banner from "./Banner";
import FieldWidget from "./FieldWidget";
import FieldSelectionWidget from "./FieldSelectionWidget";

class Home extends Component {
  constructor(props) {
    super(props);

    this.countyChanged = this.countyChanged.bind(this);
    this.addWardWidgetHandler = this.addWardWidgetHandler.bind(this)
  }
  componentDidMount() {
    // this.props.login();
    this.props.getFields();
  }

  countyChanged(countyName) {
    //filter the counties
    // alert(countyName);
    this.props.getCountyWards(countyName);
  }

  addWardWidgetHandler(ward){
    // console.log(ward)
    this.props.addWardWidget(ward)
  }

  render() {
    let { counties, wardOptions } = this.props;
    return (
      <div>
        <Banner />
        <FieldSelectionWidget
          counties={counties}
          wards={wardOptions}
          countyChanged={this.countyChanged}
          submitAction={this.addWardWidgetHandler}
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
    getFields: bindActionCreators(getFields, dispatch),
    getCountyWards: bindActionCreators(getCountyWards, dispatch),
    addWardWidget: bindActionCreators(addWardWidget, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
