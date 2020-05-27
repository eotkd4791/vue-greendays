const local = require('./localStrategy');
const { User } = require('../models');
const user = {};

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    if (user[id]) {
      done(user[id]);
    } else {
      User.findOne({
          where: { id },
          include: [{
            model: User,
            attributes: ['id', 'name'],
          }, {
            model: User,
            attributes: ['id', 'name'],
          }]
        })
        .then(user => {
          user[id] = user;
          done(null, user);
        })
        .catch(err => done(err));
    }
  });
  local(passport);
}