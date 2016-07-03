module.exports = {
  auth: function(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()) {
      return next();
    }

    // If not authenticated, redirect to the login screen
    return res.redirect('/login');
  }
};
