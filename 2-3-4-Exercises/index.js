const path = require('path');
const config = require('./config.js');
const {HttpServer,WebSocket, WebSocketMessage} = require('@aliceo2/web-ui');
const {InformationController} = require("./lib/controllers/information.controller")
const {InformationService} = require("./lib/services/information.service");
const { time, timeStamp } = require('console');
const http = new HttpServer(config.http, config.jwt, config.oAuth);

const informationService = new InformationService();
const informationController = new InformationController(informationService);

const ws = new WebSocket(http);

setInterval(()=>{
    const wsMessage = new WebSocketMessage(200).setCommand('hello').setPayload({message: `Hello Browser ${timeStamp}` })
    ws.broadcast(wsMessage);
},2000);


http.get('/info/:name',(informationController.retrieveInformationHandler.bind(informationController)),{
    public: true
})
http.addStaticPath(path.join(__dirname, 'public'));