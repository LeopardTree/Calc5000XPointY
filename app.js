var http = require('http');
var fs = require("fs");
var url = require("url");
var arrayV = ['T', 'Z', 'Y', 'X', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'X'];
function savePage(res, query) {
    res.write("<!DOCTYPE html>\n");
    res.write("<html>\n");
    res.write("  <head>\n");
    res.write("    <meta charset='utf-8'/>\n");
    res.write("  </head>\n");
    res.write("  <body>\n");
    var savedVals = query.split("#");
    
    for (i in savedVals) {
        fs.writeFileSync('values.vls', savedVals[i] + "\n");
    }

    res.write("    <p>Saved values on file"+ "</p>");

    let data = fs.readFile('values.vls');
    // res.write(data);
    for (i in data) {
        res.write("<p>" + arrayV[i] + ":" +  i + "</p>");
    }
    res.write("  </body>\n");
    res.write("</html>\n");
}

function mainPage(res) {
    fs.readFile("calc5000xPointY.html", function (err, calc) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        let data = fs.readFile('values.vls');
        for (i in calc) {
                        if (i.includes("var s =")) {
                            for (int j = 0; j < 4; j++){ 
                                i.replace("T: 0", arrayV[j]+ ": " + data[j]);
                                }
            }
        }
        res.write(calc);
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