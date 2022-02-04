const e = require('express');
var express = require('express');

var app = express();


//! create a middelware
app.use( ( req, res, next )=>{
    console.log( req.method, req.url );
    next();
} );

//! taking the json data 
app.use( express.json() );

//! taking the form data
app.use( express.urlencoded( { extended:false } ) );

//! create a public dir and static method to access threw all 
app.use( express.static(__dirname + '/public' ) )

//! get request on index and render index.html
app.get( '/', ( req, res )=>{
    res.sendFile( __dirname + '/index.html' );
} );

//! post request on json and console the json data 
app.post( '/json', ( req, res )=>{
    console.log( req.body );
} );

//! post request on contact and console the form data
app.post( '/contact', ( req, res )=>{
    console.log( req.body );
} );

//! listening the server 3000
app.listen( 3000, ()=>{
    console.log("server listening on port 3000");
} );