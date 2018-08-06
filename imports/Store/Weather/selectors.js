//convert data from store into usable format by ui

import { isEmpty } from "../../lib/utils";

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
        text: field.COUNTY_NAME
      });
    }
    return countyList;
  }, []);
  return counties;
};

export const getWardOptions = ({ weather }) => {
  return weather.fields.map(field => {
    return {
      key: field.WARD_NAME,
      text: field.WARD_NAME,
      value: field.WARD_NAME
    };
  });
};

export const getWards = ({ weather }) => {
  return weather.fields;
};

export const getCountyWards = (county, wards) => {
  return wards.filter(ward => {
    return ward.COUNTY_NAME === county;
  });
};