import { WebSocketClient } from 'js/src/index.js'

const url = new URL(window.location);
const token = url.searchParams.get('token');
let ws = new WebSocket(`ws://localhost:8080?token=${token}`);

ws.onOpen = () => {
   console.log("Connected");
   ws.send(JSON.stringify({ command: 'Hello',token: token,payload:{ message: "start r" }}))
}

ws.onmessage = (message)=>{
  console.log(message);
}


