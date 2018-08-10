import * as actionTypes from "./actionTypes";
import * as processTypes from "../Shared/processTypes";

const initialState = {
  _fetchCountyWardsProcess: { status: processTypes.IDLE },
  countyWards: [],

  wardData: {},

  _addWardWidgetProcess: { status: processTypes.IDLE },
  wardWidgets: [],

  fields: [],
  _fetchFieldsProcess: { status: processTypes.IDLE }
};

const weatherReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.FETCH_FIELD_REQUESTED:
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

    case actionTypes.FETCH_COUNTY_WARDS_REQUESTED:
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

    case actionTypes.ADD_WARD_WIDGET_REQUESTED:
      return {
        ...state,
        _addWardWidgetProcess: { status: processTypes.SUCCESS },
        wardWidgets: [action.payload, ...state.wardWidgets],
        wardData: addnewWardToWardData(state.wardData, action.payload)
      };

    case actionTypes.FETCH_WARD_DAILY_OBSERVATIONS_REQUESTED:
      return {
        ...state,
        wardData: updateWardDailyObservations(
          state.wardData,
          action.payload.ward.WARD_NAME,
          {
            _process: processTypes.PROCESSING,
            data: []
          }
        )
      };
    case actionTypes.FETCH_WARD_DAILY_OBSERVATIONS_SUCCEEDED:
      return {
        ...state,
        wardData: updateWardDailyObservations(
          state.wardData,
          action.payload.ward.WARD_NAME,
          {
            _process: processTypes.SUCCESS,
            data: action.payload.dailyObservations
          }
        )
      };

    case actionTypes.FETCH_WARD_FORECASTS_REQUESTED:
      return {
        ...state,
        wardData: updateWardForecasts(
          state.wardData,
          action.payload.ward.WARD_NAME,
          {
            _process: processTypes.PROCESSING,
            data: []
          }
        )
      };

    case actionTypes.FETCH_WARD_FORECASTS_SUCCEEDED:
      console.log(action);
      return {
        ...state,
        wardData: updateWardForecasts(
          state.wardData,
          action.payload.ward.WARD_NAME,
          {
            _process: processTypes.SUCCESS,
            data: action.payload.forecasts
          }
        )
      };
    default:
      return state;
  }
};

const addnewWardToWardData = (wardData, newWard) => {
  wardData[newWard] = {
    dailyObservations: {
      _process: {
        status: processTypes.IDLE
      },
      data: []
    },
    forecasts: {
      _process: {
        status: processTypes.IDLE
      },
      data: []
    }
  };

  return wardData;
};

const updateWardDailyObservations = (wardData, ward, newWardData) => {
  wardData[ward].dailyObservations = newWardData;
  return wardData;
};

const updateWardForecasts = (wardData, ward, newWardData) => {
  console.log(wardData);
  wardData[ward].forecasts = newWardData;
  return wardData;
};

export default weatherReducer;
