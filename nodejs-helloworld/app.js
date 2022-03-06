var express = require('express');
app = express();
//
console.log("...estoy en app.js \n **** env: "+process.env.TEST||"_NO_VAR_ENTORNO_"+"***\n****");
//
app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

