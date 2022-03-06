var express = require('express');
var fs = require('fs') ;
//
app = express();
//
console.log("...estoy en app.js \n **** env: "+process.env.TEST||"_NO_VAR_ENTORNO_"+"***\n****");
//
fs.readFile('/config.env', 'utf8' , (err, data) => {
	  if (err) {
		      console.error(err)
		      return
		    }
  console.log("....config.env: "+data+";") ;
}) ;
//
app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

