// Dependencies
const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

//Router

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//static files
app.use('/assets', express.static(__dirname + '/public'))

//listener
app.listen(PORT, () => {
console.log(`App listening on PORT: ${PORT}`);
})