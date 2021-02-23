// Installed dependencies
const express = require ("express");

// creates app server
const app = express();
const PORT = process.env.PORT || 3000;

//Express app to handle data parsing
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(express.static("./public"));

// html routes 
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// App listener to start server and console.log app PORT
app.listen(PORT, function () {
    console.log(" App is listening on PORT: " + PORT);
});




