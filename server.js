// Dependencies
const express = require('express');

const app = express();

const PORT = process.enc.PORT || 8080;

//Router

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//listener
app.listen(PORT, () => {
console.log(`App listening on PORT: ${PORT}`);
})