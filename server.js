let express = require('express');
// let path = require('path');
let serveStatic = require('serve-static');

app = express();
app.use(serveStatic(__dirname + "/dist"));

const port = process.env.PORT || 3000
app.listen(port);
console.log('server started '+ port);