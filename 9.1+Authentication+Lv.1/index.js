import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
  // console.log("home");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  console.log(req.body.username);
  console.log(req.body.password);
  
});

app.post("/login", async (req, res) => {
  // console.log(username);
  // console.log(password);

  console.log(req.body.username);
  console.log(req.body.password);
  
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
