import { HOST } from "../Shared/defaults";

export default class AuthService {
  static login(apiCredentials) {
    // const url = HOST.concat("/oauth/token");

    // btoa(`${apiCredentials.awhereapikey}:${apiCredentials.awhereapisecret}`);
    // const request = {
    //   body: "grant_type=client_credentials",
    //   headers: {
    //     Authorization: "Basic bDhla3p0U3BNa25oZ3lqTG55ZVpBV1VWdHcyajFRclo6NGhwT3dxMGI5SDVEZDZobw==",
    //     "Cache-Control": "no-cache",
    //     "Content-Type": "application/x-www-form-urlencoded",
    //   },
    //   method: "POST",
    //   mode: 'no-cors'
    // };

    // return fetch(url, request)
    //   .then(response => {
    //     return response;
    //   })
    //   .catch(error => {
    //     throw error;
    //   });

    fetch("https://api.awhere.com/oauth/token", {
      body: "grant_type=client_credentials",
      headers: {
        Authorization:
          "Basic bDhla3p0U3BNa25oZ3lqTG55ZVpBV1VWdHcyajFRclo6NGhwT3dxMGI5SDVEZDZobw==",
        "Cache-Control": "no-cache",
        "Content-Type": "application/x-www-form-urlencoded",
        "Postman-Token": "ee2d40e8-2e78-40da-9a3e-4de9b4f45325"
      },
      method: "POST",
      mode: "no-cors"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
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
