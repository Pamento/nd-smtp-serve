const SMTPServer = require("smtp-server").SMTPServer;

// This example starts a SMTP server using TLS with your own certificate and key
const server = new SMTPServer({
  secure: false,
  logger: true
  // key: fs.readFileSync("private.key"),
  // cert: fs.readFileSync("server.crt")
});
server.listen(465, function(){
  console.log('smtp is listen on ..')
});

server.on("error", err => {
  console.log("Error %s", err.message);
});