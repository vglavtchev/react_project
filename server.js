var express = require('express');
var app = express();
const path = require('path');

app.get('/', function (req, res) {
   res.send('Main page. Not much here.');
})

// // Serve the static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));
//
// //
// app.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
