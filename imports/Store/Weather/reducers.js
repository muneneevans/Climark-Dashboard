import * as actionTypes from "./actionTypes";
import * as processTypes from "../Shared/processTypes";

const initialState = {
  _fetchCountyWardsProcess: { status: processTypes.IDLE },
  countyWards: [],

  fields: [],
  _fetchFieldsProcess: { status: processTypes.IDLE }
};

const weatherReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.FETCH_FIELD_REQESTED:
      return {
        ...state,
        _fetchFieldsProcess: { staus: processTypes.PROCESSING }
      };

    case actionTypes.FETCH_FIELD_SUCCEEDED:
      return {
        ...state,
        _fetchFieldsProcess: { status: processTypes.SUCCESS },
        fields: action.payload
      };

    case actionTypes.FETCH_COUNTY_WARDS_REQESTED:
      return {
        ...state,
        _fetchCountyWardsProcess: { status: processTypes.PROCESSING }
      };

    case actionTypes.FETCH_COUNTY_WARDS_SUCCEEDED:
      return {
        ...state,
        _fetchCountyWardsProcess: { status: processTypes.SUCCESS },
        countyWards: action.payload
      };
    default:
      return state;
  }
};

export default weatherReducer;
