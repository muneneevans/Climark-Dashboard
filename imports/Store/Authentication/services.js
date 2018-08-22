import { HOST } from "../Shared/defaults";

export default class AuthService {
  static login(apiCredentials) {
    const url = "http://127.0.0.1:8000/api/auth/awheretoken/";
    const request = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };

    return fetch(url, request)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  }

  static refreshToken(token) {
    const url = HOST.concat("/oauth/token");

    var myHeaders = new Headers();
    myHeaders.append("content-type", "application/json");
    myHeaders.append("X-Custom-Header", "ProcessThisImmediately");
    const request = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: token
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
