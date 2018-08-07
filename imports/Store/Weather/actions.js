import * as actionTypes from "./actionTypes";

const provisionalFields = [
  {
    latitude: 0.33,
    longitude: 37.54,
    WARD_NAME: "BULLA PESA",
    CONSTITUENCY: "ISIOLO NORTH",
    COUNTY_NAME: "ISIOLO"
  },
  {
    latitude: 0.48,
    longitude: 37.47,
    WARD_NAME: "BURAT",
    CONSTITUENCY: "ISIOLO NORTH",
    COUNTY_NAME: "ISIOLO"
  },
  {
    latitude: 1.15,
    longitude: 38.2,
    WARD_NAME: "CHARI",
    CONSTITUENCY: "ISIOLO NORTH",
    COUNTY_NAME: "ISIOLO"
  },
  {
    latitude: 1.58,
    longitude: 38.84,
    WARD_NAME: "CHERAB",
    CONSTITUENCY: "ISIOLO NORTH",
    COUNTY_NAME: "ISIOLO"
  },
  {
    latitude: 0.5,
    longitude: 38.57,
    WARD_NAME: "GARBATULLA",
    CONSTITUENCY: "ISIOLO SOUTH",
    COUNTY_NAME: "ISIOLO"
  },
  {
    latitude: 0.48,
    longitude: 38.23,
    WARD_NAME: "KINNA",
    CONSTITUENCY: "ISIOLO SOUTH",
    COUNTY_NAME: "ISIOLO"
  },
  {
    latitude: 0.66,
    longitude: 37.8,
    WARD_NAME: "NGARE MARA",
    CONSTITUENCY: "ISIOLO NORTH",
    COUNTY_NAME: "ISIOLO"
  },
  {
    latitude: 0.66,
    longitude: 37.11,
    WARD_NAME: "OLDO/NYIRO",
    CONSTITUENCY: "ISIOLO NORTH",
    COUNTY_NAME: "ISIOLO"
  },
  {
    latitude: 0.94,
    longitude: 39.05,
    WARD_NAME: "SERICHO",
    CONSTITUENCY: "ISIOLO SOUTH",
    COUNTY_NAME: "ISIOLO"
  },
  {
    latitude: 3.01,
    longitude: 38.99,
    WARD_NAME: "BUTIYE",
    CONSTITUENCY: "MOYALE",
    COUNTY_NAME: "MARSABIT"
  },
  {
    latitude: 4.11,
    longitude: 37.03,
    WARD_NAME: "DUKANA",
    CONSTITUENCY: "NORTH HORR",
    COUNTY_NAME: "MARSABIT"
  },
  {
    latitude: 3.22,
    longitude: 39.27,
    WARD_NAME: "GOLBO",
    CONSTITUENCY: "MOYALE",
    COUNTY_NAME: "MARSABIT"
  },
  {
    latitude: 4.15,
    longitude: 36.4,
    WARD_NAME: "ILLERET",
    CONSTITUENCY: "NORTH HORR",
    COUNTY_NAME: "MARSABIT"
  },
  {
    latitude: 2.3,
    longitude: 37.92,
    WARD_NAME: "KARARE",
    CONSTITUENCY: "SAKU",
    COUNTY_NAME: "MARSABIT"
  },
  {
    latitude: 2.5,
    longitude: 37.24,
    WARD_NAME: "KARGI/SOUTH HORR",
    CONSTITUENCY: "LAISAMIS",
    COUNTY_NAME: "MARSABIT"
  },
  {
    latitude: 2.14,
    longitude: 37.44,
    WARD_NAME: "KORR/NGURUNIT",
    CONSTITUENCY: "LAISAMIS",
    COUNTY_NAME: "MARSABIT"
  },
  {
    latitude: 1.64,
    longitude: 37.84,
    WARD_NAME: "LAISAMIS",
    CONSTITUENCY: "LAISAMIS",
    COUNTY_NAME: "MARSABIT"
  },
  {
    latitude: 2.05,
    longitude: 38.11,
    WARD_NAME: "LOGO LOGO",
    CONSTITUENCY: "LAISAMIS",
    COUNTY_NAME: "MARSABIT"
  },
  {
    latitude: 2.94,
    longitude: 36.83,
    WARD_NAME: "LOIYANGALANI",
    CONSTITUENCY: "LAISAMIS",
    COUNTY_NAME: "MARSABIT"
  },
  {
    latitude: 3.31,
    longitude: 37.66,
    WARD_NAME: "MAIKONA",
    CONSTITUENCY: "NORTH HORR",
    COUNTY_NAME: "MARSABIT"
  },
  {
    latitude: 2.54,
    longitude: 37.88,
    WARD_NAME: "MARSABIT CENTRAL",
    CONSTITUENCY: "SAKU",
    COUNTY_NAME: "MARSABIT"
  },
  {
    latitude: 3.46,
    longitude: 39.04,
    WARD_NAME: "MOYALE TOWNSHIP",
    CONSTITUENCY: "MOYALE",
    COUNTY_NAME: "MARSABIT"
  },
  {
    latitude: 3.64,
    longitude: 36.77,
    WARD_NAME: "NORTH HORR",
    CONSTITUENCY: "NORTH HORR",
    COUNTY_NAME: "MARSABIT"
  },
  {
    latitude: 3.18,
    longitude: 38.71,
    WARD_NAME: "OBBU",
    CONSTITUENCY: "MOYALE",
    COUNTY_NAME: "MARSABIT"
  },
  {
    latitude: 2.47,
    longitude: 38.04,
    WARD_NAME: "SAGANTE/JALDESA",
    CONSTITUENCY: "SAKU",
    COUNTY_NAME: "MARSABIT"
  },
  {
    latitude: 3.54,
    longitude: 38.71,
    WARD_NAME: "SOLOLO",
    CONSTITUENCY: "MOYALE",
    COUNTY_NAME: "MARSABIT"
  },
  {
    latitude: 2.69,
    longitude: 38.44,
    WARD_NAME: "TURBI",
    CONSTITUENCY: "NORTH HORR",
    COUNTY_NAME: "MARSABIT"
  },
  {
    latitude: 3.12,
    longitude: 38.58,
    WARD_NAME: "URAN",
    CONSTITUENCY: "MOYALE",
    COUNTY_NAME: "MARSABIT"
  }
];

