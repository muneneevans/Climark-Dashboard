import * as actionTypes from "./actionTypes";
import WeatherService from "./services";

const provisionalFields = [
  {
    latitude: 0.33,
    longitude: 37.54,
    WARD_NAME: "BULLA PESA",
    CONSTITUENCY: "ISIOLO NORTH",
    COUNTY_NAME: "ISIOLO",
    LOCATION_ID: 10275441
  },
  {
    latitude: 0.48,
    longitude: 37.47,
    WARD_NAME: "BURAT",
    CONSTITUENCY: "ISIOLO NORTH",
    COUNTY_NAME: "ISIOLO",
    LOCATION_ID: 10323753
  },
  {
    latitude: 1.15,
    longitude: 38.2,
    WARD_NAME: "CHARI",
    CONSTITUENCY: "ISIOLO NORTH",
    COUNTY_NAME: "ISIOLO",
    LOCATION_ID: 10246851
  },
  {
    latitude: 1.58,
    longitude: 38.84,
    WARD_NAME: "CHERAB",
    CONSTITUENCY: "ISIOLO NORTH",
    COUNTY_NAME: "ISIOLO",
    LOCATION_ID: 10200557
  },
  {
    latitude: 0.5,
    longitude: 38.57,
    WARD_NAME: "GARBATULLA",
    CONSTITUENCY: "ISIOLO SOUTH",
    COUNTY_NAME: "ISIOLO",
    LOCATION_ID: 10279489
    
  },
  {
    latitude: 0.48,
    longitude: 38.23,
    WARD_NAME: "KINNA",
    CONSTITUENCY: "ISIOLO SOUTH",
    COUNTY_NAME: "ISIOLO",
    LOCATION_ID: 10226293
  },
  {
    latitude: 0.66,
    longitude: 37.8,
    WARD_NAME: "NGARE MARA",
    CONSTITUENCY: "ISIOLO NORTH",
    COUNTY_NAME: "ISIOLO",
    LOCATION_ID: 10262227
  },
  {
    latitude: 0.66,
    longitude: 37.11,
    WARD_NAME: "OLDO/NYIRO",
    CONSTITUENCY: "ISIOLO NORTH",
    COUNTY_NAME: "ISIOLO",
    LOCATION_ID: 10243072
  },
  {
    latitude: 0.94,
    longitude: 39.05,
    WARD_NAME: "SERICHO",
    CONSTITUENCY: "ISIOLO SOUTH",
    COUNTY_NAME: "ISIOLO",
    LOCATION_ID: 10221179
  },
  {
    latitude: 3.01,
    longitude: 38.99,
    WARD_NAME: "BUTIYE",
    CONSTITUENCY: "MOYALE",
    COUNTY_NAME: "MARSABIT",
    LOCATION_ID: 10203946
  },
  {
    latitude: 4.11,
    longitude: 37.03,
    WARD_NAME: "DUKANA",
    CONSTITUENCY: "NORTH HORR",
    COUNTY_NAME: "MARSABIT",
    LOCATION_ID: 10218019
  },
  {
    latitude: 3.22,
    longitude: 39.27,
    WARD_NAME: "GOLBO",
    CONSTITUENCY: "MOYALE",
    COUNTY_NAME: "MARSABIT",
    LOCATION_ID: 10491050
  },
  {
    latitude: 4.15,
    longitude: 36.4,
    WARD_NAME: "ILLERET",
    CONSTITUENCY: "NORTH HORR",
    COUNTY_NAME: "MARSABIT",
    LOCATION_ID: 10331288
  },
  {
    latitude: 2.3,
    longitude: 37.92,
    WARD_NAME: "KARARE",
    CONSTITUENCY: "SAKU",
    COUNTY_NAME: "MARSABIT",
    LOCATION_ID: 10228209
  },
  {
    latitude: 2.5,
    longitude: 37.24,
    WARD_NAME: "KARGI/SOUTH HORR",
    CONSTITUENCY: "LAISAMIS",
    COUNTY_NAME: "MARSABIT",
    LOCATION_ID: 10274707
  },
  {
    latitude: 2.14,
    longitude: 37.44,
    WARD_NAME: "KORR/NGURUNIT",
    CONSTITUENCY: "LAISAMIS",
    COUNTY_NAME: "MARSABIT",
    LOCATION_ID: 10196117
  },
  {
    latitude: 1.64,
    longitude: 37.84,
    WARD_NAME: "LAISAMIS",
    CONSTITUENCY: "LAISAMIS",
    COUNTY_NAME: "MARSABIT",
    LOCATION_ID: 10256046
  },
  {
    latitude: 2.05,
    longitude: 38.11,
    WARD_NAME: "LOGO LOGO",
    CONSTITUENCY: "LAISAMIS",
    COUNTY_NAME: "MARSABIT",
    LOCATION_ID: 10325610
  },
  {
    latitude: 2.94,
    longitude: 36.83,
    WARD_NAME: "LOIYANGALANI",
    CONSTITUENCY: "LAISAMIS",
    COUNTY_NAME: "MARSABIT",
    LOCATION_ID: 10271892
  },
  {
    latitude: 3.31,
    longitude: 37.66,
    WARD_NAME: "MAIKONA",
    CONSTITUENCY: "NORTH HORR",
    COUNTY_NAME: "MARSABIT",
    LOCATION_ID: 10230238
  },
  {
    latitude: 2.54,
    longitude: 37.88,
    WARD_NAME: "MARSABIT CENTRAL",
    CONSTITUENCY: "SAKU",
    COUNTY_NAME: "MARSABIT",
    LOCATION_ID: 10255893
  },
  {
    latitude: 3.46,
    longitude: 39.04,
    WARD_NAME: "MOYALE TOWNSHIP",
    CONSTITUENCY: "MOYALE",
    COUNTY_NAME: "MARSABIT",
    LOCATION_ID: 10306201
  },
  {
    latitude: 3.64,
    longitude: 36.77,
    WARD_NAME: "NORTH HORR",
    CONSTITUENCY: "NORTH HORR",
    COUNTY_NAME: "MARSABIT",
    LOCATION_ID: 10256828

  },
  {
    latitude: 3.18,
    longitude: 38.71,
    WARD_NAME: "OBBU",
    CONSTITUENCY: "MOYALE",
    COUNTY_NAME: "MARSABIT",
    LOCATION_ID: 10236602
  },
  {
    latitude: 2.47,
    longitude: 38.04,
    WARD_NAME: "SAGANTE/JALDESA",
    CONSTITUENCY: "SAKU",
    COUNTY_NAME: "MARSABIT",
    LOCATION_ID: 10316435
  },
  {
    latitude: 3.54,
    longitude: 38.71,
    WARD_NAME: "SOLOLO",
    CONSTITUENCY: "MOYALE",
    COUNTY_NAME: "MARSABIT",
    LOCATION_ID: 10206114
  },
  {
    latitude: 2.69,
    longitude: 38.44,
    WARD_NAME: "TURBI",
    CONSTITUENCY: "NORTH HORR",
    COUNTY_NAME: "MARSABIT",
    LOCATION_ID: 10248056
  },
  {
    latitude: 3.12,
    longitude: 38.58,
    WARD_NAME: "URAN",
    CONSTITUENCY: "MOYALE",
    COUNTY_NAME: "MARSABIT",
    LOCATION_ID: 10284578
  }
];


