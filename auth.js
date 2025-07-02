const passport = require('passport');
const localPassport = require('passport-local').Strategy;
const {Person} = require('./models/Person');

passport.use(new localPassport( async (user, passwd, done) => {
  try{
    console.log("Received Credentials: ", user, passwd);
    const userName = await Person.findOne({username: user});

    if(!userName)
      return done(null, false, { message: 'Invalid Username.'});

    const isPasswd = await userName.comparePassword(passwd);
    if(isPasswd){
      return done(null, userName);
    } else{
      return done(null, false, { message: 'Invalid Password.'});
    }
  }catch(err){
    return done(err);
  }
}));

module.exports = {
    passport,
};
