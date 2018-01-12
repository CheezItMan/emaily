// validateEmails.js

const EMAILEXPRESSION = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (emails) => {
  if (!emails) {
    return null;
  }


  const emailsArray = emails.trim().split(',').map(mail => mail.trim());

  const invalidEmails = emailsArray.filter(mail => !(EMAILEXPRESSION.test(mail) || mail === ''));

  if (invalidEmails.length > 0) {
    return `These emails are invalid: ${invalidEmails}`;
  }

  return null;
};
