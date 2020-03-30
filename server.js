const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const routes = require("./routes/app.routes.js");


const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port, '127.0.0.1', function() {
    console.log(`App is runnig on port ${port}`);
});