const { ExtractJwt, Strategy } = require("passport-jwt");
const passport = require("passport");
const User = require("../models/users");

const params = {
  secretOrKey: process.env.AUTH_KEY,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

passport.use(
  new Strategy(params, async (payload, done) => {
    try {
      const user = await User.findById(payload.id);
      user ? done(null, user) : done(new Error("User not found"));
    } catch (err) {
      done(err);
    }
  })
);
