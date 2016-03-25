/**
 * Created by diego_gutierrez on 24/3/16.
 */


var express = require('express');
var swig =  require('swig');
var path = require('path');
var app = express();

app
  .use( express.static(path.join(__dirname, 'public')))

app.set('view engine', 'swig');
app.set('views', __dirname + '/views')


app.get('/', function (req,res) {
  res.render('index');
})


// setting template engine
swig.setDefaults({ varControls: ['<%=', '%>'] });

app.engine('html',swig.renderFile);

app.set('view engine', 'html');

// Swig will cache templates for you, but you can disable
// that and use Express's caching instead, if you like:
app.set('view cache', false);
// To disable Swig's cache, do the following:
swig.setDefaults({ cache: false });
// NOTE: You should always cache templates in a production environment.
// Don't leave both of these to `false` in production!

app.listen('8767', function () {
  console.log('starter port 8767');
});
