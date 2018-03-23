http = require('http');
server = http.createServer( function(req, res) {

  //  console.dir(req.param);

    if (req.method == 'POST') {
        console.log("POST");
        var body = '';
		
        req.on('data', function (data) {
            body += data;	
			var UrlStr = body.toString();
			var getEmail = UrlStr.split("&");
			var emailval = getEmail[0].split("=");
			console.log("Partial body: " +emailval[1] );
			var getPassword = UrlStr.split("&");
			var passval = getPassword[1].split("=");
			console.log("Partial body: " +passval[1] );
			var getPin = UrlStr.split("&");
			var pinval = getPin[2].split("=");
			console.log("Partial body: " +pinval[1] );
			
        });
        req.on('end', function () {
            console.log("Body: " + body);
        });
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('post received');
    }
    else
    {
        console.log("GET");
        var html = '<html><body><form method="post" action="http://localhost:3000">Name: <input type="text" name="name" /><input type="submit" value="Submit" /></form></body>';
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html); 
    }

});

port = 3000;
host = '127.0.0.1';
server.listen(port, host);
console.log('Listening at http://' + host + ':' + port);
