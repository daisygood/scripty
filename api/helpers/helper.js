var request = require('request');

module.exports.isLoggedIn = function(req, res) {
  return req.session.authenticated;
};

module.exports.checkUser = function(req, res, next) {
  if (!module.exports.isLoggedIn(req)) {
    res.send()
  } else {
    next();
  }
};

module.exports.createSession = function(req, res, newUser) {
  return req.session.regenerate(function() {
      req.session.user = newUser;
      res.redirect('/');
    });
};
