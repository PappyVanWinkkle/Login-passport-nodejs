var express = require('express');
var passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login.ejs', { message: req.flash('loginMessage')});
})

router.get('/signup', function(req, res) {
  res.render('signup.ejs', { message: req.flash('signupMessage')});
});

router.get('/profile', isLoggedIn, function(req, res) {
  res.render('profile.ejs', { user: req.user });
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});
/* Post routes */
router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
  failureFlash: true
}));

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true
}));

/* google route */
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email']}));
router.get('/auth/google/callback', passport.authenticate('google', {
  successRedirect: '/profile',
  failureRedirect: '/'
}));
/* github route */
router.get('/auth/github', passport.authenticate('github'))
router.get('/auth/github/callback', passport.authenticate('github', {
  successRedirect: '/profile',
  failureRedirect: '/'
}));

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
    res.redirect('/');
  }
}
