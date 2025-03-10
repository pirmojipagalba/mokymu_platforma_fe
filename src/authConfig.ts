export const authConfig = {
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
    authorizationParams: {
        redirectUri: process.env.REACT_APP_AUTH0_REDIRECT_URI
    }
  };
  