import * as actionTypes from "./actionTypes";
import AuthenticationService from "./services";
import { isEmpty, isUndefined } from "../../lib/utils";

export const manageToken = () => {
  return (dispatch, getState) => {
    const timer = setTimeout(() => {
      // Refresh the token
      dispatch({ type: actionTypes.REFRESH_AUTH_REQUESTED });
      if (!isEmpty(getState().auth.auth.token)) {
        AuthenticationService.refreshToken(getState().auth.auth.token)
          .then(response => {
            if (response.status === 200) {
              Promise.resolve(response.json()).then(token => {
                dispatch({
                  type: actionTypes.REFRESH_AUTH_SUCCEEDED,
                  payload: token.token
                });
                dispatch(manageToken());
              });
            } else {
              //try to login from saved credentials
              //check for saved credentials
              if (!isEmpty(getState().auth.user)) {
                dispatch(login(getState().auth.user));
              } else {
                dispatch({
                  type: actionTypes.REFRESH_AUTH_FAILED
                });
              }
              clearTimeout(timer);
            }
          })
          .catch(error => {
            throw error;
          });
      } else {
        clearTimeout(timer);
        dispatch({
          type: actionTypes.REFRESH_AUTH_FAILED
        });
      }
    }, 20000);
  };
};

export const backgroundLogin = () => {
  return dispatch => {
    dispatch(manageToken());
  };
};

export const login = () => {
  return (dispatch, getState) => {
    dispatch({
      type: actionTypes.LOG_IN_REQUESTED
    });

    return AuthenticationService.login(getState().auth.apiCredentials).then(
      response => {
        if (response.status === 200) {
          return Promise.resolve(response.json()).then(token => {
            //save the credentials given to local storage
            // dispatch({
            //   type: actionTypes.SAVE_CREDENTIALS_REQUESTED,
            //   payload: user
            // });

            // start the process of renewing the JWT tokens
            // dispatch(manageToken());
            return dispatch({
              type: actionTypes.LOG_IN_SUCCEEDED,
              payload: {
                token: token.access_token
              }
            });
          });
        } else {
          return dispatch({
            type: actionTypes.LOG_IN_FAILED
          });
        }
      }
    );
  };
};
