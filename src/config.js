const { CLIENT_ID, ISSUER, OKTA_TESTING_DISABLEHTTPSCHECK } = process.env

const BASENAME = process.env.NODE_ENV === 'production' ? '' : '';
const REDIRECT_URI = `${window.location.origin}${BASENAME}/login/callback`;

export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: REDIRECT_URI,
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    testing: {
      disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK
    }
  },
  jwksUri: `${ISSUER}/v1/keys`,
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages'
  },
  app: {
    basename: BASENAME
  }
}
