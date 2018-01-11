const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys.js');
const path = require('path');

require('./models/user');
require('./models/survey');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey],
}));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./routes/routes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express serves up production assets
  // like main.js file or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up index.html
  // if it doesn't recognize the route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(
      __dirname, 'client',
      'build',
      'index.html',
    ));
  });
}

const PORT = process.env.PORT || 5000;
console.log(`Listening on port ${PORT}`);
app.listen(PORT);
