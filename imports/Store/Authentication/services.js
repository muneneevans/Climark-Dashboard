import { HOST } from "../Shared/defaults";

export default class AuthService {
  static login(apiCredentials) {
    const url = HOST.concat("/oauth/token");

    btoa(`${apiCredentials.awhereapikey}:${apiCredentials.awhereapisecret}`);
    const request = {
      async: true,
      crossDomain: true,
      url: "https://api.awhere.com/oauth/token",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic bDhla3p0U3BNa25oZ3lqTG55ZVpBV1VWdHcyajFRclo6NGhwT3dxMGI5SDVEZDZobw==",
        "Cache-Control": "no-cache",
      },
      data: {
        grant_type: "client_credentials"
      },
      body: {
        grant_type: "client_credentials"
      }
    };

    return fetch(url, request)
      .then(response => {
        return response;
      })
      .catch(error => {
        throw error;
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
