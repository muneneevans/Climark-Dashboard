//convert data from store into usable format by ui
import { isUndefined } from "../../lib/utils";

import { isEmpty } from "../../lib/utils";
import moment from "moment";

export const getFields = ({ weather }) => {
  return weather.fields;
};

export const getFetchFieldsProcess = ({ weather }) => {
  return weather._fetchFieldsProcess;
};

export const getCounties = ({ weather }) => {
  let counties = weather.fields.reduce((countyList, field) => {
    let found = countyList.find(filterField => {
      return filterField.value === field.COUNTY_NAME;
    });

    if (isEmpty(found)) {
      countyList.push({
        key: field.COUNTY_NAME,
        value: field.COUNTY_NAME,
        text: field.COUNTY_NAME,
        county: field
      });
    }
    return countyList;
  }, []);
  return counties;
};

export const getWardOptions = ({ weather }) => {
  return weather.countyWards.map(field => {
    //look for the ward in current selections
    const foundWard = weather.wardWidgets.find(ward => {
      return ward === field.WARD_NAME;
    });

    if (isUndefined(foundWard)) {
      return {
        key: field.WARD_NAME,
        text: field.WARD_NAME,
        value: field.WARD_NAME,
        ward: field
      };
    }
  }).filter(ward=>ward);
};

export const getWards = ({ weather }) => {
  return weather.countyWards;
};

export const getAddWardWidgetsProcess = ({ weather }) => {
  return weather._addWardWidgetProcess;
};
export const getWardWidgets = ({ weather }) => {
  return weather.wardWidgets;
};

export const getWidgetGraphs = ({ weather }) => {
  const getwardHumidities = wardObservations => {
    return wardObservations.map(observation => {
      return {
        date: moment(observation.date).format("dddd "),
        max: observation.relativeHumidity.max,
        min: observation.relativeHumidity.min
      };
    });
  };

  let newWardData = JSON.parse(JSON.stringify(weather.wardData));
  Object.keys(newWardData).map(ward => {
    let humidity = getwardHumidities(newWardData[ward].dailyObservations.data);

    humidity.map(day => {
      return { name: day.date, max: day.max, min: day.min };
    });

    newWardData[ward].dailyObservations.data = humidity;
  });

  return newWardData;
};

export const getWardData = ({ weather }) => {
  return weather.wardData;
};
