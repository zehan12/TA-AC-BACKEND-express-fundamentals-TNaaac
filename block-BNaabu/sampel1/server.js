var express = require('express');
var logger = require('morgan');
var app = express();

app.use( logger('dev') );

// middleware which throws err
app.use( '/admin', (req, res, next) => {
    // if requested url is /admin throw error
    if (req.url === "admin") {
    return next("Unauthorized");
    }
    // other let it pass to next middleware by simply calling next()
    next();
});

app.get( '/', ( req, res ) => {
    res.send("This in Index Page");
} );

app.get( '/about', ( req, res ) => {
    res.send('This is about Page');
} );

app.use( ( req, res, next ) => {
    res.send("Page is not Found");
} );

app.use( ( err, req, res, next ) => {
    res.send(err);
} );

app.listen( 3000, ( ) => {
    console.log('server listening on port 3k');
} );