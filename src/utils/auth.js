import auth0 from "auth0-js";

const webAuth = new auth0.WebAuth({
  domain: "dev-qjt4e8vtfnzog663.us.auth0.com",
  clientID: "qCBHEY4peDPF9hXgFlJxXLDOaVIb0eX4",
  redirectUri: "http://localhost:8080/callback",
  responseType: "token id_token",
  scope: "openid profile",
});

let token = {};

export function handleAuth(cb) {
  webAuth.parseHash((error, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      token.accessToken = authResult.accessToken;
      token.idToken = authResult.idToken;
      token.expiry = new Date().getTime() + authResult.expiresIn * 1000;
      cb();
    } else {
      console.log(error);
    }
  });
}

export function isLogged() {
  return token.accessToken && new Date().getTime() < token.expiry;
}

export function login() {
  webAuth.authorize();
}

export function logUserOut() {
  token = {};
}
