const express =require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

// curl -X POST -H "Content-Type: application/json" -d '{"get_started":{"payload":"Welcome"}}' "https://graph.facebook.com/v2.6/me/messenger_profile?access_token=EAAY6pHGUkXABAFXv6u6puKKeuIPUyJ2Vb9ijL5EUh8ruzUb2yJQBcBh6zhZBjiut4N4HpxoQciHi4L5n1WZCXjVDBor06G4zBekSBQpnljHOGkZBqTcUyShTQpaU5UrBn9uUGDJttbERd2iCyR7RbrDaIG1uvh55uOo1UAkgOMl55Pv5ucs"


// app configuration
app.set('port', (process.env.PORT || 3000));


// setup our express application
app.use(morgan('dev')); // log every request to the console.
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json()); 


// app routes
require('./routes/webhookVerify')(app);


// warming up the engines !! setta !! go !!!.
app.listen(app.get('port'), function() {
  const url = 'http://localhost:' + app.set('port');
  console.log('Application running on port: ', app.get('port'));
});