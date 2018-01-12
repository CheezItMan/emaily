
module.exports = {
  googleClientID:
    process.env.oauthid,
  googleClientSecret: process.env.oauthsecret,
  mongoURI: `mongodb://${process.env.mongouid}:${process.env.mongopwd}@ds239047.mlab.com:39047/emaily-cheezit-prod`,
  cookieKey: process.env.cookiekey,
  stripeSecrect_Key: process.env.STRIPE_PRIVATE_KEY,
  stripePuplicKey: process.env.STRIPE_PUBLIC_KEY,
  sendGridKey: process.env.SENDGRIDKEY,
  redirectDomain: process.env.REDIRECT_DOMAIN,
};