//#region observations and forecasts
export const getDailyObservations = field => {
  return dispatch => {
    dispatch({
      type: actionTypes.DAILY_OBSERVATIONS_REQESTED,
      payload: field
    });

    //TODO get observations from awhere API

    //use dummy data
    const provisionalObservations = {
      observations: [
        {
          date: "2018-07-30",
          location: {
            latitude: 2.341097,
            longitude: 38.000405,
            fieldId: "marsasbitField"
          },
          temperatures: {
            max: 28.059999465942383,
            min: 16.559999465942383,
            units: "C"
          },
          precipitation: {
            amount: 0,
            units: "mm"
          },
          solar: {
            amount: 5174.3310546875,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            max: 90.879997253417969,
            min: 44.220001220703125
          },
          wind: {
            morningMax: 4.9962482452392578,
            dayMax: 5.94850492477417,
            average: 3.100651741027832,
            units: "m/sec"
          },
          _links: {
            self: {
              href: "/v2/weather/fields/marsasbitField/observations/2018-07-30"
            },
            curies: [
              {
                name: "awhere",
                href: "http://awhere.com/rels/{rel}",
                templated: true
              }
            ],
            "awhere:field": {
              href: "/v2/fields/marsasbitField"
            }
          }
        },
        {
          date: "2018-07-31",
          location: {
            latitude: 2.341097,
            longitude: 38.000405,
            fieldId: "marsasbitField"
          },
          temperatures: {
            max: 28.040000915527344,
            min: 16.8799991607666,
            units: "C"
          },
          precipitation: {
            amount: 0,
            units: "mm"
          },
          solar: {
            amount: 5164.76806640625,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            max: 89.05999755859375,
            min: 57.7599983215332
          },
          wind: {
            morningMax: 3.5139861106872559,
            dayMax: 5.4931044578552246,
            average: 2.8267834186553955,
            units: "m/sec"
          },
          _links: {
            self: {
              href: "/v2/weather/fields/marsasbitField/observations/2018-07-31"
            },
            curies: [
              {
                name: "awhere",
                href: "http://awhere.com/rels/{rel}",
                templated: true
              }
            ],
            "awhere:field": {
              href: "/v2/fields/marsasbitField"
            }
          }
        },
        {
          date: "2018-08-01",
          location: {
            latitude: 2.341097,
            longitude: 38.000405,
            fieldId: "marsasbitField"
          },
          temperatures: {
            max: 29.829999923706055,
            min: 17.530000686645508,
            units: "C"
          },
          precipitation: {
            amount: 0,
            units: "mm"
          },
          solar: {
            amount: 5562.751953125,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            max: 87.94000244140625,
            min: 34.060001373291016
          },
          wind: {
            morningMax: 3.8232979774475098,
            dayMax: 4.6210412979125977,
            average: 3.2190854549407959,
            units: "m/sec"
          },
          _links: {
            self: {
              href: "/v2/weather/fields/marsasbitField/observations/2018-08-01"
            },
            curies: [
              {
                name: "awhere",
                href: "http://awhere.com/rels/{rel}",
                templated: true
              }
            ],
            "awhere:field": {
              href: "/v2/fields/marsasbitField"
            }
          }
        },
        {
          date: "2018-08-02",
          location: {
            latitude: 2.341097,
            longitude: 38.000405,
            fieldId: "marsasbitField"
          },
          temperatures: {
            max: 29.780000686645508,
            min: 16.590000152587891,
            units: "C"
          },
          precipitation: {
            amount: 0,
            units: "mm"
          },
          solar: {
            amount: 5946.8486328125,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            max: 81.680000305175781,
            min: 28.149999618530273
          },
          wind: {
            morningMax: 4.93909215927124,
            dayMax: 5.5593037605285645,
            average: 3.541196346282959,
            units: "m/sec"
          },
          _links: {
            self: {
              href: "/v2/weather/fields/marsasbitField/observations/2018-08-02"
            },
            curies: [
              {
                name: "awhere",
                href: "http://awhere.com/rels/{rel}",
                templated: true
              }
            ],
            "awhere:field": {
              href: "/v2/fields/marsasbitField"
            }
          }
        },
        {
          date: "2018-08-03",
          location: {
            latitude: 2.341097,
            longitude: 38.000405,
            fieldId: "marsasbitField"
          },
          temperatures: {
            max: 28.239999771118164,
            min: 17.170000076293945,
            units: "C"
          },
          precipitation: {
            amount: 0,
            units: "mm"
          },
          solar: {
            amount: 5791.05615234375,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            max: 82.05999755859375,
            min: 32.630001068115234
          },
          wind: {
            morningMax: 4.8107609748840332,
            dayMax: 5.8945527076721191,
            average: 3.3532423973083496,
            units: "m/sec"
          },
          _links: {
            self: {
              href: "/v2/weather/fields/marsasbitField/observations/2018-08-03"
            },
            curies: [
              {
                name: "awhere",
                href: "http://awhere.com/rels/{rel}",
                templated: true
              }
            ],
            "awhere:field": {
              href: "/v2/fields/marsasbitField"
            }
          }
        },
        {
          date: "2018-08-04",
          location: {
            latitude: 2.341097,
            longitude: 38.000405,
            fieldId: "marsasbitField"
          },
          temperatures: {
            max: 28.3700008392334,
            min: 17.020000457763672,
            units: "C"
          },
          precipitation: {
            amount: 0,
            units: "mm"
          },
          solar: {
            amount: 5768.3056640625,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            max: 85.199996948242188,
            min: 31.590000152587891
          },
          wind: {
            morningMax: 4.2617273330688477,
            dayMax: 6.4642081260681152,
            average: 3.9052431583404541,
            units: "m/sec"
          },
          _links: {
            self: {
              href: "/v2/weather/fields/marsasbitField/observations/2018-08-04"
            },
            curies: [
              {
                name: "awhere",
                href: "http://awhere.com/rels/{rel}",
                templated: true
              }
            ],
            "awhere:field": {
              href: "/v2/fields/marsasbitField"
            }
          }
        },
        {
          date: "2018-08-05",
          location: {
            latitude: 2.341097,
            longitude: 38.000405,
            fieldId: "marsasbitField"
          },
          temperatures: {
            max: 26.110000610351563,
            min: 17.219999313354492,
            units: "C"
          },
          precipitation: {
            amount: 0,
            units: "mm"
          },
          solar: {
            amount: 4778.94970703125,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            max: 87.290000915527344,
            min: 39.419998168945313
          },
          wind: {
            morningMax: 5.15496826171875,
            dayMax: 5.87666130065918,
            average: 3.66076922416687,
            units: "m/sec"
          },
          _links: {
            self: {
              href: "/v2/weather/fields/marsasbitField/observations/2018-08-05"
            },
            curies: [
              {
                name: "awhere",
                href: "http://awhere.com/rels/{rel}",
                templated: true
              }
            ],
            "awhere:field": {
              href: "/v2/fields/marsasbitField"
            }
          }
        }
      ],
      _links: {
        self: {
          href:
            "/v2/weather/fields/marsasbitField/observations/2018-07-30,2018-08-05"
        }
      }
    };

    //update the store
    dispatch({
      type: actionTypes.DAILY_OBSERVATIONS_SUCCEEDED,
      payload: provisionalObservations
    });
  };
};

//#endregion

//#region fields

export const getFields = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.FETCH_FIELD_REQESTED
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
      type: actionTypes.FETCH_COUNTY_WARDS_REQESTED,
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

//#endregion
