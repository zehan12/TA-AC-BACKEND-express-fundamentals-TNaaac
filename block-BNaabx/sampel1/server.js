var express = require('express');
var app = express();

//! custom morgan logger:
app.use( ( req, res, next ) => {
    let currentDate = new Date();
    let formattedDate =( currentDate.getFullYear() + 
    "-" +
    ( currentDate.getMonth() + 1 ) +
    "-" +
    currentDate.getDate() + 
    " " +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds() );
    let method = req.method;
    let url = req.url;
    let status = res.statusCode;
    let log = `[${formattedDate}] ${method}:${url} ${status}`;
    console.log(log);
    next();
} );


//! custom prase json data
var json = (res, req, next ) => {
    var store = '';
    req.on( 'data', ( chunk ) => {
        store = store + chunk;
    } );
    req.end( 'end', (  ) => {
        req.body = store;
    } );
    next();
};

app.use( json );

//! custom static method:

var staticCustom = ( res, req, next ) => {
    if (req.url.split(".").pop() === "css") {
        res.send( __dirname + "filename" );
        }
}

app.use( staticCustom );

app.listen( 3000, (  ) => {
    console.log("server listening on port 3k with custom middlewares");
} );