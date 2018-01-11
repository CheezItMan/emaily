const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const paymentRequired = require('../middlewares/hasCredits');
const Mailer = require('../services/mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = (app) => {
  app.post('/api/surveys', requireLogin, paymentRequired, (req, res) => {
    const {
      title, subject, body, recipients,
    } = req.body;

    const newSurvey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    // Send Email
    const mailer = new Mailer(newSurvey, surveyTemplate(newSurvey));
    mailer.send();

    newSurvey.save();
  });
};
