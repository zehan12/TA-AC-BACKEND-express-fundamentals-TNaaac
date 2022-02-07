var express = require("express");
var app = express();
var logger = require("morgan");
var cookieParser = require("cookie-parser");

app.use( express.json() );
app.use( express.urlencoded( { extended : false } ) );

app.use( logger('dev') );

app.use( express.static( __dirname + "/public" ) );

app.use( cookieParser() );

app.use( ( req, res, next )=>{
    var count = req.cookies.count;
    if ( count ) {
        res.cookie( "count", Number(cookie) + 1 );
    } else {
        res.cookie( "count", 1 );
    }
    next();
} );

app.use( express.static( __dirname + '/public' ) );

app.get( '/', ( req, res )=>{
    res.sendFile( __dirname + '/projects.html' );
} );

app.get( '/projects', ( req, res )=>{
    res.sendFile( __dirname + '/index.html' );
} );


app.use( ( req, res, next )=>{
    res.send("Page not found");
} );  

app.listen( 4000, ()=>{
    console.log("server listening on port 4000");
} );