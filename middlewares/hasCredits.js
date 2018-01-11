module.exports = (req, res, next) => {
  if (!req.user || req.user.credits <= 0) {
    return res.status(403).send({
      ok: false,
      msg: 'More credits are required',
    });
  }
  return next();
};
