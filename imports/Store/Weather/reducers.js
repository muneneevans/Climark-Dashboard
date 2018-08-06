import * as actionTypes from "./actionTypes";
import * as processTypes from "../Shared/processTypes";

const initialState = {
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
    default:
      return state;
  }
};


export default weatherReducer