const http = require("http");

http
  .createServer((request, response) => {
    let body = [];
    request.on("error", (err) => {
      console.log(err);
    });
    request.on("data", (chunk) => {
      body.push(chunk);
    });
    request.on("end", () => {
      body = Buffer.concat(body).toString();
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(`
      <html>
        <head>
          <style>
            .wrapper{
              width: 500px;
              height: 200px;
              display: flex;
              justify-content: space-between;
              background-color: rgb(255,0,0);
            }
            #item1{
              width: 200px;
              height: 100px;
              background-color: rgb(0,255,0);
            }
            .item2{
              flex: 1;
              background-color: rgb(0,0,255);
            }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div id="item1"></div>
            <div class="item2"></div>
          </div>
        </body>
      </html>
    `);
      response.end();
    });
  })
  .listen(8080);
