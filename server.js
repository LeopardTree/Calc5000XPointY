// PWD is the current working directory when the process is started, 
//but it is constant.process.cwd() is asking the underlying system for the process's current directory
process.env.PWD = process.cwd();
var http = require('http')
, fs = require("fs")
, url = require("url")
, express = require('express')
, path = require('path');
var app = express();

function savePage(res, query) {
    res.write("<!DOCTYPE html>\n");
    res.write("<html>\n");
    res.write("  <head>\n");
    res.write("    <meta charset='utf-8'/>\n");
    res.write("  </head>\n");
    res.write("  <body>\n");
    var savedVals = query.savenums.split("#");
    fs.writeFileSync('./public/values.js', "    var s = 	{" + savedVals[0] + "};" + "\n"
        + "    var g =  	{" + savedVals[1] + "};" );
    res.write("<p>Saved values on file</p>");
    res.write("<a href='http://localhost:8081/'>go back to main</a>");
    res.write("  </body>\n");
    res.write("</html>\n");
    return res.end();
}

app.use(express.static(process.env.PWD + '/public'));

app.get('/saved', function (req, res) {
    var p = url.parse(req.url, true);
    savePage(res, p.query);
});
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/calc5000xPointY.html');
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
