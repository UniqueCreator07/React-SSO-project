import express from "express";
import passport from "passport";
import session from "express-session";
import dotenv from "dotenv";
import "./passportConfig.js";

dotenv.config();
const app = express();

app.use(session({ secret: "secret", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => res.send("SSO Server Running"));

app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get("/auth/google/callback", passport.authenticate("google", {
  successRedirect: "/success",
  failureRedirect: "/failure",
}));

app.get("/auth/github", passport.authenticate("github", { scope: ["user:email"] }));

app.get(
  "/auth/github/callback",
  passport.authenticate("github", {
    successRedirect: "http://localhost:3000/success",
    failureRedirect: "/failure",
  })
);


app.get("/success", (req, res) => res.send("Login Success!"));
app.get("/failure", (req, res) => res.send("Login Failed!"));

app.listen(5000, () => console.log("✅ Server running on port 5000"));
