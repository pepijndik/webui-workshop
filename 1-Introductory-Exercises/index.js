// Include required modules
const {HttpServer,WebSocket, WebSocketMessage, LogManager} = require('@aliceo2/web-ui');
const logger = LogManager.getLogger('live-demo');

// create instance of http server
const http = new HttpServer({
  port: 8080,
  hostname:'localhost'
},{ expiration: '1d'});

const ws = new WebSocket(http);

logger.infoMessage("")
http.addStaticPath('public');
http.get('/welcome', (req, res) => {
    console.log(req);
    res.status(200).json({message: 'Hello World!'})
  }, { public: true }); 

  http.get('/hello-private', (req, res) => {
    console.log(req);
    res.status(200).json({message: 'Hello World!'})
  }, { public: false }); 

  //Server bind to hello
  ws.bind('hello', (message) => {
   logger.infoMessage(`Receiver message: ${message}`)
    // ...and send back 'print-response'
    return new WebSocketMessage().setCommand('hello').setPayload({ message: "Hello browser!"});
  });