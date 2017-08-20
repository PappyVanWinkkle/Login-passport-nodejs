const GoogleStrategy = require('passport-google-oauth').Strategy;
const GithubStrategy = require('passport-github').Strategy;

module.exports = {
  githubAuth: {
    clientID: '8f437e68af60d75ba36b',
    clientSecret: 'e11e3b00bbe1b4a8d34689f5aea7f6027ba1fdfb',
    callbackURL: 'http://localhost:3000/auth/github/callback'
  },
  googleAuth: {
    clientID: '541347473866-sui2qrtgpuutp0ui01or7j2b431cigad.apps.googleusercontent.com',
    clientSecret: 'J8qjvp9p6c_vTOJ8_2kHo-M2',
    callbackURL: 'http://localhost:3000/auth/google/callback'
  }
};