//#region observations and forecasts
export const getWardDailyObservations = ward => {
  return (dispatch, getState) => {
    dispatch({
      type: actionTypes.FETCH_WARD_DAILY_OBSERVATIONS_REQUESTED,
      payload: { ward }
    });

    const accessToken = getState().auth.auth.token;
    //TODO get observations from awhere API
    return WeatherService.getDailyObservations(
      ward,
      getState().auth.auth.token
    ).then(response => {
      if (response.status === 200) {
        response.json().then(dailyObservations => {
          //update the store
          return dispatch({
            type: actionTypes.FETCH_WARD_DAILY_OBSERVATIONS_SUCCEEDED,
            payload: { ward, dailyObservations: dailyObservations.observations }
          });
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_WARD_DAILY_OBSERVATIONS_FAILED,
          payload: { ward }
        });
      }
    });
    //use dummy data
  };
};
export const getWardForecasts = ward => {
  return (dispatch, getState) => {
    dispatch({
      type: actionTypes.FETCH_WARD_FORECASTS_REQUESTED,
      payload: { ward }
    });

    const accessToken = getState().auth.auth.token;
    //TODO get observations from awhere API
    return WeatherService.getForecasts(ward, getState().auth.auth.token).then(
      response => {
        if (response.status === 200) {
          response.json().then(forecasts => {
            //update the store

            return dispatch({
              type: actionTypes.FETCH_WARD_FORECASTS_SUCCEEDED,
              payload: { ward, forecasts: forecasts.forecasts }
            });
          });
        } else {
          dispatch({
            type: actionTypes.FETCH_WARD_DAILY_OBSERVATIONS_FAILED,
            payload: { ward }
          });
        }
      }
    );
   
  };
};
export const getNorms = ward => {
  return (dispatch, getState) => {
    dispatch({
      type: actionTypes.FETCH_WARD_NORMS_REQUESTED,
      payload: { ward }
    });

    const accessToken = getState().auth.auth.token;
    //TODO get observations from awhere API
    return WeatherService.getNorms(ward, getState().auth.auth.token).then(
      response => {
        if (response.status === 200) {
          response.json().then(norms => {
            //update the store

            return dispatch({
              type: actionTypes.FETCH_WARD_NORMS_SUCCEEDED,
              payload: { ward, norms: norms.norms }
            });
          });
        } else {
          dispatch({
            type: actionTypes.FETCH_WARD_NORMS_FAILED,
            payload: { ward }
          });
        }
      }
    );
   
  };
};

//#endregion

//#region fields

export const getFields = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.FETCH_FIELD_REQUESTED
    });

    //TODO get fields from api

    dispatch({
      type: actionTypes.FETCH_FIELD_SUCCEEDED,
      payload: provisionalFields
    });
  };
};

export const getCountyWards = county => {
  return dispatch => {
    dispatch({
      type: actionTypes.FETCH_COUNTY_WARDS_REQUESTED,
      payload: county
    });

    //TODO get the wards from API
    //using provisional data for now
    dispatch({
      type: actionTypes.FETCH_COUNTY_WARDS_SUCCEEDED,
      payload: provisionalFields.filter(
        field => field.COUNTY_NAME === county.COUNTY_NAME
      )
    });
  };
};

export const addWardWidget = ward => {
  return dispatch => {
    dispatch({
      type: actionTypes.ADD_WARD_WIDGET_REQUESTED,
      payload: { ward }
    });

    dispatch(getWardDailyObservations(ward));
    dispatch(getWardForecasts(ward));
    dispatch(getNorms(ward));
  };
};

//#endregion
