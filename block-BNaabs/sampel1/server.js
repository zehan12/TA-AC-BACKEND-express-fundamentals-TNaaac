var express = require('express');
var url = require("url");
var app = express();
var logger = require('morgan');

app.use( logger( 'dev' ) );

app.use( express.json() );
app.use( express.urlencoded( { extended : true } ) );

app.get( '/', ( req, res ) => {
    res.sendFile( __dirname + "/index.html" );
});

app.get( '/new', ( req, res ) => {
    res.sendFile( __dirname + '/new.html' );
} );

app.post( '/new', ( req, res ) => {
    console.log( req.body.name )
    res.send(req.body.name);
} )

app.get( '/users', ( req, res ) => {
    console.log( req.query );
    res.send(req.query)
} )

app.get( '/users/:username', ( req, res ) => {
    var username = req.params.username;
    res.send(username);
}  );

app.listen( 3000, () => {
    console.log('server listening on port 3k');
} );