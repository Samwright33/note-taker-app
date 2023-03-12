// Needed Dependencies 
const express = require('express');
const app = express();

// Port used
const PORT = process.env.port || 3001;

// Middleware for parsing JSON and generate route
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Generated routes
require("./routes/notesRoutes")(app);
require("./routes/apiRoutes")(app);

// App is now listening 
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`));