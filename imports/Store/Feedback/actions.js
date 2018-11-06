import * as actionTypes from "./actionTypes";
import FeedbackService from "./services";

export const sendMessage = message => {
  return (dispatch, getState) => {
    dispatch({
      type: actionTypes.SEND_MESSAGE_REQUESTED,
      payload: { message }
    });

    ///send the message
    FeedbackService.sendMessage(message)
      .then(response => response.json())
      .then(response => {
        if (response.status === 201) {
          Promise.resolve(response.json()).then(token => {
            dispatch({
              type: actionTypes.SEND_MESSAGE_SUCCEEDED
            });
          });
        } else {
          dispatch({
            type: actionTypes.SEND_MESSAGE_FAILED
          });
        }
      });
  };
};
