import { HOST } from "../Shared/defaults";

export default class WeatherServcice {
  static sendMessage(message) {
    // const url = "http://40.89.150.188:8000/api/feedback/messages/";
    const url = "http://localhost:8000/api/feedback/messages/";

    let myHeaders = new Headers();
    myHeaders.append("content-type", "application/json");
    myHeaders.append("X-Custom-Header", "ProcessThisImmediately");
    const request = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...message
      })
    };
    return fetch(url, request)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  }
}
