const express = require("express");
const { connection } = require("./Data-Base/database");
const PORT = 3000;
const app = express();
const clientRouter = require("./ServerRoutes/Client");
const FreelancerRouter = require("./ServerRoutes/FreeLancer");
const offersRouter = require("./ServerRoutes/offers");
const UsersRouter = require("./ServerRoutes/users");
const http = require("http");
const path = require("path");
const busboy = require("then-busboy");
const fileUpload = require("express-fileupload");
const bodyParser=require("body-parser");
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static(__dirname + "/client/dist"));
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());


/*Routes*/

app.use("/api/clients", clientRouter);
app.use("/api/freeLancers", FreelancerRouter);
app.use("/api/offers", offersRouter);
app.use("/api/users", UsersRouter);
/*Server Connection*/

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/dist/index.html");
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
