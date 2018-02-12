
const express = require('express');
const bodyParser = require('body-parser');

// =============================
const app = express();
const PORT = process.env.PORT || 8080;

// Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });