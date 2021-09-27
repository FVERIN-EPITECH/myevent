const express = require('express');
const app = express();
var cors = require('cors')
const dataRouter = require("./Routes/dataRouter");

//API ROUTE
require("./db/Dbconnect")
const port = process.env.PORT || 5500;
//usage pour cors
app.use(cors())
//route pour use les data
app.use("/",dataRouter);
app.use("/evenement",dataRouter);
app.use("/search",dataRouter);
//ecoute du srveur pour vérifier le bon fonctionement
app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});


//LINKEDIN ADDON
const passport = require("passport");
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const session = require('express-session')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const LINKEDIN_KEY = "778g91lfxl7d8u";
const LINKEDIN_SECRET = "qVRrOWBgjcCeUrUf";






//Linkedin
passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  app.use(session({ secret: "qVRrOWBgjcCeUrUf" }));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new LinkedInStrategy(
      {
        clientID: LINKEDIN_KEY,
        clientSecret: LINKEDIN_SECRET,
        callbackURL: "http://localhost:5500/auth/linkedin/callback",
        scope: ["r_emailaddress", "r_liteprofile"],
      },
      (
        accessToken,
        refreshToken,
        profile,
        done
      ) => {
        process.nextTick(() => {
          return done(null, profile);
        });
      }
    )
  );

  app.get(
    "/auth/linkedin",
    passport.authenticate("linkedin", { state: "SOME STATE" })
  );


  app.get(
    "/auth/linkedin/callback",
    passport.authenticate("linkedin", {
      successRedirect: "http://localhost:3000/",
      failureRedirect: "/login",
    })
  );

  app.use("/profil", (req, res) => {
     res.send(
        req.user._json
      )
  });

