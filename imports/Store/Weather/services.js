import { HOST } from "../Shared/defaults";

export default class WeatherServcice {
  static getDailyObservations(ward, accessToken) {
    // const url = HOST.concat(
    //   `/v2/weather/fields/${ward.WARD_NAME}/observations`
    // );
    const url = HOST.concat(
      `/v2/weather/locations/${ward.latitude},${ward.longitude}/observations`
    );
    const request = {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    };

    return fetch(url, request)
      .then(response => {
        return response;
      })
      .catch(error => error);
  }
  static getForecasts(ward, accessToken) {
    // const url = HOST.concat(
    //   `/v2/weather/fields/${ward.WARD_NAME}/observations`
    // );
    const url = HOST.concat(
      `/v2/weather/locations/${ward.latitude},${ward.longitude}/forecasts`
    );
    const request = {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    };

    return fetch(url, request)
      .then(response => {
        return response;
      })
      .catch(error => error);
  }
}
