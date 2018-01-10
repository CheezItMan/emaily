module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({
      ok: false,
      msg: 'Login Required',
    });
  }
  return next();
};
