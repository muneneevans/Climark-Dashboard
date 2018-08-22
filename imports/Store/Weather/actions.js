import * as actionTypes from "./actionTypes";
import WeatherService from "./services";

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

const provisionalForecasts = {
  forecasts: [
    {
      date: "2018-08-07",
      location: {
        latitude: 39.8282,
        longitude: -98.5795,
        fieldId: "field1"
      },
      forecast: [
        {
          startTime: "2018-08-07T00:00:00+00:00",
          endTime: "2018-08-07T00:59:59+00:00",
          conditionsCode: "911",
          conditionsText: "Mostly Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 27.149999618530273,
            max: 29.316112518310547,
            min: 27.149999618530273,
            units: "C"
          },
          precipitation: {
            chance: 95,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 87,
            sunshine: 13
          },
          solar: {
            amount: 42,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 64.0999984741211,
            max: null,
            min: null
          },
          wind: {
            average: 3.9298974103859585,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 20.802240639748355,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 28.580810546875,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.649999618530273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.679882049560547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.845781326293945,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 19.799999237060547,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.011962890625,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.400237083435059,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-07T01:00:00+00:00",
          endTime: "2018-08-07T01:59:59+00:00",
          conditionsCode: "911",
          conditionsText: "Mostly Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 27.149999618530273,
            max: 29.316732406616211,
            min: 26.881454467773438,
            units: "C"
          },
          precipitation: {
            chance: 94.166664123535156,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 87,
            sunshine: 13
          },
          solar: {
            amount: 42,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 64.0999984741211,
            max: null,
            min: null
          },
          wind: {
            average: 3.9298974103859585,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 20.675514887791753,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 28.580810546875,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.649999618530273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.679882049560547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.845781326293945,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 19.799999237060547,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.011962890625,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.400237083435059,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-07T02:00:00+00:00",
          endTime: "2018-08-07T02:59:59+00:00",
          conditionsCode: "911",
          conditionsText: "Mostly Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 27.149999618530273,
            max: 29.317968368530273,
            min: 26.3443660736084,
            units: "C"
          },
          precipitation: {
            chance: 92.5,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 87,
            sunshine: 13
          },
          solar: {
            amount: 42,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 64.0999984741211,
            max: null,
            min: null
          },
          wind: {
            average: 3.9298974103859585,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 20.422052195803055,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 28.580810546875,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.649999618530273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.679882049560547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.845781326293945,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 19.799999237060547,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.011962890625,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.400237083435059,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-07T03:00:00+00:00",
          endTime: "2018-08-07T03:59:59+00:00",
          conditionsCode: "A11",
          conditionsText: "Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 26.606021881103516,
            max: 29.319206237792969,
            min: 25.807275772094727,
            units: "C"
          },
          precipitation: {
            chance: 90.833335876464844,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 97,
            sunshine: 3
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 67.566665649414063,
            max: null,
            min: null
          },
          wind: {
            average: 3.8777997269029236,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 21.023185269312407,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 28.367464065551758,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.683332443237305,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.685188293457031,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.845781326293945,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 19.766666412353516,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.011953353881836,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.400235176086426,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-07T04:00:00+00:00",
          endTime: "2018-08-07T04:59:59+00:00",
          conditionsCode: "A11",
          conditionsText: "Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 26.062044143676758,
            max: 28.714323043823242,
            min: 25.108671188354492,
            units: "C"
          },
          precipitation: {
            chance: 91.666671752929688,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 97,
            sunshine: 3
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 71.033332824707031,
            max: null,
            min: null
          },
          wind: {
            average: 3.946216105120405,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 21.215681893708805,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 28.154117584228516,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.716667175292969,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.690494537353516,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.845781326293945,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 19.733333587646484,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.011941909790039,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.400234222412109,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-07T05:00:00+00:00",
          endTime: "2018-08-07T05:59:59+00:00",
          conditionsCode: "A11",
          conditionsText: "Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 25.51806640625,
            max: 27.503320693969727,
            min: 24.248552322387695,
            units: "C"
          },
          precipitation: {
            chance: 95,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 97,
            sunshine: 3
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 74.5,
            max: null,
            min: null
          },
          wind: {
            average: 4.1291605275341521,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 20.9965102975989,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.940771102905273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.75,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.69580078125,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.845781326293945,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 19.69999885559082,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.011930465698242,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.400232315063477,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-07T06:00:00+00:00",
          endTime: "2018-08-07T06:59:59+00:00",
          conditionsCode: "521",
          conditionsText: "Cloudy Day, Light Rain, Light Wind/Calm",
          temperatures: {
            value: 24.662036895751953,
            max: 26.292318344116211,
            min: 23.3884334564209,
            units: "C"
          },
          precipitation: {
            chance: 98.333335876464844,
            amount: 0.4166666567325592,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 75.0999984741211,
            max: null,
            min: null
          },
          wind: {
            average: 1.9980454814347868,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 20.127746034171615,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.698144912719727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.749992370605469,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.69580078125,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.84864616394043,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 19.866666793823242,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.045265197753906,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.400232315063477,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-07T07:00:00+00:00",
          endTime: "2018-08-07T07:59:59+00:00",
          conditionsCode: "521",
          conditionsText: "Cloudy Day, Light Rain, Light Wind/Calm",
          temperatures: {
            value: 23.806005477905273,
            max: 25.697347640991211,
            min: 22.541707992553711,
            units: "C"
          },
          precipitation: {
            chance: 97.5,
            amount: 0.4166666567325592,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 75.699996948242188,
            max: null,
            min: null
          },
          wind: {
            average: 1.9759985539769218,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 19.560046530912008,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.455516815185547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.749982833862305,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.69580078125,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.851510047912598,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 20.033332824707031,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.078598022460937,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.400232315063477,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-07T08:00:00+00:00",
          endTime: "2018-08-07T08:59:59+00:00",
          conditionsCode: "521",
          conditionsText: "Cloudy Day, Light Rain, Light Wind/Calm",
          temperatures: {
            value: 22.949975967407227,
            max: 25.718408584594727,
            min: 21.7083740234375,
            units: "C"
          },
          precipitation: {
            chance: 92.5,
            amount: 0.4166666567325592,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 76.300003051757813,
            max: null,
            min: null
          },
          wind: {
            average: 4.0972087002524029,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 19.294420511974966,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.212890625,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.749975204467773,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.69580078125,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.854374885559082,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 20.19999885559082,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.111930847167969,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.400232315063477,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-07T09:00:00+00:00",
          endTime: "2018-08-07T09:59:59+00:00",
          conditionsCode: "521",
          conditionsText: "Cloudy Day, Light Rain, Light Wind/Calm",
          temperatures: {
            value: 22.118741989135742,
            max: 25.739469528198242,
            min: 20.875040054321289,
            units: "C"
          },
          precipitation: {
            chance: 87.5,
            amount: 1.1041666269302368,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 81.233329772949219,
            max: null,
            min: null
          },
          wind: {
            average: 1.0356362136600914,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 19.909034098361087,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.781949996948242,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.749975204467773,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.699609756469727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.857532501220703,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 21.100000381469727,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.141355514526367,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.400232315063477,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-07T10:00:00+00:00",
          endTime: "2018-08-07T10:59:59+00:00",
          conditionsCode: "521",
          conditionsText: "Cloudy Day, Light Rain, Light Wind/Calm",
          temperatures: {
            value: 21.287508010864258,
            max: 25.566661834716797,
            min: 20.473640441894531,
            units: "C"
          },
          precipitation: {
            chance: 71.666664123535156,
            amount: 1.1041666269302368,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 86.166664123535156,
            max: null,
            min: null
          },
          wind: {
            average: 2.1844234883204474,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 20.582276980594639,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.351009368896484,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.749975204467773,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.703418731689453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.860690116882324,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 22,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.170780181884766,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.400232315063477,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-07T11:00:00+00:00",
          endTime: "2018-08-07T11:59:59+00:00",
          conditionsCode: "521",
          conditionsText: "Cloudy Day, Light Rain, Light Wind/Calm",
          temperatures: {
            value: 20.504175186157227,
            max: 25.199987411499023,
            min: 20.504175186157227,
            units: "C"
          },
          precipitation: {
            chance: 45,
            amount: 1.1041666269302368,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 91.0999984741211,
            max: null,
            min: null
          },
          wind: {
            average: 5.2805881841420081,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 21.322501787697622,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.920068740844727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.749975204467773,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.707225799560547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.863847732543945,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 22.899999618530273,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.200204849243164,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.400232315063477,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-07T12:00:00+00:00",
          endTime: "2018-08-07T12:59:59+00:00",
          conditionsCode: "311",
          conditionsText: "Partly Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 21.861988067626953,
            max: 24.83331298828125,
            min: 20.534708023071289,
            units: "C"
          },
          precipitation: {
            chance: 18.333333969116211,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 44,
            sunshine: 56
          },
          solar: {
            amount: 280,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 84.6956558227539,
            max: null,
            min: null
          },
          wind: {
            average: 5.2975332531902168,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 19.973896232188643,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.754344940185547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.749982833862305,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.710729598999023,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.867180824279785,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 22.733333587646484,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.233537673950195,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.400232315063477,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-07T13:00:00+00:00",
          endTime: "2018-08-07T13:59:59+00:00",
          conditionsCode: "311",
          conditionsText: "Partly Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 23.2677001953125,
            max: 25.552778244018555,
            min: 20.549976348876953,
            units: "C"
          },
          precipitation: {
            chance: 4.1666669845581055,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 44,
            sunshine: 56
          },
          solar: {
            amount: 280,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 78.291313171386719,
            max: null,
            min: null
          },
          wind: {
            average: 5.3815633370814782,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 19.066678629757327,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.588623046875,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.749992370605469,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.714231491088867,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.870513916015625,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 22.566667556762695,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.266872406005859,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.400232315063477,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-07T14:00:00+00:00",
          endTime: "2018-08-07T14:59:59+00:00",
          conditionsCode: "311",
          conditionsText: "Partly Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 24.673412322998047,
            max: 27.358386993408203,
            min: 20.549976348876953,
            units: "C"
          },
          precipitation: {
            chance: 2.5,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 44,
            sunshine: 56
          },
          solar: {
            amount: 280,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 71.886970520019531,
            max: null,
            min: null
          },
          wind: {
            average: 5.529620917724591,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 18.571914290190779,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.422901153564453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.75,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.717735290527344,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.873847961425781,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 22.399999618530273,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.300205230712891,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.400232315063477,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-07T15:00:00+00:00",
          endTime: "2018-08-07T15:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 26.471208572387695,
            max: 29.163993835449219,
            min: 20.549976348876953,
            units: "C"
          },
          precipitation: {
            chance: 0.83333337306976318,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 788,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 62.523231506347656,
            max: null,
            min: null
          },
          wind: {
            average: 5.3883392592735113,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 17.213093478148931,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.743358612060547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.767204284667969,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.718450546264648,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.877181053161621,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 22.100000381469727,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.300205230712891,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.400232315063477,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-07T16:00:00+00:00",
          endTime: "2018-08-07T16:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 28.269002914428711,
            max: 30.347330093383789,
            min: 22.155817031860352,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 788,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 53.159492492675781,
            max: null,
            min: null
          },
          wind: {
            average: 5.25156745475402,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 15.963099103081834,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.063817977905273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.784406661987305,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.719165802001953,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.880514144897461,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 21.799999237060547,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.300205230712891,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.400232315063477,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-07T17:00:00+00:00",
          endTime: "2018-08-07T17:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 30.066797256469727,
            max: 30.908397674560547,
            min: 25.367498397827148,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 788,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 43.795753479003906,
            max: null,
            min: null
          },
          wind: {
            average: 5.1196660349312992,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 14.668097778467512,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.38427734375,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.801610946655273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.719882965087891,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.8838472366333,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 21.5,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.300205230712891,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.400232315063477,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-07T18:00:00+00:00",
          endTime: "2018-08-07T18:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 30.627864837646484,
            max: 31.469465255737305,
            min: 28.579179763793945,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 890,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 40.5540657043457,
            max: null,
            min: null
          },
          wind: {
            average: 4.6464688988317882,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 15.168643834194961,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.831241607666016,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.784406661987305,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.725189208984375,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.884857177734375,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 21.166666030883789,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.266872406005859,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.400232315063477,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-07T19:00:00+00:00",
          endTime: "2018-08-07T19:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 31.188932418823242,
            max: 31.766666412353516,
            min: 30.185020446777344,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 890,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 37.3123779296875,
            max: null,
            min: null
          },
          wind: {
            average: 4.2102769061715257,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 14.720581840857916,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.278205871582031,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.767204284667969,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.730495452880859,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.885866165161133,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 20.833332061767578,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.233537673950195,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.400232315063477,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-07T20:00:00+00:00",
          endTime: "2018-08-07T20:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 31.75,
            max: 31.799999237060547,
            min: 30.185020446777344,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 890,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 34.070686340332031,
            max: null,
            min: null
          },
          wind: {
            average: 3.8237749473827005,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 13.33312198930831,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.725170135498047,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.75,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.735801696777344,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.886875152587891,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 20.5,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.200204849243164,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.400232315063477,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-07T21:00:00+00:00",
          endTime: "2018-08-07T21:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 31.356666564941406,
            max: 31.833333969116211,
            min: 30.185020446777344,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 544,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 34.78045654296875,
            max: null,
            min: null
          },
          wind: {
            average: 3.61732554048587,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 13.664503498598089,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.933446884155273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.75,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.739133834838867,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.889850616455078,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 20.299999237060547,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.166872024536133,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.366899490356445,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-07T22:00:00+00:00",
          endTime: "2018-08-07T22:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 30.963333129882812,
            max: 31.591455459594727,
            min: 29.227972030639648,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 544,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 35.490230560302734,
            max: null,
            min: null
          },
          wind: {
            average: 3.4109833739908684,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 13.448326784926325,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 28.1417236328125,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.75,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.742467880249023,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.892825126647949,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 20.100000381469727,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.133537292480469,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.333565711975098,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-07T23:00:00+00:00",
          endTime: "2018-08-07T23:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 30.569999694824219,
            max: 31.074365615844727,
            min: 27.313877105712891,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 544,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 36.200000762939453,
            max: null,
            min: null
          },
          wind: {
            average: 3.2047691574998929,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 12.680497469464441,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 28.350000381469727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.75,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.745800018310547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.895800590515137,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 19.899999618530273,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.100204467773438,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        }
      ],
      _links: {
        self: {
          href: "/v2/weather/fields/field1/forecasts/2018-08-07"
        },
        curies: [
          {
            name: "awhere",
            href: "http://awhere.com/rels/{rel}",
            templated: true
          }
        ],
        "awhere:field": {
          href: "/v2/fields/field1"
        }
      }
    },
    {
      date: "2018-08-08",
      location: {
        latitude: 39.8282,
        longitude: -98.5795,
        fieldId: "field1"
      },
      forecast: [
        {
          startTime: "2018-08-08T00:00:00+00:00",
          endTime: "2018-08-08T00:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 28.528366088867187,
            max: 30.557275772094727,
            min: 25.399782180786133,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 59,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 40.166667938232422,
            max: null,
            min: null
          },
          wind: {
            average: 2.7078441232985182,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 13.191444717098802,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 28.090282440185547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.783332824707031,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.749134063720703,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.899133682250977,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 19.866666793823242,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.100204467773438,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-08T01:00:00+00:00",
          endTime: "2018-08-08T01:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 26.486732482910156,
            max: 30.298957824707031,
            min: 24.056068420410156,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 59,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 44.133335113525391,
            max: null,
            min: null
          },
          wind: {
            average: 2.2276949797142489,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 13.918857118322693,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.83056640625,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.816667556762695,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.752468109130859,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.902467727661133,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 19.833333969116211,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.100204467773438,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-08T02:00:00+00:00",
          endTime: "2018-08-08T02:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 24.445096969604492,
            max: 30.299413681030273,
            min: 23.282733917236328,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 59,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 48.099998474121094,
            max: null,
            min: null
          },
          wind: {
            average: 1.7779653228274717,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 14.899284101518472,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.570850372314453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.850000381469727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.755800247192383,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.905800819396973,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 19.799999237060547,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.100204467773438,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-08T03:00:00+00:00",
          endTime: "2018-08-08T03:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 23.67009162902832,
            max: 30.299869537353516,
            min: 22.509401321411133,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 53.099998474121094,
            max: null,
            min: null
          },
          wind: {
            average: 1.1964787807866886,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 16.0871313262253,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.171792984008789,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.850000381469727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.756269454956055,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.905800819396973,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 19.766666412353516,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.133537292480469,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-08T04:00:00+00:00",
          endTime: "2018-08-08T04:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 22.895084381103516,
            max: 28.941747665405273,
            min: 21.966464996337891,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 58.099998474121094,
            max: null,
            min: null
          },
          wind: {
            average: 1.3817776174521919,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 16.616580903786716,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.772737503051758,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.850000381469727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.756738662719727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.905800819396973,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 19.733333587646484,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.166868209838867,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-08T05:00:00+00:00",
          endTime: "2018-08-08T05:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 22.120079040527344,
            max: 26.225048065185547,
            min: 21.6539249420166,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 63.099998474121094,
            max: null,
            min: null
          },
          wind: {
            average: 2.1434562268256019,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 16.491430701503262,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.373682022094727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.850000381469727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.7572078704834,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.905800819396973,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 19.69999885559082,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.200199127197266,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-08T06:00:00+00:00",
          endTime: "2018-08-08T06:59:59+00:00",
          conditionsCode: "411",
          conditionsText: "Mostly Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 21.804376602172852,
            max: 23.508350372314453,
            min: 21.341386795043945,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 70,
            sunshine: 30
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 65.166664123535156,
            max: null,
            min: null
          },
          wind: {
            average: 1.8361361767608495,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 15.562069562165696,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.001091003417969,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.849992752075195,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.760715484619141,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.911823272705078,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 19.666666030883789,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.200199127197266,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-08T07:00:00+00:00",
          endTime: "2018-08-08T07:59:59+00:00",
          conditionsCode: "411",
          conditionsText: "Mostly Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 21.488676071166992,
            max: 22.149999618530273,
            min: 21.095930099487305,
            units: "C"
          },
          precipitation: {
            chance: 0.83333337306976318,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 70,
            sunshine: 30
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 67.233329772949219,
            max: null,
            min: null
          },
          wind: {
            average: 1.5288621261996511,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 15.286501261426205,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.628499984741211,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.849983215332031,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.764225006103516,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.917844772338867,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 19.633333206176758,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.200199127197266,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-08T08:00:00+00:00",
          endTime: "2018-08-08T08:59:59+00:00",
          conditionsCode: "411",
          conditionsText: "Mostly Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 21.1729736328125,
            max: 22.149999618530273,
            min: 20.917558670043945,
            units: "C"
          },
          precipitation: {
            chance: 2.5,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 70,
            sunshine: 30
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 69.300003051757812,
            max: null,
            min: null
          },
          wind: {
            average: 1.2216686249714093,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 15.673744061061235,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.255908966064453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.8499755859375,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.767734527587891,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.923867225646973,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 19.600000381469727,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.200199127197266,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-08T09:00:00+00:00",
          endTime: "2018-08-08T09:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 21.298648834228516,
            max: 22.149999618530273,
            min: 20.739185333251953,
            units: "C"
          },
          precipitation: {
            chance: 4.1666669845581055,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 96,
            sunshine: 4
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 68.800003051757812,
            max: null,
            min: null
          },
          wind: {
            average: 0.7737315245827161,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 15.475441491237,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 24.949991226196289,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.810205459594727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.770416259765625,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.923867225646973,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 19.566667556762695,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.200199127197266,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-08T10:00:00+00:00",
          endTime: "2018-08-08T10:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 21.424324035644531,
            max: 22.299999237060547,
            min: 20.833333969116211,
            units: "C"
          },
          precipitation: {
            chance: 7.5000004768371582,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 96,
            sunshine: 4
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 68.300003051757813,
            max: null,
            min: null
          },
          wind: {
            average: 0.55799633822749906,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 15.478216912572744,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 24.644075393676758,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.770435333251953,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.773099899291992,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.923867225646973,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 19.533332824707031,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.200199127197266,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-08T11:00:00+00:00",
          endTime: "2018-08-08T11:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 21.549999237060547,
            max: 22.600000381469727,
            min: 21.200000762939453,
            units: "C"
          },
          precipitation: {
            chance: 12.5,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 96,
            sunshine: 4
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 67.800003051757813,
            max: null,
            min: null
          },
          wind: {
            average: 0.79408612743721,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 15.68151161725444,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 24.338159561157227,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.730663299560547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.775781631469727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.923867225646973,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 19.5,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.200199127197266,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-08T12:00:00+00:00",
          endTime: "2018-08-08T12:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 22.049999237060547,
            max: 22.899999618530273,
            min: 21.566667556762695,
            units: "C"
          },
          precipitation: {
            chance: 17.5,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 99,
            sunshine: 1
          },
          solar: {
            amount: 20,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 67,
            max: null,
            min: null
          },
          wind: {
            average: 0.41674921678927207,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 15.813569566590861,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 24.194759368896484,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.744295120239258,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.77911376953125,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.927200317382812,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 19.466667175292969,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.200199127197266,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-08T13:00:00+00:00",
          endTime: "2018-08-08T13:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 22.549999237060547,
            max: 24.25,
            min: 21.73997688293457,
            units: "C"
          },
          precipitation: {
            chance: 20,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 99,
            sunshine: 1
          },
          solar: {
            amount: 20,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 66.199996948242187,
            max: null,
            min: null
          },
          wind: {
            average: 0.89707236248574973,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 16.349939483192994,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 24.051359176635742,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.757926940917969,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.782447814941406,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.930533409118652,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 19.433332443237305,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.200199127197266,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-08T14:00:00+00:00",
          endTime: "2018-08-08T14:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 23.049999237060547,
            max: 26.649999618530273,
            min: 21.719932556152344,
            units: "C"
          },
          precipitation: {
            chance: 20,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 99,
            sunshine: 1
          },
          solar: {
            amount: 20,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 65.4000015258789,
            max: null,
            min: null
          },
          wind: {
            average: 1.5886312911076488,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 17.288589036322445,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 23.907958984375,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.771556854248047,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.785781860351563,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.933867454528809,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 19.399999618530273,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.200199127197266,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-08T15:00:00+00:00",
          endTime: "2018-08-08T15:59:59+00:00",
          conditionsCode: "211",
          conditionsText: "Mostly Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 25.450000762939453,
            max: 29.049999237060547,
            min: 21.699886322021484,
            units: "C"
          },
          precipitation: {
            chance: 20,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 37,
            sunshine: 63
          },
          solar: {
            amount: 644,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 56.990787506103516,
            max: null,
            min: null
          },
          wind: {
            average: 1.1903127796117832,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 16.239673724570462,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 24.321971893310547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.764371871948242,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.789113998413086,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.935155868530273,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 19.233331680297852,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.166868209838867,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-08T16:00:00+00:00",
          endTime: "2018-08-08T16:59:59+00:00",
          conditionsCode: "211",
          conditionsText: "Mostly Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 27.850000381469727,
            max: 30.640445709228516,
            min: 23.145622253417969,
            units: "C"
          },
          precipitation: {
            chance: 16.666667938232422,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 37,
            sunshine: 63
          },
          solar: {
            amount: 644,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 48.581573486328125,
            max: null,
            min: null
          },
          wind: {
            average: 1.5742192210148076,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 15.147391159473768,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 24.735986709594727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.757184982299805,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.792448043823242,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.936445236206055,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 19.066665649414063,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.133533477783203,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-08T17:00:00+00:00",
          endTime: "2018-08-08T17:59:59+00:00",
          conditionsCode: "211",
          conditionsText: "Mostly Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 30.25,
            max: 31.421337127685547,
            min: 26.057138442993164,
            units: "C"
          },
          precipitation: {
            chance: 10,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 37,
            sunshine: 63
          },
          solar: {
            amount: 644,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 40.17236328125,
            max: null,
            min: null
          },
          wind: {
            average: 2.3890822727073275,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 13.87348834736294,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.149999618530273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.75,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.7957820892334,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.937734603881836,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 18.899999618530273,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.100200653076172,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.80000114440918,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-08T18:00:00+00:00",
          endTime: "2018-08-08T18:59:59+00:00",
          conditionsCode: "711",
          conditionsText: "Mostly Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 30.968137741088867,
            max: 32.202228546142578,
            min: 28.968656539916992,
            units: "C"
          },
          precipitation: {
            chance: 3.3333334922790527,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 18,
            sunshine: 82
          },
          solar: {
            amount: 790,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 37.606708526611328,
            max: null,
            min: null
          },
          wind: {
            average: 2.39781282893827,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 14.496699066614759,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.716325759887695,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.75,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.799114227294922,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.94041633605957,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 18.733333587646484,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.066867828369141,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.766666412353516,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-08T19:00:00+00:00",
          endTime: "2018-08-08T19:59:59+00:00",
          conditionsCode: "711",
          conditionsText: "Mostly Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 31.686275482177734,
            max: 32.5921630859375,
            min: 30.333744049072266,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 18,
            sunshine: 82
          },
          solar: {
            amount: 790,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 35.041057586669922,
            max: null,
            min: null
          },
          wind: {
            average: 2.457202835559992,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 14.177860817053631,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.282649993896484,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.75,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.802448272705078,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.943099021911621,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 18.566665649414063,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.033533096313477,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.733333587646484,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-08T20:00:00+00:00",
          endTime: "2018-08-08T20:59:59+00:00",
          conditionsCode: "711",
          conditionsText: "Mostly Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 32.404415130615234,
            max: 32.591133117675781,
            min: 30.152402877807617,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 18,
            sunshine: 82
          },
          solar: {
            amount: 790,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 32.47540283203125,
            max: null,
            min: null
          },
          wind: {
            average: 2.5637339859370027,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 12.929440545895991,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.848974227905273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.75,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.8057804107666,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.945781707763672,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 18.399999618530273,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 16.000200271606445,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-08T21:00:00+00:00",
          endTime: "2018-08-08T21:59:59+00:00",
          conditionsCode: "911",
          conditionsText: "Mostly Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 31.806406021118164,
            max: 32.590103149414063,
            min: 29.971061706542969,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 78,
            sunshine: 22
          },
          solar: {
            amount: 162,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 35.117366790771484,
            max: null,
            min: null
          },
          wind: {
            average: 2.7201445853277284,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 14.051288483340667,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.956884384155273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.743562698364258,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.806249618530273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.949114799499512,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 18.333333969116211,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.966866493225098,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-08T22:00:00+00:00",
          endTime: "2018-08-08T22:59:59+00:00",
          conditionsCode: "911",
          conditionsText: "Mostly Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 31.208398818969727,
            max: 32.244026184082031,
            min: 29.388622283935547,
            units: "C"
          },
          precipitation: {
            chance: 4.1666669845581055,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 78,
            sunshine: 22
          },
          solar: {
            amount: 162,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 37.759326934814453,
            max: null,
            min: null
          },
          wind: {
            average: 2.9035061865468692,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 14.764042300262766,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.064794540405273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.737125396728516,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.806718826293945,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.952447891235352,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 18.266666412353516,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.933534622192383,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-08T23:00:00+00:00",
          endTime: "2018-08-08T23:59:59+00:00",
          conditionsCode: "911",
          conditionsText: "Mostly Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 30.610389709472656,
            max: 31.552900314331055,
            min: 28.405088424682617,
            units: "C"
          },
          precipitation: {
            chance: 12.5,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 78,
            sunshine: 22
          },
          solar: {
            amount: 162,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 40.401287078857422,
            max: null,
            min: null
          },
          wind: {
            average: 3.1090536970823268,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 15.069398463552554,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.172704696655273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.730688095092773,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.807188034057617,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.955780982971191,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 18.19999885559082,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.900200843811035,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        }
      ],
      _links: {
        self: {
          href: "/v2/weather/fields/field1/forecasts/2018-08-08"
        },
        curies: [
          {
            name: "awhere",
            href: "http://awhere.com/rels/{rel}",
            templated: true
          }
        ],
        "awhere:field": {
          href: "/v2/fields/field1"
        }
      }
    },
    {
      date: "2018-08-09",
      location: {
        latitude: 39.8282,
        longitude: -98.5795,
        fieldId: "field1"
      },
      forecast: [
        {
          startTime: "2018-08-09T00:00:00+00:00",
          endTime: "2018-08-09T00:59:59+00:00",
          conditionsCode: "811",
          conditionsText: "Partly Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 29.413522720336914,
            max: 30.861774444580078,
            min: 27.421552658081055,
            units: "C"
          },
          precipitation: {
            chance: 20.833332061767578,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 48,
            sunshine: 52
          },
          solar: {
            amount: 51,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 41.634193420410156,
            max: null,
            min: null
          },
          wind: {
            average: 2.7802889881552884,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 14.786542967604635,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.074861526489258,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.737125396728516,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.810520172119141,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.959115028381348,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 18.166666030883789,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.900200843811035,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-09T01:00:00+00:00",
          endTime: "2018-08-09T01:59:59+00:00",
          conditionsCode: "811",
          conditionsText: "Partly Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 28.216653823852539,
            max: 30.515888214111328,
            min: 26.371986389160156,
            units: "C"
          },
          precipitation: {
            chance: 23.333333969116211,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 48,
            sunshine: 52
          },
          solar: {
            amount: 51,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 42.867095947265625,
            max: null,
            min: null
          },
          wind: {
            average: 2.49314487620113,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 14.611853908911815,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.977018356323242,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.743562698364258,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.813854217529297,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.962448120117188,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 18.133333206176758,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.900200843811035,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-09T02:00:00+00:00",
          endTime: "2018-08-09T02:59:59+00:00",
          conditionsCode: "811",
          conditionsText: "Partly Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 27.019784927368164,
            max: 30.515243530273437,
            min: 25.256385803222656,
            units: "C"
          },
          precipitation: {
            chance: 20,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 48,
            sunshine: 52
          },
          solar: {
            amount: 51,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 44.099998474121094,
            max: null,
            min: null
          },
          wind: {
            average: 2.2635163237917424,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 14.547568369915167,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.879175186157227,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.75,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.817188262939453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.965781211853027,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 18.099998474121094,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.900200843811035,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-09T03:00:00+00:00",
          endTime: "2018-08-09T03:59:59+00:00",
          conditionsCode: "811",
          conditionsText: "Partly Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 25.874185562133789,
            max: 30.514598846435547,
            min: 24.140787124633789,
            units: "C"
          },
          precipitation: {
            chance: 16.666667938232422,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 50,
            sunshine: 50
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 47.799999237060547,
            max: null,
            min: null
          },
          wind: {
            average: 2.2048890520474953,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 15.292094179884911,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.6573486328125,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.75,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.821418762207031,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.968482971191406,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 18.099998474121094,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.900200843811035,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-09T04:00:00+00:00",
          endTime: "2018-08-09T04:59:59+00:00",
          conditionsCode: "811",
          conditionsText: "Partly Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 24.728588104248047,
            max: 29.346220016479492,
            min: 23.360822677612305,
            units: "C"
          },
          precipitation: {
            chance: 15.833333015441895,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 50,
            sunshine: 50
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 51.5,
            max: null,
            min: null
          },
          wind: {
            average: 2.1547193143319161,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 15.561326332726161,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.435522079467773,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.75,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.825651168823242,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.971184730529785,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 18.099998474121094,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.900200843811035,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-09T05:00:00+00:00",
          endTime: "2018-08-09T05:59:59+00:00",
          conditionsCode: "811",
          conditionsText: "Partly Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 23.582988739013672,
            max: 27.010105133056641,
            min: 22.916494369506836,
            units: "C"
          },
          precipitation: {
            chance: 17.5,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 50,
            sunshine: 50
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 55.200000762939453,
            max: null,
            min: null
          },
          wind: {
            average: 2.1136094208570664,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 15.356946346474368,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.213695526123047,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.75,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.829883575439453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.973886489868164,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 18.099998474121094,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.900200843811035,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-09T06:00:00+00:00",
          endTime: "2018-08-09T06:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 23.13865852355957,
            max: 24.673990249633789,
            min: 22.472164154052734,
            units: "C"
          },
          precipitation: {
            chance: 19.166666030883789,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 56.302650451660156,
            max: null,
            min: null
          },
          wind: {
            average: 2.0321329467532872,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 14.369939640390122,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.914289474487305,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.75,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.831855773925781,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.977219581604004,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 18.099998474121094,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.900198936462402,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-09T07:00:00+00:00",
          endTime: "2018-08-09T07:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 22.6943302154541,
            max: 23.505931854248047,
            min: 22.066667556762695,
            units: "C"
          },
          precipitation: {
            chance: 17.5,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 57.405303955078125,
            max: null,
            min: null
          },
          wind: {
            average: 2.0088984537081642,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 13.935116717581684,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.614885330200195,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.75,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.833827972412109,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.98055362701416,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 18.099998474121094,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.900197982788086,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-09T08:00:00+00:00",
          endTime: "2018-08-09T08:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 22.25,
            max: 23.505931854248047,
            min: 21.700000762939453,
            units: "C"
          },
          precipitation: {
            chance: 12.5,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 58.507953643798828,
            max: null,
            min: null
          },
          wind: {
            average: 2.0458911926855667,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 14.057035747062717,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.315479278564453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.75,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.835800170898438,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.98388671875,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 18.099998474121094,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.900196075439453,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30023193359375,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-09T09:00:00+00:00",
          endTime: "2018-08-09T09:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 21.883333206176758,
            max: 23.505931854248047,
            min: 21.333333969116211,
            units: "C"
          },
          precipitation: {
            chance: 7.5000004768371582,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 58.838638305664063,
            max: null,
            min: null
          },
          wind: {
            average: 2.1701807020971997,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 13.972186460960726,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.004566192626953,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.743555068969727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.839134216308594,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.98388671875,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 18.066667556762695,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.900196075439453,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.30022144317627,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-09T10:00:00+00:00",
          endTime: "2018-08-09T10:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 21.516666412353516,
            max: 24.332569122314453,
            min: 21.166666030883789,
            units: "C"
          },
          precipitation: {
            chance: 4.1666669845581055,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 59.169319152832031,
            max: null,
            min: null
          },
          wind: {
            average: 2.3171532527616994,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 14.368151859592651,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 24.693653106689453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.737110137939453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.84246826171875,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.98388671875,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 18.033332824707031,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.900196075439453,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.300210952758789,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-09T11:00:00+00:00",
          endTime: "2018-08-09T11:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 21.200000762939453,
            max: 25.98583984375,
            min: 21.200000762939453,
            units: "C"
          },
          precipitation: {
            chance: 2.5,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 59.5,
            max: null,
            min: null
          },
          wind: {
            average: 2.482783825345142,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 15.245794346878402,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 24.382740020751953,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.730663299560547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.845800399780273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.98388671875,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 18,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.900196075439453,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.300200462341309,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-09T12:00:00+00:00",
          endTime: "2018-08-09T12:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 23.583333969116211,
            max: 27.639110565185547,
            min: 21.233333587646484,
            units: "C"
          },
          precipitation: {
            chance: 0.83333337306976318,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 290,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 54.833332061767578,
            max: null,
            min: null
          },
          wind: {
            average: 2.3110614667093077,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 14.763493292952242,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 24.428613662719727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.730663299560547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.845800399780273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.985169410705566,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 17.933332443237305,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.900196075439453,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.300200462341309,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-09T13:00:00+00:00",
          endTime: "2018-08-09T13:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 26.016666412353516,
            max: 29.379785537719727,
            min: 21.25,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 290,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 50.166667938232422,
            max: null,
            min: null
          },
          wind: {
            average: 2.4926023474687375,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 14.198252102989525,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 24.4744873046875,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.730663299560547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.845800399780273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.986452102661133,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 17.866666793823242,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.900196075439453,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.300200462341309,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-09T14:00:00+00:00",
          endTime: "2018-08-09T14:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 28.450000762939453,
            max: 31.207860946655273,
            min: 21.25,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 290,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 45.5,
            max: null,
            min: null
          },
          wind: {
            average: 2.9631740975315792,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 13.528734638493903,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 24.520360946655273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.730663299560547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.845800399780273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.9877347946167,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 17.80000114440918,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.900196075439453,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.300200462341309,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-09T15:00:00+00:00",
          endTime: "2018-08-09T15:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 30.2833251953125,
            max: 33.035938262939453,
            min: 21.25,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 780,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 39.133335113525391,
            max: null,
            min: null
          },
          wind: {
            average: 2.0423331331870025,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 12.047926396770528,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.130231857299805,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.739940643310547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.84913444519043,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.990416526794434,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 17.666666030883789,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.833529472351074,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.266866683959961,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-09T16:00:00+00:00",
          endTime: "2018-08-09T16:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 32.116649627685547,
            max: 34.233310699462891,
            min: 23.375837326049805,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 780,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 32.766666412353516,
            max: null,
            min: null
          },
          wind: {
            average: 1.7206787990805117,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 10.828579518432196,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.740104675292969,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.749217987060547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.852466583251953,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.993099212646484,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 17.533332824707031,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.766861915588379,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.23353385925293,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-09T17:00:00+00:00",
          endTime: "2018-08-09T17:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 33.949974060058594,
            max: 34.799976348876953,
            min: 27.627513885498047,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 780,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 26.399999618530273,
            max: null,
            min: null
          },
          wind: {
            average: 2.2691921518757092,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 9.6659799933287349,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.3499755859375,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.758495330810547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.855800628662109,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.995780944824219,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 17.399999618530273,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.7001953125,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.200201034545898,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-09T18:00:00+00:00",
          endTime: "2018-08-09T18:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 34.516643524169922,
            max: 35.366641998291016,
            min: 31.879190444946289,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 890,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 24.366666793823242,
            max: null,
            min: null
          },
          wind: {
            average: 2.4659239587024708,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 10.501535543627684,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.016651153564453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.755664825439453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.859134674072266,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 14.999114990234375,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 17.19999885559082,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.633529663085938,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.200201034545898,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-09T19:00:00+00:00",
          endTime: "2018-08-09T19:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 35.083309173583984,
            max: 35.664756774902344,
            min: 34.004974365234375,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 890,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 22.333333969116211,
            max: null,
            min: null
          },
          wind: {
            average: 2.7769126983981263,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 10.207642120057672,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.683324813842773,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.752832412719727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.862466812133789,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.002448081970215,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 17,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.566863059997559,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.200201034545898,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-09T20:00:00+00:00",
          endTime: "2018-08-09T20:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 35.649974822998047,
            max: 35.6943244934082,
            min: 34.004867553710938,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 890,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 20.299999237060547,
            max: null,
            min: null
          },
          wind: {
            average: 3.1686945149681134,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 8.7985276729674951,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 28.350000381469727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.75,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.865800857543945,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.005781173706055,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 16.799999237060547,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.50019645690918,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.200201034545898,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-09T21:00:00+00:00",
          endTime: "2018-08-09T21:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 35.183315277099609,
            max: 35.7238883972168,
            min: 34.0047607421875,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 2,
            sunshine: 98
          },
          solar: {
            amount: 534,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 22.566667556762695,
            max: null,
            min: null
          },
          wind: {
            average: 2.8845825718898341,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 10.387850363785702,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 28.655689239501953,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.749992370605469,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.866275787353516,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.009114265441895,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 16.69999885559082,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.466862678527832,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.166867256164551,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-09T22:00:00+00:00",
          endTime: "2018-08-09T22:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 34.716659545898437,
            max: 35.423892974853516,
            min: 32.884445190429688,
            units: "C"
          },
          precipitation: {
            chance: 1.6666667461395264,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 2,
            sunshine: 98
          },
          solar: {
            amount: 534,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 24.833333969116211,
            max: null,
            min: null
          },
          wind: {
            average: 2.6081577686803596,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 11.233648364090806,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 28.961376190185547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.749982833862305,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.866750717163086,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.012448310852051,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 16.599998474121094,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.433528900146484,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.133533477783203,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-09T23:00:00+00:00",
          endTime: "2018-08-09T23:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 34.25,
            max: 34.794334411621094,
            min: 30.6439266204834,
            units: "C"
          },
          precipitation: {
            chance: 5,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 2,
            sunshine: 98
          },
          solar: {
            amount: 534,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 27.100000381469727,
            max: null,
            min: null
          },
          wind: {
            average: 2.34214343713897,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 11.338264915559549,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 29.267065048217773,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.749975204467773,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.867225646972656,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.015781402587891,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 16.5,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.40019702911377,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.100200653076172,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        }
      ],
      _links: {
        self: {
          href: "/v2/weather/fields/field1/forecasts/2018-08-09"
        },
        curies: [
          {
            name: "awhere",
            href: "http://awhere.com/rels/{rel}",
            templated: true
          }
        ],
        "awhere:field": {
          href: "/v2/fields/field1"
        }
      }
    },
    {
      date: "2018-08-10",
      location: {
        latitude: 39.8282,
        longitude: -98.5795,
        fieldId: "field1"
      },
      forecast: [
        {
          startTime: "2018-08-10T00:00:00+00:00",
          endTime: "2018-08-10T00:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 31.929986953735352,
            max: 34.164779663085937,
            min: 28.403404235839844,
            units: "C"
          },
          precipitation: {
            chance: 8.3333339691162109,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 1,
            sunshine: 99
          },
          solar: {
            amount: 56,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 28.466667175292969,
            max: null,
            min: null
          },
          wind: {
            average: 2.1243307618133271,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 10.85488472114096,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 29.094709396362305,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.749975204467773,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.870559692382813,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.015312194824219,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 16.5,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.40019702911377,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.100200653076172,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-10T01:00:00+00:00",
          endTime: "2018-08-10T01:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 29.609973907470703,
            max: 33.849998474121094,
            min: 26.885257720947266,
            units: "C"
          },
          precipitation: {
            chance: 10,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 1,
            sunshine: 99
          },
          solar: {
            amount: 56,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 29.833333969116211,
            max: null,
            min: null
          },
          wind: {
            average: 2.045334912353165,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 10.772908183485763,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 28.922355651855469,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.749975204467773,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.873893737792969,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.014843940734863,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 16.5,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.40019702911377,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.100200653076172,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-10T02:00:00+00:00",
          endTime: "2018-08-10T02:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 27.289960861206055,
            max: 33.849998474121094,
            min: 26.0894832611084,
            units: "C"
          },
          precipitation: {
            chance: 10,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 1,
            sunshine: 99
          },
          solar: {
            amount: 56,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 31.200000762939453,
            max: null,
            min: null
          },
          wind: {
            average: 2.12072594494928,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 11.103565426783081,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 28.75,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.749975204467773,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.877225875854492,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.014374732971191,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 16.5,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.40019702911377,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.100200653076172,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-10T03:00:00+00:00",
          endTime: "2018-08-10T03:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 26.509973526000977,
            max: 33.849998474121094,
            min: 25.2937068939209,
            units: "C"
          },
          precipitation: {
            chance: 10,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 1,
            sunshine: 99
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 34.400001525878906,
            max: null,
            min: null
          },
          wind: {
            average: 1.1433463454035382,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 12.235503749586044,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 28.413265228271484,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.783308029174805,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.880077362060547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.020872116088867,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 16.5,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.40019702911377,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.100200653076172,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-10T04:00:00+00:00",
          endTime: "2018-08-10T04:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 25.7299861907959,
            max: 32.356403350830078,
            min: 24.735612869262695,
            units: "C"
          },
          precipitation: {
            chance: 12.5,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 1,
            sunshine: 99
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 37.599998474121094,
            max: null,
            min: null
          },
          wind: {
            average: 1.3385885810799383,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 12.686528463551399,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 28.076530456542969,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.816642761230469,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.8829288482666,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.027369499206543,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 16.5,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.40019702911377,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.100200653076172,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-10T05:00:00+00:00",
          endTime: "2018-08-10T05:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 24.950000762939453,
            max: 29.369213104248047,
            min: 24.415195465087891,
            units: "C"
          },
          precipitation: {
            chance: 17.5,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 1,
            sunshine: 99
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 40.799999237060547,
            max: null,
            min: null
          },
          wind: {
            average: 2.4395110241279925,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 12.458408430260347,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.739795684814453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.8499755859375,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.885780334472656,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.033866882324219,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 16.5,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.40019702911377,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.100200653076172,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-10T06:00:00+00:00",
          endTime: "2018-08-10T06:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 24.611166000366211,
            max: 26.382022857666016,
            min: 24.094778060913086,
            units: "C"
          },
          precipitation: {
            chance: 22.5,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 41.833332061767578,
            max: null,
            min: null
          },
          wind: {
            average: 2.5040494861664242,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 11.353564594489914,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.409862518310547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.848258972167969,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.885780334472656,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.037200927734375,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 16.5,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.40019702911377,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.100200653076172,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-10T07:00:00+00:00",
          endTime: "2018-08-10T07:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 24.272331237792969,
            max: 24.898689270019531,
            min: 23.517904281616211,
            units: "C"
          },
          precipitation: {
            chance: 23.333333969116211,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 42.866664886474609,
            max: null,
            min: null
          },
          wind: {
            average: 2.626637398371384,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 10.793642883827063,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.079931259155273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.846540451049805,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.885780334472656,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.040534019470215,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 16.5,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.40019702911377,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.100200653076172,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-10T08:00:00+00:00",
          endTime: "2018-08-10T08:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 23.933496475219727,
            max: 24.919214248657227,
            min: 22.6845703125,
            units: "C"
          },
          precipitation: {
            chance: 20,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 43.900001525878906,
            max: null,
            min: null
          },
          wind: {
            average: 2.7996599373310058,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 10.784742576762255,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.75,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.844823837280273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.885780334472656,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.043867111206055,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 16.5,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.40019702911377,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.100200653076172,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-10T09:00:00+00:00",
          endTime: "2018-08-10T09:59:59+00:00",
          conditionsCode: "211",
          conditionsText: "Mostly Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 23.105663299560547,
            max: 24.939737319946289,
            min: 21.851236343383789,
            units: "C"
          },
          precipitation: {
            chance: 16.666667938232422,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 32,
            sunshine: 68
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 45.733333587646484,
            max: null,
            min: null
          },
          wind: {
            average: 2.0495676364642343,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 11.032051948505213,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.416658401489258,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.840105056762695,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.889114379882813,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.043867111206055,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 16.466667175292969,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.40019702911377,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.100200653076172,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-10T10:00:00+00:00",
          endTime: "2018-08-10T10:59:59+00:00",
          conditionsCode: "211",
          conditionsText: "Mostly Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 22.27783203125,
            max: 25.083333969116211,
            min: 21.448291778564453,
            units: "C"
          },
          precipitation: {
            chance: 14.166666984558105,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 32,
            sunshine: 68
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 47.566665649414063,
            max: null,
            min: null
          },
          wind: {
            average: 1.6793294637260157,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 11.50727753639552,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.083316802978516,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.835384368896484,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.892448425292969,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.043867111206055,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 16.433332443237305,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.40019702911377,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.100200653076172,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-10T11:00:00+00:00",
          endTime: "2018-08-10T11:59:59+00:00",
          conditionsCode: "211",
          conditionsText: "Mostly Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 21.475732803344727,
            max: 25.350000381469727,
            min: 21.475732803344727,
            units: "C"
          },
          precipitation: {
            chance: 12.5,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 32,
            sunshine: 68
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 49.400001525878906,
            max: null,
            min: null
          },
          wind: {
            average: 1.922591011175107,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 12.215569624798297,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.749975204467773,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.830663681030273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.895780563354492,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.043867111206055,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 16.399999618530273,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.40019702911377,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.100200653076172,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-10T12:00:00+00:00",
          endTime: "2018-08-10T12:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 22.883333206176758,
            max: 25.616666793823242,
            min: 21.503173828125,
            units: "C"
          },
          precipitation: {
            chance: 10.833333015441895,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 120,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 47.514972686767578,
            max: null,
            min: null
          },
          wind: {
            average: 2.0100617774971177,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 11.759492087810287,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.641016006469727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.8480224609375,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.899114608764648,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.044869422912598,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 16.399999618530273,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.40019702911377,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.100200653076172,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-10T13:00:00+00:00",
          endTime: "2018-08-10T13:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 24.316667556762695,
            max: 25.850000381469727,
            min: 21.516895294189453,
            units: "C"
          },
          precipitation: {
            chance: 8.3333339691162109,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 120,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 45.62994384765625,
            max: null,
            min: null
          },
          wind: {
            average: 2.1111960106708532,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 11.259722609822784,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.532054901123047,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.865381240844727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.902448654174805,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.045872688293457,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 16.399999618530273,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.40019702911377,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.100200653076172,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-10T14:00:00+00:00",
          endTime: "2018-08-10T14:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 25.75,
            max: 26.049999237060547,
            min: 21.516895294189453,
            units: "C"
          },
          precipitation: {
            chance: 5,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 120,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 43.744915008544922,
            max: null,
            min: null
          },
          wind: {
            average: 2.2241303753655748,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 10.71484351438804,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.423095703125,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.882740020751953,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.905780792236328,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.046875,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 16.399999618530273,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.40019702911377,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.100200653076172,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-10T15:00:00+00:00",
          endTime: "2018-08-10T15:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 25.7833251953125,
            max: 26.25,
            min: 21.516895294189453,
            units: "C"
          },
          precipitation: {
            chance: 1.6666667461395264,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 168,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 48.9299430847168,
            max: null,
            min: null
          },
          wind: {
            average: 2.4414496381977115,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 12.501563154317065,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.452930450439453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.871826171875,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.909114837646484,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.049850463867188,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 16.366666793823242,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.366862297058105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.100200653076172,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-10T16:00:00+00:00",
          endTime: "2018-08-10T16:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 25.816650390625,
            max: 27.383333206176758,
            min: 22.274440765380859,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 168,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 54.114971160888672,
            max: null,
            min: null
          },
          wind: {
            average: 2.7673335205657303,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 14.923224941328398,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.482763290405273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.860912322998047,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.912446975708008,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.052825927734375,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 16.333332061767578,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.333528518676758,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.100200653076172,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-10T17:00:00+00:00",
          endTime: "2018-08-10T17:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 25.8499755859375,
            max: 29.450000762939453,
            min: 23.789531707763672,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 168,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 59.299999237060547,
            max: null,
            min: null
          },
          wind: {
            average: 3.1684591318058297,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 18.031497281461824,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.512598037719727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.850000381469727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.915781021118164,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.055800437927246,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 16.30000114440918,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.300196647644043,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.100200653076172,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-10T18:00:00+00:00",
          endTime: "2018-08-10T18:59:59+00:00",
          conditionsCode: "811",
          conditionsText: "Partly Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 28.06550407409668,
            max: 31.516666412353516,
            min: 25.304622650146484,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 42,
            sunshine: 58
          },
          solar: {
            amount: 640,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 51.933334350585938,
            max: null,
            min: null
          },
          wind: {
            average: 2.8624198239107561,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 17.589154645515876,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.912590026855469,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.810230255126953,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.915781021118164,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.059134483337402,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 16.200000762939453,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.266862869262695,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.100200653076172,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-10T19:00:00+00:00",
          endTime: "2018-08-10T19:59:59+00:00",
          conditionsCode: "811",
          conditionsText: "Partly Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 30.281034469604492,
            max: 32.7024040222168,
            min: 26.062168121337891,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 42,
            sunshine: 58
          },
          solar: {
            amount: 640,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 44.566665649414063,
            max: null,
            min: null
          },
          wind: {
            average: 2.63995466641626,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 16.064822936363822,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.312582015991211,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.770458221435547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.915781021118164,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.062467575073242,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 16.100000381469727,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.233530044555664,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.100200653076172,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-10T20:00:00+00:00",
          endTime: "2018-08-10T20:59:59+00:00",
          conditionsCode: "811",
          conditionsText: "Partly Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 32.496562957763672,
            max: 33.0072135925293,
            min: 26.062168121337891,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 42,
            sunshine: 58
          },
          solar: {
            amount: 640,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 37.200000762939453,
            max: null,
            min: null
          },
          wind: {
            average: 2.5232664330313281,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 13.39863009143146,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.712574005126953,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.730688095092773,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.915781021118164,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.065800666809082,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 16,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.200196266174316,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.100200653076172,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-10T21:00:00+00:00",
          endTime: "2018-08-10T21:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 32.580287933349609,
            max: 33.3120231628418,
            min: 26.062168121337891,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 520,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 37.280361175537109,
            max: null,
            min: null
          },
          wind: {
            average: 2.6021543628272203,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 13.566686980564713,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.072290420532227,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.758951187133789,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.91911506652832,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.069133758544922,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 15.899999618530273,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.166862487792969,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.066867828369141,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-10T22:00:00+00:00",
          endTime: "2018-08-10T22:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 32.664009094238281,
            max: 33.295925140380859,
            min: 26.170267105102539,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 520,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 37.360725402832031,
            max: null,
            min: null
          },
          wind: {
            average: 2.7128834869185732,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 13.640525761772349,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.4320068359375,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.787214279174805,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.922447204589844,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.072467803955078,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 15.799999237060547,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.133529663085937,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.033533096313477,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-10T23:00:00+00:00",
          endTime: "2018-08-10T23:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 32.747734069824219,
            max: 32.958911895751953,
            min: 26.386465072631836,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 520,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 37.441089630126953,
            max: null,
            min: null
          },
          wind: {
            average: 2.8517467881182221,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 13.6200744015606,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.791723251342773,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.815479278564453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.92578125,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.075800895690918,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 15.700000762939453,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.10019588470459,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.000200271606445,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        }
      ],
      _links: {
        self: {
          href: "/v2/weather/fields/field1/forecasts/2018-08-10"
        },
        curies: [
          {
            name: "awhere",
            href: "http://awhere.com/rels/{rel}",
            templated: true
          }
        ],
        "awhere:field": {
          href: "/v2/fields/field1"
        }
      }
    },
    {
      date: "2018-08-11",
      location: {
        latitude: 39.8282,
        longitude: -98.5795,
        fieldId: "field1"
      },
      forecast: [
        {
          startTime: "2018-08-11T00:00:00+00:00",
          endTime: "2018-08-11T00:59:59+00:00",
          conditionsCode: "711",
          conditionsText: "Mostly Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 30.739212036132813,
            max: 32.621902465820313,
            min: 26.602663040161133,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 15,
            sunshine: 85
          },
          solar: {
            amount: 53,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 42.962383270263672,
            max: null,
            min: null
          },
          wind: {
            average: 3.6023613277024542,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 15.698643921317506,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.719034194946289,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.826976776123047,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.929115295410156,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.078489303588867,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 15.700000762939453,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.066862106323242,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.000200271606445,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-11T01:00:00+00:00",
          endTime: "2018-08-11T01:59:59+00:00",
          conditionsCode: "711",
          conditionsText: "Mostly Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 28.730690002441406,
            max: 32.453884124755859,
            min: 26.262428283691406,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 15,
            sunshine: 85
          },
          solar: {
            amount: 53,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 48.483680725097656,
            max: null,
            min: null
          },
          wind: {
            average: 4.35923633444032,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 17.369818607185639,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.646345138549805,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.838476181030273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.93244743347168,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.081178665161133,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 15.700000762939453,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.033529281616211,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.000200271606445,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-11T02:00:00+00:00",
          endTime: "2018-08-11T02:59:59+00:00",
          conditionsCode: "711",
          conditionsText: "Mostly Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 26.72216796875,
            max: 32.454853057861328,
            min: 25.365760803222656,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 15,
            sunshine: 85
          },
          solar: {
            amount: 53,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 54.004978179931641,
            max: null,
            min: null
          },
          wind: {
            average: 5.1195964638790423,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 18.673698892734532,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.573657989501953,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.8499755859375,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.935781478881836,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.083867073059082,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 15.700000762939453,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.000195503234863,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.000200271606445,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-11T03:00:00+00:00",
          endTime: "2018-08-11T03:59:59+00:00",
          conditionsCode: "911",
          conditionsText: "Mostly Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 25.824329376220703,
            max: 32.4558219909668,
            min: 24.469095230102539,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 69,
            sunshine: 31
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 55.736652374267578,
            max: null,
            min: null
          },
          wind: {
            average: 4.3308026801204464,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 18.762946875138923,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.373649597167969,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.843538284301758,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.935781478881836,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.087200164794922,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 15.700000762939453,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.000195503234863,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.000200271606445,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-11T04:00:00+00:00",
          endTime: "2018-08-11T04:59:59+00:00",
          conditionsCode: "911",
          conditionsText: "Mostly Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 24.926490783691406,
            max: 31.122310638427734,
            min: 23.965534210205078,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 69,
            sunshine: 31
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 57.468326568603516,
            max: null,
            min: null
          },
          wind: {
            average: 3.6363157816178249,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 18.396044861487955,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.173641204833984,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.837100982666016,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.935781478881836,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.090534210205078,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 15.700000762939453,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.000195503234863,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.000200271606445,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-11T05:00:00+00:00",
          endTime: "2018-08-11T05:59:59+00:00",
          conditionsCode: "911",
          conditionsText: "Mostly Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 24.028652191162109,
            max: 28.454313278198242,
            min: 23.855077743530273,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 69,
            sunshine: 31
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 59.200000762939453,
            max: null,
            min: null
          },
          wind: {
            average: 3.1001760901687496,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 17.56879237311416,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.9736328125,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.830663681030273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.935781478881836,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.093867301940918,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 15.700000762939453,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.000195503234863,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.000200271606445,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-11T06:00:00+00:00",
          endTime: "2018-08-11T06:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 23.969100952148438,
            max: 25.786317825317383,
            min: 23.7446231842041,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 90,
            sunshine: 10
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 59.138107299804688,
            max: null,
            min: null
          },
          wind: {
            average: 2.8445396431731806,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 16.25013896900273,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.765754699707031,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.825601577758789,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.936973571777344,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.097200393676758,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 15.700000762939453,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.000195503234863,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.000200271606445,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-11T07:00:00+00:00",
          endTime: "2018-08-11T07:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 23.9095516204834,
            max: 24.440515518188477,
            min: 23.328336715698242,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 90,
            sunshine: 10
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 59.076217651367187,
            max: null,
            min: null
          },
          wind: {
            average: 2.5893587993976714,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 15.407817608000805,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.557878494262695,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.820539474487305,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.938163757324219,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.100533485412598,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 15.700000762939453,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.000195503234863,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.000200271606445,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-11T08:00:00+00:00",
          endTime: "2018-08-11T08:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 23.850000381469727,
            max: 24.416906356811523,
            min: 22.606220245361328,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 90,
            sunshine: 10
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 59.014328002929687,
            max: null,
            min: null
          },
          wind: {
            average: 2.3347831782765285,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 15.041945669153723,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.350000381469727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.815479278564453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.939355850219727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.103867530822754,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 15.700000762939453,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.000195503234863,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.000200271606445,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-11T09:00:00+00:00",
          endTime: "2018-08-11T09:59:59+00:00",
          conditionsCode: "311",
          conditionsText: "Partly Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 23.083324432373047,
            max: 24.393299102783203,
            min: 21.884105682373047,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 56,
            sunshine: 44
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 61.576217651367188,
            max: null,
            min: null
          },
          wind: {
            average: 2.2828839042370288,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 15.353059250368029,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.091218948364258,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.826986312866211,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.944662094116211,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.101816177368164,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 15.666666984558105,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.000185012817383,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.000200271606445,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-11T10:00:00+00:00",
          endTime: "2018-08-11T10:59:59+00:00",
          conditionsCode: "311",
          conditionsText: "Partly Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 22.316650390625,
            max: 24.826244354248047,
            min: 21.510868072509766,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 56,
            sunshine: 44
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 64.138107299804688,
            max: null,
            min: null
          },
          wind: {
            average: 2.2622857582097731,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 16.018258140232462,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.832437515258789,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.838493347167969,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.949968338012695,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.099765777587891,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 15.633333206176758,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.000174522399902,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.000200271606445,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-11T11:00:00+00:00",
          endTime: "2018-08-11T11:59:59+00:00",
          conditionsCode: "311",
          conditionsText: "Partly Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 21.549976348876953,
            max: 25.715747833251953,
            min: 21.48651123046875,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 56,
            sunshine: 44
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 66.699996948242187,
            max: null,
            min: null
          },
          wind: {
            average: 2.2738393072011696,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 17.04491419246904,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.573657989501953,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.850000381469727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.955272674560547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.0977144241333,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 15.600000381469727,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.000163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.000200271606445,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-11T12:00:00+00:00",
          endTime: "2018-08-11T12:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 23.383317947387695,
            max: 26.605249404907227,
            min: 21.462154388427734,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 1,
            sunshine: 99
          },
          solar: {
            amount: 280,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 61.13427734375,
            max: null,
            min: null
          },
          wind: {
            average: 2.2841738073460403,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 16.083428559169914,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.546346664428711,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.850000381469727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.955272674560547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.100403785705566,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 15.566666603088379,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.000163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.000200271606445,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-11T13:00:00+00:00",
          endTime: "2018-08-11T13:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 25.216657638549805,
            max: 27.840673446655273,
            min: 21.449975967407227,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 1,
            sunshine: 99
          },
          solar: {
            amount: 280,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 55.568553924560547,
            max: null,
            min: null
          },
          wind: {
            average: 2.4565044103226938,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 15.16487454404372,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.519035339355469,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.850000381469727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.955272674560547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.103092193603516,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 15.533332824707031,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.000163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.000200271606445,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-11T14:00:00+00:00",
          endTime: "2018-08-11T14:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 27.049999237060547,
            max: 29.422021865844727,
            min: 21.449975967407227,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 1,
            sunshine: 99
          },
          solar: {
            amount: 280,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 50.002830505371094,
            max: null,
            min: null
          },
          wind: {
            average: 2.760658422311419,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 14.258963853752697,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.491724014282227,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.850000381469727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.955272674560547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.105781555175781,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 15.5,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 15.000163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.000200271606445,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-11T15:00:00+00:00",
          endTime: "2018-08-11T15:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 28.649999618530273,
            max: 31.003368377685547,
            min: 21.449975967407227,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 772,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 45.968551635742188,
            max: null,
            min: null
          },
          wind: {
            average: 2.5906455211593817,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 13.68422028979565,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.951433181762695,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.843555450439453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.958776473999023,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.109114646911621,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 15.399999618530273,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.933496475219727,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.000200271606445,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-11T16:00:00+00:00",
          endTime: "2018-08-11T16:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 30.25,
            max: 32.198917388916016,
            min: 23.193492889404297,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 772,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 41.934276580810547,
            max: null,
            min: null
          },
          wind: {
            average: 2.4534102208912256,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 13.599548690199766,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.411140441894531,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.837108612060547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.962278366088867,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.112447738647461,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 15.299999237060547,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.866830825805664,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.000200271606445,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-11T17:00:00+00:00",
          endTime: "2018-08-11T17:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 31.850000381469727,
            max: 33.0086669921875,
            min: 26.680524826049805,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 772,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 37.900001525878906,
            max: null,
            min: null
          },
          wind: {
            average: 2.3546900804495863,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 13.960038543164854,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.870849609375,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.830663681030273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.965782165527344,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.1157808303833,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 15.199999809265137,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.800164222717285,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 11.000200271606445,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-11T18:00:00+00:00",
          endTime: "2018-08-11T18:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 32.645095825195312,
            max: 33.818416595458984,
            min: 30.167558670043945,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 890,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 33.766666412353516,
            max: null,
            min: null
          },
          wind: {
            average: 2.4283165175488675,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 14.070203171173793,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.437524795532227,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.830663681030273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.965782165527344,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.119114875793457,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 15.09999942779541,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.73349666595459,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.966867446899414,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-11T19:00:00+00:00",
          endTime: "2018-08-11T19:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 33.4401969909668,
            max: 34.258674621582031,
            min: 31.911073684692383,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 890,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 29.633333206176758,
            max: null,
            min: null
          },
          wind: {
            average: 2.6002093586708965,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 13.009969464402694,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 28.004199981689453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.830663681030273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.965782165527344,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.122447967529297,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 14.999999046325684,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.666830062866211,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.933533668518066,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-11T20:00:00+00:00",
          endTime: "2018-08-11T20:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 34.235294342041016,
            max: 34.329437255859375,
            min: 31.911073684692383,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 890,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 25.5,
            max: null,
            min: null
          },
          wind: {
            average: 2.8526598541333712,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 10.761128067216472,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 28.570873260498047,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.830663681030273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.965782165527344,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.125781059265137,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 14.90000057220459,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.600163459777832,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.900199890136719,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-11T21:00:00+00:00",
          endTime: "2018-08-11T21:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 33.80535888671875,
            max: 34.400203704833984,
            min: 31.911073684692383,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 526,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 26.433332443237305,
            max: null,
            min: null
          },
          wind: {
            average: 3.0293196184241102,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 11.332858908653124,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 28.848949432373047,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.837108612060547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.969114303588867,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.128645896911621,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 14.833333015441895,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.566829681396484,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.900199890136719,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-11T22:00:00+00:00",
          endTime: "2018-08-11T22:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 33.375423431396484,
            max: 34.127342224121094,
            min: 30.825504302978516,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 526,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 27.366666793823242,
            max: null,
            min: null
          },
          wind: {
            average: 3.2162321850809406,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 11.27948570366488,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 29.127025604248047,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.843555450439453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.972448348999023,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.131510734558105,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 14.766666412353516,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.53349781036377,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.900199890136719,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-11T23:00:00+00:00",
          endTime: "2018-08-11T23:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 32.945487976074219,
            max: 33.510860443115234,
            min: 28.654365539550781,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 526,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 28.299999237060547,
            max: null,
            min: null
          },
          wind: {
            average: 3.4117126215748574,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 10.59407125520392,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 29.405101776123047,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.850000381469727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.975780487060547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.134374618530273,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 14.699999809265137,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.900199890136719,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        }
      ],
      _links: {
        self: {
          href: "/v2/weather/fields/field1/forecasts/2018-08-11"
        },
        curies: [
          {
            name: "awhere",
            href: "http://awhere.com/rels/{rel}",
            templated: true
          }
        ],
        "awhere:field": {
          href: "/v2/fields/field1"
        }
      }
    },
    {
      date: "2018-08-12",
      location: {
        latitude: 39.8282,
        longitude: -98.5795,
        fieldId: "field1"
      },
      forecast: [
        {
          startTime: "2018-08-12T00:00:00+00:00",
          endTime: "2018-08-12T00:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 30.4292049407959,
            max: 32.894374847412109,
            min: 26.483226776123047,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 53,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 33.900001525878906,
            max: null,
            min: null
          },
          wind: {
            average: 3.8110516591520596,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 12.115323063765624,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 29.170841217041016,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.850000381469727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.979114532470703,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.137532234191895,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 14.666666030883789,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.900199890136719,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-12T01:00:00+00:00",
          endTime: "2018-08-12T01:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 27.912923812866211,
            max: 32.586132049560547,
            min: 24.945989608764648,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 53,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 39.5,
            max: null,
            min: null
          },
          wind: {
            average: 4.2161670236391382,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 13.637593798888304,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 28.936580657958984,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.850000381469727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.982448577880859,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.140689849853516,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 14.633333206176758,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.900199890136719,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-12T02:00:00+00:00",
          endTime: "2018-08-12T02:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 25.396640777587891,
            max: 32.586132049560547,
            min: 24.042655944824219,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 53,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 45.099998474121094,
            max: null,
            min: null
          },
          wind: {
            average: 4.6255418872623189,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 15.283790291012384,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 28.702320098876953,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.850000381469727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.985780715942383,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.143847465515137,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 14.59999942779541,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.900199890136719,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-12T03:00:00+00:00",
          endTime: "2018-08-12T03:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 24.494504928588867,
            max: 32.586132049560547,
            min: 23.139322280883789,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 48.766666412353516,
            max: null,
            min: null
          },
          wind: {
            average: 4.3438513496141837,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 16.093991199743169,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 28.371908187866211,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.883333206176758,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.985780715942383,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.147180557250977,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 14.59999942779541,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.900199890136719,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-12T04:00:00+00:00",
          endTime: "2018-08-12T04:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 23.592369079589844,
            max: 30.935998916625977,
            min: 22.337728500366211,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 52.433334350585937,
            max: null,
            min: null
          },
          wind: {
            average: 4.1721665196744331,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 16.103682615434959,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 28.041496276855469,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.916666030883789,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.985780715942383,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.150514602661133,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 14.59999942779541,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.900199890136719,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-12T05:00:00+00:00",
          endTime: "2018-08-12T05:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 22.690235137939453,
            max: 27.635730743408203,
            min: 21.637870788574219,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 56.099998474121094,
            max: null,
            min: null
          },
          wind: {
            average: 4.1242477939051279,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 15.305163023768321,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.711084365844727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.950000762939453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.985780715942383,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.153847694396973,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 14.59999942779541,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.900199890136719,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-12T06:00:00+00:00",
          endTime: "2018-08-12T06:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 21.976823806762695,
            max: 24.335460662841797,
            min: 20.938014984130859,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 58.233333587646484,
            max: null,
            min: null
          },
          wind: {
            average: 3.7801840665983804,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 14.016073615358481,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.296239852905273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.949991226196289,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.989114761352539,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.153847694396973,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 14.59999942779541,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.900199890136719,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-12T07:00:00+00:00",
          endTime: "2018-08-12T07:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 21.263410568237305,
            max: 22.679439544677734,
            min: 20.409751892089844,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 60.366664886474609,
            max: null,
            min: null
          },
          wind: {
            average: 3.4361381762320189,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 13.545308695810736,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.881397247314453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.949983596801758,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.992448806762695,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.153847694396973,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 14.59999942779541,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.900199890136719,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-12T08:00:00+00:00",
          endTime: "2018-08-12T08:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 20.549999237060547,
            max: 22.66766357421875,
            min: 20.053085327148437,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 62.5,
            max: null,
            min: null
          },
          wind: {
            average: 3.0921159569314045,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 13.90621597889403,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.466552734375,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.949975967407227,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.995780944824219,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.153847694396973,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 14.59999942779541,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.900199890136719,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-12T09:00:00+00:00",
          endTime: "2018-08-12T09:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 20.189779281616211,
            max: 22.655887603759766,
            min: 19.696418762207031,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 64.166664123535156,
            max: null,
            min: null
          },
          wind: {
            average: 2.9883253846429452,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 14.137942250499247,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.022737503051758,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.943538665771484,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.995780944824219,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.15485668182373,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 14.59999942779541,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.900199890136719,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-12T10:00:00+00:00",
          endTime: "2018-08-12T10:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 19.829557418823242,
            max: 23.341882705688477,
            min: 19.523405075073242,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 65.833335876464844,
            max: null,
            min: null
          },
          wind: {
            average: 2.8869322857753259,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 14.778237048941042,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.578922271728516,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.937101364135742,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.995780944824219,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.155865669250488,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 14.59999942779541,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.900199890136719,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-12T11:00:00+00:00",
          endTime: "2018-08-12T11:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 19.534042358398437,
            max: 24.72564697265625,
            min: 19.534042358398437,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 67.5,
            max: null,
            min: null
          },
          wind: {
            average: 2.7881983688479859,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 15.831292154742584,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.135107040405273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.9306640625,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.995780944824219,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.156874656677246,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 14.59999942779541,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.900199890136719,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-12T12:00:00+00:00",
          endTime: "2018-08-12T12:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 21.913312911987305,
            max: 26.109411239624023,
            min: 19.544681549072266,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 280,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 60.933334350585937,
            max: null,
            min: null
          },
          wind: {
            average: 2.9001468099367944,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 14.896245231727104,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.112264633178711,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.917749404907227,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 19.999114990234375,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.159843444824219,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 14.566665649414063,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.466829299926758,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.866867065429688,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-12T13:00:00+00:00",
          endTime: "2018-08-12T13:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 24.357292175292969,
            max: 27.792200088500977,
            min: 19.555793762207031,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 280,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 54.366664886474609,
            max: null,
            min: null
          },
          wind: {
            average: 3.0984253848935817,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 13.923508578055905,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.089420318603516,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.904834747314453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.0024471282959,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.162812232971191,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 14.533333778381348,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.433497428894043,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.833534240722656,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-12T14:00:00+00:00",
          endTime: "2018-08-12T14:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 26.80126953125,
            max: 29.774011611938477,
            min: 19.5673828125,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 280,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 47.799999237060547,
            max: null,
            min: null
          },
          wind: {
            average: 3.3678205318208176,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 12.865327435583769,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.066577911376953,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.891918182373047,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.005781173706055,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.165781021118164,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 14.5,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.400163650512695,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.800200462341309,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-12T15:00:00+00:00",
          endTime: "2018-08-12T15:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 28.782434463500977,
            max: 31.755823135375977,
            min: 19.578971862792969,
            units: "C"
          },
          precipitation: {
            chance: 0,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 784,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 41.766666412353516,
            max: null,
            min: null
          },
          wind: {
            average: 3.789835386822995,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 11.715106996756386,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.506853103637695,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.877946853637695,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.009115219116211,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.169114112854004,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 14.433333396911621,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.366830825805664,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.800200462341309,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-12T16:00:00+00:00",
          endTime: "2018-08-12T16:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 30.763599395751953,
            max: 33.04681396484375,
            min: 21.796506881713867,
            units: "C"
          },
          precipitation: {
            chance: 0.83333337306976318,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 784,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 35.733333587646484,
            max: null,
            min: null
          },
          wind: {
            average: 4.2409133959558405,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 10.920418761138745,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.947126388549805,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.863973617553711,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.012447357177734,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.17244815826416,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 14.366666793823242,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.333497047424316,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.800200462341309,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-12T17:00:00+00:00",
          endTime: "2018-08-12T17:59:59+00:00",
          conditionsCode: "111",
          conditionsText: "Sunny Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 32.744766235351563,
            max: 33.646987915039063,
            min: 26.219989776611328,
            units: "C"
          },
          precipitation: {
            chance: 2.5,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 784,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 29.700000762939453,
            max: null,
            min: null
          },
          wind: {
            average: 4.71271650047113,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 10.331576721714535,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.387401580810547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.850000381469727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.015781402587891,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.17578125,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 14.299999237060547,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.300163269042969,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.800200462341309,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-12T18:00:00+00:00",
          endTime: "2018-08-12T18:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 33.344913482666016,
            max: 34.247158050537109,
            min: 30.643472671508789,
            units: "C"
          },
          precipitation: {
            chance: 4.1666669845581055,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 890,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 28,
            max: null,
            min: null
          },
          wind: {
            average: 4.5614130600256244,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 11.598827767504964,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.918230056762695,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.849992752075195,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.015781402587891,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.17578125,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 14.200000762939453,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.23349666595459,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.766866683959961,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-12T19:00:00+00:00",
          endTime: "2018-08-12T19:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 33.945064544677734,
            max: 34.547245025634766,
            min: 32.8547248840332,
            units: "C"
          },
          precipitation: {
            chance: 4.1666669845581055,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 890,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 26.299999237060547,
            max: null,
            min: null
          },
          wind: {
            average: 4.4107894014406854,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 11.718717886068571,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.449056625366211,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.849983215332031,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.015781402587891,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.17578125,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 14.100000381469727,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.166830062866211,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.73353385925293,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-12T20:00:00+00:00",
          endTime: "2018-08-12T20:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 34.545215606689453,
            max: 34.547245025634766,
            min: 32.853740692138672,
            units: "C"
          },
          precipitation: {
            chance: 2.5,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 890,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 24.600000381469727,
            max: null,
            min: null
          },
          wind: {
            average: 4.260918151116555,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 10.709861749168409,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.979883193969727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.8499755859375,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.015781402587891,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.17578125,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 14,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.100164413452148,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.700200080871582,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-12T21:00:00+00:00",
          endTime: "2018-08-12T21:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 34.054233551025391,
            max: 34.547245025634766,
            min: 32.852756500244141,
            units: "C"
          },
          precipitation: {
            chance: 0.83333337306976318,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 520,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 25.966667175292969,
            max: null,
            min: null
          },
          wind: {
            average: 4.0044962082406865,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 11.524772743169766,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 28.3082275390625,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.883308410644531,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.019115447998047,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.181809425354004,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.933333396911621,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 14.033496856689453,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.700200080871582,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-12T22:00:00+00:00",
          endTime: "2018-08-12T22:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 33.563247680664062,
            max: 34.247306823730469,
            min: 31.6928653717041,
            units: "C"
          },
          precipitation: {
            chance: 1.6666667461395264,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 520,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 27.333333969116211,
            max: null,
            min: null
          },
          wind: {
            average: 3.7652283354954306,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 11.681590711575167,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 28.636571884155273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.916643142700195,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.02244758605957,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.187838554382324,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.866665840148926,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.966830253601074,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.700200080871582,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-12T23:00:00+00:00",
          endTime: "2018-08-12T23:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 33.072265625,
            max: 33.647430419921875,
            min: 29.374061584472656,
            units: "C"
          },
          precipitation: {
            chance: 5,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 520,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 28.700000762939453,
            max: null,
            min: null
          },
          wind: {
            average: 3.5465883167685441,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 11.172120969445883,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 28.964916229248047,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.949975967407227,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.025781631469727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.193866729736328,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.799999237060547,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.900163650512695,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.700200080871582,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        }
      ],
      _links: {
        self: {
          href: "/v2/weather/fields/field1/forecasts/2018-08-12"
        },
        curies: [
          {
            name: "awhere",
            href: "http://awhere.com/rels/{rel}",
            templated: true
          }
        ],
        "awhere:field": {
          href: "/v2/fields/field1"
        }
      }
    },
    {
      date: "2018-08-13",
      location: {
        latitude: 39.8282,
        longitude: -98.5795,
        fieldId: "field1"
      },
      forecast: [
        {
          startTime: "2018-08-13T00:00:00+00:00",
          endTime: "2018-08-13T00:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 30.679452896118164,
            max: 33.047554016113281,
            min: 27.055259704589844,
            units: "C"
          },
          precipitation: {
            chance: 8.3333339691162109,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 51,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 32.233333587646484,
            max: null,
            min: null
          },
          wind: {
            average: 3.5598373523441302,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 11.666854134818786,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 28.759937286376953,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.947492599487305,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.025781631469727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.197200775146484,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.799999237060547,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.900163650512695,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.700200080871582,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-13T01:00:00+00:00",
          endTime: "2018-08-13T01:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 28.286640167236328,
            max: 32.7470703125,
            min: 25.364519119262695,
            units: "C"
          },
          precipitation: {
            chance: 10,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 51,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 35.766666412353516,
            max: null,
            min: null
          },
          wind: {
            average: 3.5845242192915179,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 12.374902389250227,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 28.554956436157227,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.945011138916016,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.025781631469727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.200533866882324,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.799999237060547,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.900163650512695,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.700200080871582,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-13T02:00:00+00:00",
          endTime: "2018-08-13T02:59:59+00:00",
          conditionsCode: "611",
          conditionsText: "Clear Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 25.893827438354492,
            max: 32.745975494384766,
            min: 24.301836013793945,
            units: "C"
          },
          precipitation: {
            chance: 10,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 0,
            sunshine: 100
          },
          solar: {
            amount: 51,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 39.299999237060547,
            max: null,
            min: null
          },
          wind: {
            average: 3.6204148615938636,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 13.343715265422585,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 28.3499755859375,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.942529678344727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.025781631469727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.203866958618164,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.799999237060547,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.900163650512695,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.700200080871582,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-13T03:00:00+00:00",
          endTime: "2018-08-13T03:59:59+00:00",
          conditionsCode: "811",
          conditionsText: "Partly Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 24.831459045410156,
            max: 32.7448844909668,
            min: 23.239152908325195,
            units: "C"
          },
          precipitation: {
            chance: 10,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 46,
            sunshine: 54
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 42.933334350585937,
            max: null,
            min: null
          },
          wind: {
            average: 3.6988731014027403,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 14.228632944176203,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 28.005607604980469,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.942529678344727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.02911376953125,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.203866958618164,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.799999237060547,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.900163650512695,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.700200080871582,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-13T04:00:00+00:00",
          endTime: "2018-08-13T04:59:59+00:00",
          conditionsCode: "811",
          conditionsText: "Partly Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 23.769088745117188,
            max: 31.064388275146484,
            min: 22.401830673217773,
            units: "C"
          },
          precipitation: {
            chance: 10,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 46,
            sunshine: 54
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 46.566665649414063,
            max: null,
            min: null
          },
          wind: {
            average: 3.7934376568705419,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 14.344307602960638,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.661237716674805,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.942529678344727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.032447814941406,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.203866958618164,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.799999237060547,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.900163650512695,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.700200080871582,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-13T05:00:00+00:00",
          endTime: "2018-08-13T05:59:59+00:00",
          conditionsCode: "811",
          conditionsText: "Partly Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 22.706718444824219,
            max: 27.704492568969727,
            min: 21.789867401123047,
            units: "C"
          },
          precipitation: {
            chance: 10,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 46,
            sunshine: 54
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 50.200000762939453,
            max: null,
            min: null
          },
          wind: {
            average: 3.9029380684506911,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 13.686774076930408,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.316869735717773,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.942529678344727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.035781860351563,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.203866958618164,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.799999237060547,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.900163650512695,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.700200080871582,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-13T06:00:00+00:00",
          endTime: "2018-08-13T06:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 22.095121383666992,
            max: 24.344596862792969,
            min: 21.177906036376953,
            units: "C"
          },
          precipitation: {
            chance: 10,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 53.599998474121094,
            max: null,
            min: null
          },
          wind: {
            average: 3.5232520568215784,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 12.858876831257145,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.961246490478516,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.963274002075195,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.039113998413086,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.205156326293945,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.799999237060547,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.900163650512695,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.700200080871582,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-13T07:00:00+00:00",
          endTime: "2018-08-13T07:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 21.483522415161133,
            max: 22.665075302124023,
            min: 20.726112365722656,
            units: "C"
          },
          precipitation: {
            chance: 9.1666669845581055,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 57,
            max: null,
            min: null
          },
          wind: {
            average: 3.1551532781863143,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 12.807377320417364,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.605623245239258,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.984016418457031,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.042448043823242,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.206445693969727,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.799999237060547,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.900163650512695,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.700200080871582,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-13T08:00:00+00:00",
          endTime: "2018-08-13T08:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 20.871923446655273,
            max: 22.665929794311523,
            min: 20.434486389160156,
            units: "C"
          },
          precipitation: {
            chance: 7.5000004768371582,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 60.400001525878906,
            max: null,
            min: null
          },
          wind: {
            average: 2.8032102816753977,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 13.559072650841886,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.25,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 23.0047607421875,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.0457820892334,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.207734107971191,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.799999237060547,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.900163650512695,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.700200080871582,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-13T09:00:00+00:00",
          endTime: "2018-08-13T09:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 20.580850601196289,
            max: 22.666784286499023,
            min: 20.142862319946289,
            units: "C"
          },
          precipitation: {
            chance: 5.8333334922790527,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 62.966667175292969,
            max: null,
            min: null
          },
          wind: {
            average: 2.7274484919056836,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 14.06293617194518,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.878335952758789,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.986507415771484,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.0457820892334,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.210430145263672,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.799999237060547,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.900163650512695,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.700200080871582,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-13T10:00:00+00:00",
          endTime: "2018-08-13T10:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 20.289777755737305,
            max: 23.289554595947266,
            min: 20.005876541137695,
            units: "C"
          },
          precipitation: {
            chance: 6.6666669845581055,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 65.533332824707031,
            max: null,
            min: null
          },
          wind: {
            average: 2.6528704451171,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 14.911650195193271,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.506673812866211,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.968254089355469,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.0457820892334,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.213125228881836,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.799999237060547,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.900163650512695,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.700200080871582,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-13T11:00:00+00:00",
          endTime: "2018-08-13T11:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 20.023525238037109,
            max: 24.53424072265625,
            min: 20.023525238037109,
            units: "C"
          },
          precipitation: {
            chance: 10,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 68.0999984741211,
            max: null,
            min: null
          },
          wind: {
            average: 2.5795789636896305,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 16.112005857387221,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.135009765625,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.950000762939453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.0457820892334,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.2158203125,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.799999237060547,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.900163650512695,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.700200080871582,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-13T12:00:00+00:00",
          endTime: "2018-08-13T12:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 22.149137496948242,
            max: 25.778926849365234,
            min: 20.041175842285156,
            units: "C"
          },
          precipitation: {
            chance: 13.333333969116211,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 220,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 63.533332824707031,
            max: null,
            min: null
          },
          wind: {
            average: 2.9371758166806305,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 15.62538255854618,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.070093154907227,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.950000762939453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.049114227294922,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.21915340423584,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.7666654586792,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.900163650512695,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.700199127197266,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-13T13:00:00+00:00",
          endTime: "2018-08-13T13:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 24.299568176269531,
            max: 27.287206649780273,
            min: 20.050830841064453,
            units: "C"
          },
          precipitation: {
            chance: 15.000000953674316,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 220,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 58.966667175292969,
            max: null,
            min: null
          },
          wind: {
            average: 3.3392719485891549,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 15.176974487044724,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.005176544189453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.950000762939453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.052448272705078,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.222487449645996,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.733333587646484,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.900163650512695,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.700197219848633,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-13T14:00:00+00:00",
          endTime: "2018-08-13T14:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 26.450000762939453,
            max: 29.05908203125,
            min: 20.052490234375,
            units: "C"
          },
          precipitation: {
            chance: 15.000000953674316,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 220,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 54.400001525878906,
            max: null,
            min: null
          },
          wind: {
            average: 3.7716618301375031,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 14.751414507795568,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 24.940258026123047,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.950000762939453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.0557804107666,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.225820541381836,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.699999809265137,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.900163650512695,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.700196266174316,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-13T15:00:00+00:00",
          endTime: "2018-08-13T15:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 28.208099365234375,
            max: 30.830957412719727,
            min: 20.054149627685547,
            units: "C"
          },
          precipitation: {
            chance: 15.000000953674316,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 730,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 47.200000762939453,
            max: null,
            min: null
          },
          wind: {
            average: 4.105339642162261,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 13.376488070438667,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.343505859375,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.923616409301758,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.0557804107666,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.225820541381836,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.633333206176758,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.833497047424316,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.666862487792969,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-13T16:00:00+00:00",
          endTime: "2018-08-13T16:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 29.966197967529297,
            max: 31.954668045043945,
            min: 22.011268615722656,
            units: "C"
          },
          precipitation: {
            chance: 14.166666984558105,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 730,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 40,
            max: null,
            min: null
          },
          wind: {
            average: 4.4391415851123543,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 12.23810710058285,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.746753692626953,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.897233963012695,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.0557804107666,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.225820541381836,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.566666603088379,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.766829490661621,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.633529663085937,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-13T17:00:00+00:00",
          endTime: "2018-08-13T17:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 31.724296569824219,
            max: 32.430213928222656,
            min: 25.923847198486328,
            units: "C"
          },
          precipitation: {
            chance: 12.5,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 730,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 32.799999237060547,
            max: null,
            min: null
          },
          wind: {
            average: 4.7730414802198373,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 11.168715072591224,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.149999618530273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.870849609375,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.0557804107666,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.225820541381836,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.500000953674316,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.700162887573242,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.60019588470459,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-13T18:00:00+00:00",
          endTime: "2018-08-13T18:59:59+00:00",
          conditionsCode: "A11",
          conditionsText: "Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 32.197101593017578,
            max: 32.90576171875,
            min: 29.83642578125,
            units: "C"
          },
          precipitation: {
            chance: 10.833333015441895,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 760,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 31.766666412353516,
            max: null,
            min: null
          },
          wind: {
            average: 4.4492717768177075,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 12.591793308536799,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.586580276489258,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.870849609375,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.059114456176758,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.232011795043945,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.433332443237305,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.666831016540527,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.60019588470459,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-13T19:00:00+00:00",
          endTime: "2018-08-13T19:59:59+00:00",
          conditionsCode: "A11",
          conditionsText: "Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 32.6699104309082,
            max: 33.143497467041016,
            min: 31.4691219329834,
            units: "C"
          },
          precipitation: {
            chance: 10.833333015441895,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 760,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 30.733333587646484,
            max: null,
            min: null
          },
          wind: {
            average: 4.3282103734062263,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 12.896502452552415,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.023160934448242,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.870849609375,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.062448501586914,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.238203048706055,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.366666793823242,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.63349723815918,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.60019588470459,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-13T20:00:00+00:00",
          endTime: "2018-08-13T20:59:59+00:00",
          conditionsCode: "A11",
          conditionsText: "Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 33.142715454101562,
            max: 33.143428802490234,
            min: 30.821933746337891,
            units: "C"
          },
          precipitation: {
            chance: 12.5,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 760,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 29.700000762939453,
            max: null,
            min: null
          },
          wind: {
            average: 4.4265205920695267,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 12.096084350334907,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.459741592407227,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.870849609375,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.065780639648438,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.244394302368164,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.300000190734863,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.600163459777832,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.60019588470459,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-13T21:00:00+00:00",
          endTime: "2018-08-13T21:59:59+00:00",
          conditionsCode: "A11",
          conditionsText: "Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 32.045143127441406,
            max: 33.143356323242188,
            min: 30.174745559692383,
            units: "C"
          },
          precipitation: {
            chance: 14.166666984558105,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 304,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 33.766666412353516,
            max: null,
            min: null
          },
          wind: {
            average: 4.25453643470102,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 13.778347891810489,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.619726181030273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.904182434082031,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.066503524780273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.24422550201416,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.266666412353516,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.5668306350708,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.566863059997559,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-13T22:00:00+00:00",
          endTime: "2018-08-13T22:59:59+00:00",
          conditionsCode: "A11",
          conditionsText: "Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 30.94757080078125,
            max: 32.561317443847656,
            min: 29.154808044433594,
            units: "C"
          },
          precipitation: {
            chance: 13.333333969116211,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 304,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 37.833332061767578,
            max: null,
            min: null
          },
          wind: {
            average: 4.1513204940624071,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 14.831422918833354,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.779712677001953,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.937517166137695,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.067226409912109,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.24405574798584,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.233333587646484,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.533496856689453,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.533529281616211,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-13T23:00:00+00:00",
          endTime: "2018-08-13T23:59:59+00:00",
          conditionsCode: "A11",
          conditionsText: "Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 29.850000381469727,
            max: 31.397306442260742,
            min: 27.762119293212891,
            units: "C"
          },
          precipitation: {
            chance: 10,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 304,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 41.900001525878906,
            max: null,
            min: null
          },
          wind: {
            average: 4.1220416513372937,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 15.278671083065911,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.939697265625,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.970849990844727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.067949295043945,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.243886947631836,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.199999809265137,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.50019645690918,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        }
      ],
      _links: {
        self: {
          href: "/v2/weather/fields/field1/forecasts/2018-08-13"
        },
        curies: [
          {
            name: "awhere",
            href: "http://awhere.com/rels/{rel}",
            templated: true
          }
        ],
        "awhere:field": {
          href: "/v2/fields/field1"
        }
      }
    },
    {
      date: "2018-08-14",
      location: {
        latitude: 39.8282,
        longitude: -98.5795,
        fieldId: "field1"
      },
      forecast: [
        {
          startTime: "2018-08-14T00:00:00+00:00",
          endTime: "2018-08-14T00:59:59+00:00",
          conditionsCode: "A11",
          conditionsText: "Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 28.457695007324219,
            max: 30.233299255371094,
            min: 26.369430541992187,
            units: "C"
          },
          precipitation: {
            chance: 6.6666669845581055,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 21,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 45.799999237060547,
            max: null,
            min: null
          },
          wind: {
            average: 3.8228795189671212,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 15.51211940313704,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.776464462280273,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.970849990844727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.0712833404541,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.247220039367676,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.199999809265137,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.50019645690918,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-14T01:00:00+00:00",
          endTime: "2018-08-14T01:59:59+00:00",
          conditionsCode: "A11",
          conditionsText: "Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 27.065391540527344,
            max: 29.651294708251953,
            min: 25.472652435302734,
            units: "C"
          },
          precipitation: {
            chance: 5.8333334922790527,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 21,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 49.700000762939453,
            max: null,
            min: null
          },
          wind: {
            average: 3.5263608765539889,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 16.115686157976192,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.613231658935547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.970849990844727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.074615478515625,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.250553131103516,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.199999809265137,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.50019645690918,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-14T02:00:00+00:00",
          endTime: "2018-08-14T02:59:59+00:00",
          conditionsCode: "A11",
          conditionsText: "Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 25.673086166381836,
            max: 29.651294708251953,
            min: 25.071786880493164,
            units: "C"
          },
          precipitation: {
            chance: 7.5000004768371582,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 21,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 53.599998474121094,
            max: null,
            min: null
          },
          wind: {
            average: 3.233213047535259,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 17.120037715035917,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.450000762939453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.970849990844727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.077949523925781,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.253887176513672,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.199999809265137,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.50019645690918,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-14T03:00:00+00:00",
          endTime: "2018-08-14T03:59:59+00:00",
          conditionsCode: "A11",
          conditionsText: "Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 25.257383346557617,
            max: 29.651294708251953,
            min: 24.670921325683594,
            units: "C"
          },
          precipitation: {
            chance: 9.1666669845581055,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 56.333332061767578,
            max: null,
            min: null
          },
          wind: {
            average: 3.7195415151591953,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 17.721632032678539,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.251970291137695,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.970849990844727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.079921722412109,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.257220268249512,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.199999809265137,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.500185012817383,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-14T04:00:00+00:00",
          endTime: "2018-08-14T04:59:59+00:00",
          conditionsCode: "A11",
          conditionsText: "Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 24.8416805267334,
            max: 28.784412384033203,
            min: 24.117073059082031,
            units: "C"
          },
          precipitation: {
            chance: 9.1666669845581055,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 59.066665649414063,
            max: null,
            min: null
          },
          wind: {
            average: 4.2265858930899229,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 17.810424431361959,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 27.053937911987305,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.970849990844727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.081893920898438,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.260553359985352,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.199999809265137,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.500174522399902,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-14T05:00:00+00:00",
          endTime: "2018-08-14T05:59:59+00:00",
          conditionsCode: "A11",
          conditionsText: "Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 24.425975799560547,
            max: 27.050647735595703,
            min: 23.410243988037109,
            units: "C"
          },
          precipitation: {
            chance: 7.5000004768371582,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 61.799999237060547,
            max: null,
            min: null
          },
          wind: {
            average: 4.74771372738145,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 17.381194989532716,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.855907440185547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.970849990844727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.0838680267334,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.263886451721191,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.199999809265137,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.500164031982422,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-14T06:00:00+00:00",
          endTime: "2018-08-14T06:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 23.715681076049805,
            max: 25.316883087158203,
            min: 22.703414916992187,
            units: "C"
          },
          precipitation: {
            chance: 5.8333334922790527,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 63.266666412353516,
            max: null,
            min: null
          },
          wind: {
            average: 4.432282441502216,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 16.599711550903415,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.587263107299805,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.970849990844727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.0838680267334,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.264889717102051,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.199999809265137,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.500164031982422,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-14T07:00:00+00:00",
          endTime: "2018-08-14T07:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 23.005388259887695,
            max: 24.450000762939453,
            min: 22.166666030883789,
            units: "C"
          },
          precipitation: {
            chance: 5,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 64.733329772949219,
            max: null,
            min: null
          },
          wind: {
            average: 4.1444014973968226,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 16.295579548690974,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.318620681762695,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.970849990844727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.0838680267334,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.265892028808594,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.199999809265137,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.500164031982422,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-14T08:00:00+00:00",
          endTime: "2018-08-14T08:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 22.295093536376953,
            max: 24.450000762939453,
            min: 21.799999237060547,
            units: "C"
          },
          precipitation: {
            chance: 5,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 66.199996948242187,
            max: null,
            min: null
          },
          wind: {
            average: 3.8901924937036174,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 16.473535764117191,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 26.049976348876953,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.970849990844727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.0838680267334,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.266894340515137,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.199999809265137,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.500164031982422,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-14T09:00:00+00:00",
          endTime: "2018-08-14T09:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 21.946727752685547,
            max: 24.450000762939453,
            min: 21.433332443237305,
            units: "C"
          },
          precipitation: {
            chance: 5,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 65.133331298828125,
            max: null,
            min: null
          },
          wind: {
            average: 3.3091479228524063,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 16.044450113083389,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.768016815185547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.937093734741211,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.087669372558594,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.269863128662109,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.199999809265137,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.500164031982422,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-14T10:00:00+00:00",
          endTime: "2018-08-14T10:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 21.598363876342773,
            max: 24.010656356811523,
            min: 20.942483901977539,
            units: "C"
          },
          precipitation: {
            chance: 6.6666669845581055,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 64.066665649414063,
            max: null,
            min: null
          },
          wind: {
            average: 2.7346711807252913,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 15.34552878160267,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.486059188842773,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.903337478637695,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.091470718383789,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.272831916809082,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.199999809265137,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.500164031982422,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-14T11:00:00+00:00",
          endTime: "2018-08-14T11:59:59+00:00",
          conditionsCode: "511",
          conditionsText: "Cloudy Day, No Rain, Light Wind/Calm",
          temperatures: {
            value: 21.25,
            max: 23.131969451904297,
            min: 20.32745361328125,
            units: "C"
          },
          precipitation: {
            chance: 10,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 0,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 63,
            max: null,
            min: null
          },
          wind: {
            average: 2.1719804449389972,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 14.378210963865458,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 25.2041015625,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.869579315185547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.095273971557617,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.275800704956055,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.199999809265137,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.500164031982422,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-14T12:00:00+00:00",
          endTime: "2018-08-14T12:59:59+00:00",
          conditionsCode: "521",
          conditionsText: "Cloudy Day, Light Rain, Light Wind/Calm",
          temperatures: {
            value: 20.658910751342773,
            max: 22.253284454345703,
            min: 19.712423324584961,
            units: "C"
          },
          precipitation: {
            chance: 13.333333969116211,
            amount: 0.97916668653488159,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 30,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 70.266670227050781,
            max: null,
            min: null
          },
          wind: {
            average: 3.5216439426387285,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 15.3626819504298,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 24.970767974853516,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.870002746582031,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.095273971557617,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.275800704956055,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 13.899999618530273,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.500164031982422,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-14T13:00:00+00:00",
          endTime: "2018-08-14T13:59:59+00:00",
          conditionsCode: "521",
          conditionsText: "Cloudy Day, Light Rain, Light Wind/Calm",
          temperatures: {
            value: 20.067821502685547,
            max: 21.80328369140625,
            min: 19.354907989501953,
            units: "C"
          },
          precipitation: {
            chance: 15.000000953674316,
            amount: 0.97916668653488159,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 30,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 77.533332824707031,
            max: null,
            min: null
          },
          wind: {
            average: 4.8721288464285051,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 16.514458291499171,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 24.737434387207031,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.870426177978516,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.095273971557617,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.275800704956055,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 14.59999942779541,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.500164031982422,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-14T14:00:00+00:00",
          endTime: "2018-08-14T14:59:59+00:00",
          conditionsCode: "521",
          conditionsText: "Cloudy Day, Light Rain, Light Wind/Calm",
          temperatures: {
            value: 19.476734161376953,
            max: 21.781970977783203,
            min: 19.254907608032227,
            units: "C"
          },
          precipitation: {
            chance: 15.000000953674316,
            amount: 0.97916668653488159,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 30,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 84.800003051757813,
            max: null,
            min: null
          },
          wind: {
            average: 6.2229001884003345,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 17.871662543121257,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 24.504100799560547,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.870849609375,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.095273971557617,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.275800704956055,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 15.299999237060547,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.500164031982422,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-14T15:00:00+00:00",
          endTime: "2018-08-14T15:59:59+00:00",
          conditionsCode: "521",
          conditionsText: "Cloudy Day, Light Rain, Light Wind/Calm",
          temperatures: {
            value: 19.701154708862305,
            max: 21.760656356811523,
            min: 19.1549072265625,
            units: "C"
          },
          precipitation: {
            chance: 15.000000953674316,
            amount: 1.7916666269302368,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 34,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 85.266670227050781,
            max: null,
            min: null
          },
          wind: {
            average: 5.5793902877551584,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 17.899423110049355,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 24.252735137939453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.863899230957031,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.098606109619141,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.279133796691895,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 17,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.500164031982422,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-14T16:00:00+00:00",
          endTime: "2018-08-14T16:59:59+00:00",
          conditionsCode: "521",
          conditionsText: "Cloudy Day, Light Rain, Light Wind/Calm",
          temperatures: {
            value: 19.925577163696289,
            max: 22.616666793823242,
            min: 19.329090118408203,
            units: "C"
          },
          precipitation: {
            chance: 15.000000953674316,
            amount: 1.7916666269302368,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 34,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 85.733329772949219,
            max: null,
            min: null
          },
          wind: {
            average: 5.1566171883572505,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 18.491679231638329,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 24.001367568969727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.856950759887695,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.101940155029297,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.282467842102051,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 18.69999885559082,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.500164031982422,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-14T17:00:00+00:00",
          endTime: "2018-08-14T17:59:59+00:00",
          conditionsCode: "521",
          conditionsText: "Cloudy Day, Light Rain, Light Wind/Calm",
          temperatures: {
            value: 20.149999618530273,
            max: 24.350000381469727,
            min: 19.777454376220703,
            units: "C"
          },
          precipitation: {
            chance: 15.000000953674316,
            amount: 1.7916666269302368,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 34,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 86.199996948242188,
            max: null,
            min: null
          },
          wind: {
            average: 5.0107685437735556,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 19.649499579013092,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 23.75,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.850000381469727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.105274200439453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.285800933837891,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 20.399999618530273,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.500164031982422,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-14T18:00:00+00:00",
          endTime: "2018-08-14T18:59:59+00:00",
          conditionsCode: "A21",
          conditionsText: "Cloudy Night, Light Rain, Light Wind/Calm",
          temperatures: {
            value: 22.416666030883789,
            max: 26.083333969116211,
            min: 20.225818634033203,
            units: "C"
          },
          precipitation: {
            chance: 15.000000953674316,
            amount: 0.0625,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 400,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 77.0164566040039,
            max: null,
            min: null
          },
          wind: {
            average: 6.270682144893283,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 18.903568894773077,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 23.783332824707031,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.849992752075195,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.105274200439453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.288482666015625,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 20.299999237060547,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.500164031982422,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-14T19:00:00+00:00",
          endTime: "2018-08-14T19:59:59+00:00",
          conditionsCode: "A21",
          conditionsText: "Cloudy Night, Light Rain, Light Wind/Calm",
          temperatures: {
            value: 24.683332443237305,
            max: 27.350000381469727,
            min: 20.450000762939453,
            units: "C"
          },
          precipitation: {
            chance: 15.000000953674316,
            amount: 0.0625,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 400,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 67.8329086303711,
            max: null,
            min: null
          },
          wind: {
            average: 7.5630306326247938,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 17.596084877040454,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 23.816667556762695,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.849983215332031,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.105274200439453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.291165351867676,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 20.19999885559082,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.500164031982422,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-14T20:00:00+00:00",
          endTime: "2018-08-14T20:59:59+00:00",
          conditionsCode: "A22",
          conditionsText: "Cloudy Night, Light Rain, Moderate",
          temperatures: {
            value: 26.950000762939453,
            max: 28.149999618530273,
            min: 20.450000762939453,
            units: "C"
          },
          precipitation: {
            chance: 15.000000953674316,
            amount: 0.0625,
            units: "mm"
          },
          sky: {
            cloudCover: 100,
            sunshine: 0
          },
          solar: {
            amount: 400,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 58.649368286132812,
            max: null,
            min: null
          },
          wind: {
            average: 8.8736540175425578,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 15.684028542990125,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 23.850000381469727,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.8499755859375,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.105274200439453,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.293848037719727,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 20.100000381469727,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.500164031982422,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-14T21:00:00+00:00",
          endTime: "2018-08-14T21:59:59+00:00",
          conditionsCode: "A12",
          conditionsText: "Cloudy Night, No Rain, Moderate",
          temperatures: {
            value: 27.2833251953125,
            max: 28.950000762939453,
            min: 20.450000762939453,
            units: "C"
          },
          precipitation: {
            chance: 15.000000953674316,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 98,
            sunshine: 2
          },
          solar: {
            amount: 318,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 54.3058967590332,
            max: null,
            min: null
          },
          wind: {
            average: 8.4781639212356783,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 14.858366528690661,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 24.121915817260742,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.8499755859375,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.108606338500977,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.297181129455566,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 19.933332443237305,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.500164031982422,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-14T22:00:00+00:00",
          endTime: "2018-08-14T22:59:59+00:00",
          conditionsCode: "A12",
          conditionsText: "Cloudy Night, No Rain, Moderate",
          temperatures: {
            value: 27.616649627685547,
            max: 29.100000381469727,
            min: 21.140653610229492,
            units: "C"
          },
          precipitation: {
            chance: 15.000000953674316,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 98,
            sunshine: 2
          },
          solar: {
            amount: 318,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 49.962421417236328,
            max: null,
            min: null
          },
          wind: {
            average: 8.0983274942138035,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 13.956548314102587,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 24.393831253051758,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.8499755859375,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.111940383911133,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.300514221191406,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 19.766666412353516,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.500164031982422,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        },
        {
          startTime: "2018-08-14T23:00:00+00:00",
          endTime: "2018-08-14T23:59:59+00:00",
          conditionsCode: "A11",
          conditionsText: "Cloudy Night, No Rain, Light Wind/Calm",
          temperatures: {
            value: 27.949975967407227,
            max: 28.600000381469727,
            min: 22.521963119506836,
            units: "C"
          },
          precipitation: {
            chance: 15.000000953674316,
            amount: 0,
            units: "mm"
          },
          sky: {
            cloudCover: 98,
            sunshine: 2
          },
          solar: {
            amount: 318,
            units: "Wh/m^2"
          },
          relativeHumidity: {
            average: 45.618949890136719,
            max: null,
            min: null
          },
          wind: {
            average: 7.7364522426755924,
            max: null,
            min: null,
            units: "m/sec"
          },
          dewPoint: {
            amount: 12.962176379737208,
            units: "C"
          },
          soilTemperatures: [
            {
              depth: "0-0.1 m below ground",
              average: 24.665746688842773,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 22.8499755859375,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "0.4-1 m below ground",
              average: 20.115272521972656,
              max: null,
              min: null,
              units: "C"
            },
            {
              depth: "1-2 m below ground",
              average: 15.303847312927246,
              max: null,
              min: null,
              units: "C"
            }
          ],
          soilMoisture: [
            {
              depth: "0-0.1 m below ground",
              average: 19.600000381469727,
              max: null,
              min: null
            },
            {
              depth: "0.1-0.4 m below ground",
              average: 13.500163078308105,
              max: null,
              min: null
            },
            {
              depth: "0.4-1 m below ground",
              average: 10.500164031982422,
              max: null,
              min: null
            },
            {
              depth: "1-2 m below ground",
              average: 26.69999885559082,
              max: null,
              min: null
            }
          ]
        }
      ],
      _links: {
        self: {
          href: "/v2/weather/fields/field1/forecasts/2018-08-14"
        },
        curies: [
          {
            name: "awhere",
            href: "http://awhere.com/rels/{rel}",
            templated: true
          }
        ],
        "awhere:field": {
          href: "/v2/fields/field1"
        }
      }
    }
  ],
  _links: {
    self: {
      href: "/v2/weather/fields/field1/forecasts/2018-08-07,2018-08-15"
    }
  }
};
//#region observations and forecasts
export const getWardDailyObservations = ward => {
  return (dispatch, getState) => {
    dispatch({
      type: actionTypes.FETCH_WARD_DAILY_OBSERVATIONS_REQUESTED,
      payload: { ward }
    });

    const accessToken = getState().auth.auth.token
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
  return dispatch => {
    dispatch({
      type: actionTypes.FETCH_WARD_FORECASTS_REQUESTED,
      payload: { ward }
    });

    //TODO get observations from awhere API

    //use dummy data

    //update the store
    dispatch({
      type: actionTypes.FETCH_WARD_FORECASTS_SUCCEEDED,
      payload: { ward, forecasts: provisionalForecasts.forecasts }
    });
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
      payload: ward.WARD_NAME
    });

    dispatch(getWardDailyObservations(ward));
    dispatch(getWardForecasts(ward));
  };
};

//#endregion
