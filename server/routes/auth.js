import express from "express";
import passport from "passport";

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "https://mern-image-search-pied.vercel.app",
    failureRedirect: "/auth/failure",
  })
);

// GitHub login
router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: "https://mern-image-search-pied.vercel.app",
    failureRedirect: "/auth/failure",
  })
);

router.get("/failure", (req, res) => res.send("Failed to login 😞"));


router.get("/logout", (req, res) => {
  req.logout(() => {
    req.session.destroy();
    res.clearCookie("connect.sid");
   res.status(200).json({ message: "Logged out successfully" });
  });
});


router.get("/user", (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.status(401).json({ message: "Not logged in" });
  }
});

export default router;
