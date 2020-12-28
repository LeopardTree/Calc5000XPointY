var http = require('http');
var fs = require("fs");
var url = require("url");
function savePage(res, query) {
    res.write("<!DOCTYPE html>\n");
    res.write("<html>\n");
    res.write("  <head>\n");
    res.write("    <meta charset='utf-8'/>\n");
    res.write("  </head>\n");
    res.write("  <body>\n");
    var savedValues = query.split("#");
    var array = ['T', 'Z', 'Y', 'X', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'X'];
    for (i in array) {
        array[i] = savedValues[i];
    }
    
    res.write("    <p>Saved values on file"+ "</p>");

    fs.appendFileSync('phone.lis', fornamn + " " + efternamn + "," + adress + "\n");

    let data = fs.readFileSync('phone.lis');
    // res.write(data);
    let lines = data.toString().split(/\r?\n/);
    for (l of lines) {
        res.write("<p>" + l + "</p>");
    }
    res.write("  </body>\n");
    res.write("</html>\n");
}

function mainPage(res) {
    fs.readFile("calc5000xPointY.html", function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}
/* Register server: */
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    console.log("Serving " + req.url);
    var p = url.parse(req.url, true);
    var path = p.pathname;
    if (path == "/") {
        mainPage(res);
    }
    if (path == "/saved") {
        calcPage(res);
    }
}).listen(8080);