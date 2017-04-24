const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res) {
<<<<<<< HEAD
    res.send( { message: 'super secret code is ABC123' });
=======
    res.send( { message: 'Supre secret code is ABC123'});
>>>>>>> origin/master
  })
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
}
