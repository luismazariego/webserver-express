const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000; //To know the port given by heroku, if the app runs on localhost we set port 3000 by default.

app.use( express.static(__dirname + '/public') ); //To serve static content like html pages.

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/', function (req, res) {    

    res.render('home', {
        name: 'luis mazariego'
    });

});

app.get('/about', function (req, res) {    

    res.render('about');

});


app.listen(port, () => console.log(`Listening on port: ${port}`));