
module.exports = {
  googleClientID:
    process.env.oauthid,
  googleClientSecret: process.env.oauthsecret,
  mongoURI: `mongodb://${process.env.mongouid}:${process.env.mongopwd}@ds239047.mlab.com:39047/emaily-cheezit-prod`,
  cookieKey: process.env.cookiekey,
};
