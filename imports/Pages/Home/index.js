import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import * as processTypes from "../../Store/Shared/processTypes";
import { getauth } from "../../Store/Authentication/selectors";
import { login } from "../../Store/Authentication/actions";
import Footer from "../Landing/Footer";

//#region redux
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
  getWards,
  getWardWidgets,
  getAddWardWidgetsProcess,
  getWidgetGraphs,
  getWardData
} from "../../Store/Weather/selectors";
//#endregion
import Appheader from "./Appheader";
// import Footer from "./../Landing/Footer"
import Banner from "./Banner";
import FieldWidget from "./FieldWidget";
import FieldSelectionWidget from "./FieldSelectionWidget";

import "./style.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.countyChanged = this.countyChanged.bind(this);
    this.addWardWidgetHandler = this.addWardWidgetHandler.bind(this);
  }
  componentDidMount() {
    this.props.login();
    this.props.getFields();
  }

  countyChanged(countyName) {
    //filter the counties

    this.props.getCountyWards(countyName);
  }

  addWardWidgetHandler(ward) {
    this.props.addWardWidget(ward);
  }

  render() {
    let {
      counties,
      wardOptions,
      addWardWidgetsProcess,
      wardWidgets,
      wardWidgetGraphs,
      history,
      wardData
    } = this.props;
    return [
      <Appheader />,
      <FieldSelectionWidget
        counties={counties}
        wards={wardOptions}
        countyChanged={this.countyChanged}
        submitAction={this.addWardWidgetHandler}
      />,
      <div>
        {addWardWidgetsProcess.status == processTypes.SUCCESS && (
          <TransitionGroup>
            {wardWidgets.map((ward, i) => (
              <CSSTransition key={ward} timeout={300} classNames="fade">
                <FieldWidget
                  key={ward}
                  title={ward}
                  graphs={wardWidgetGraphs[ward]}
                  history={history}
                  wardData={wardData[ward]}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </div>,
      <Footer />
    ];
  }
}

const mapStateToProps = state => {
  return {
    auth: getauth(state.auth),
    fields: getFieldsSelector(state),
    fetchFieldsProcess: getFetchFieldsProcess(state),
    counties: getCounties(state),
    wardOptions: getWardOptions(state),
    wards: getWards(state),
    addWardWidgetsProcess: getAddWardWidgetsProcess(state),
    wardWidgets: getWardWidgets(state),
    wardWidgetGraphs: getWidgetGraphs(state),
    wardData: getWardData(state)
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
