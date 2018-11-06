import * as actionTypes from "./actionTypes";
import * as processTypes from "../Shared/processTypes";
import storage from "redux-persist/lib/storage";

const initialState = {
  _sendMessageProcess: { status: processTypes.IDLE }
};

const feedbackPersistConfig = {
  key: "feedback",
  storage,
  blacklist: ["_sendMesageProcess"]
};

export const feedbackReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.SEND_MESSAGE_REQUESTED:
      return {
        ...state,
        _sendMessageProcess: { status: processTypes.PROCESSING }
      };

    case actionTypes.SEND_MESSAGE_SUCCEEDED:
      return {
        ...state,
        _sendMessageProcess: { status: processTypes.SUCCESS }
      };

    case actionTypes.SEND_MESSAGE_FAILED:
      return {
        ...state,
        _sendMessageProcess: { status: processTypes.ERROR }
      };

    default:
      return state;
  }
};

export default feedbackReducer;
