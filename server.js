// Dependencies
const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

//static files
app.use(express.static('public'));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Router

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);



//listener
app.listen(PORT, () => {
console.log(`App listening on PORT: http://localhost:${PORT}`);
})