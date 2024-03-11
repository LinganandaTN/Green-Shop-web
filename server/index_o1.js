import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import session from 'express-session';
import cookieParser from 'cookie-parser';

const PORT = 5000;
const app = express();

// Middleware
app.use(cookieParser());
app.use(session({ secret: "mano1234", saveUninitialized: false, resave: false, cookie: {
    maxAge: 60 * 60 * 1000, // 1 hour in milliseconds
    secure: false, // set to true if using HTTPS
    httpOnly: true, // cookie is only accessible via HTTP(S)
  } }));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true

}));

// Routes
const user = {
  name: "Mano Sriram",
  source: "Youtube"
};

app.get("/login", (req, res) => {
  req.session.user = user;
  req.session.save(() => {
    console.log(`in login = ${req.session}`);

    // console.log(`dd ${req.session}`);
    const sessionUser = req.session;
    console.log(`in rkr user = ${sessionUser}`);
    return res.send("User logged in");
  });
});

app.get("/user", (req, res) => {
  const sessionUser = req.session;
  console.log(`in rkr user = ${sessionUser}`);

  if (!sessionUser) {
    return res.status(401).json({ error: "User not logged in" });
  }
  console.log(`User: ${sessionUser.name}`);
  return res.json(sessionUser);
});

app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    return res.send("User logged out!");
  });
});

// Start the server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
