var express = require('express');

var app = express();


function logger( req, res, next ) {
    console.log( req.method, req.url );
    next();
}

app.use( logger );

app.get( '/', ( req, res )=>{
    res.send("introduced to Middleware in express");
});

app.listen( 4000, ()=>{
    console.log("server listening on port 4000");
} );