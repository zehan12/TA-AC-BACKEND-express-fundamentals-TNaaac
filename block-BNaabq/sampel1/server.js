var express = require('express');

var app = express();

var logger = require('morgan');

var cookiePraser = require('cookie-parser');

//! custom logger
// app.use( ( req, res, next ) => {
//     console.log( req.method, req.url );
//     next();
// } );

//! use logger
app.use( logger('dev') );

//! add cookie parser
app.use( cookiePraser() );

//! console the cookies
app.use((req, res, next)=>{
    console.log(req.cookies)
    next();
})

//! custom middleware
app.use( ( req, res, next ) => {
    //* create a cookie
    res.cookie( 'username', "zehan" );
    next();
} );

//! create get request on /about
app.get( '/about', ( req, res ) => {
    res.send("morgan and cookie parser");
} )

app.listen( 3000, ( ) => {
    console.log("server listening on port 3k");
} )