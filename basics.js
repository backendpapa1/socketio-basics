const express = require('express');
const app = express();
const socketio = require('socket.io')

app.use(express.static(__dirname+'/public'));



const server = app.listen(8000);
const io = socketio(server);

io.on('connection',(socket) => {
    console.log(socket.id,' has connected')
    socket.emit('messageFromServer', {data:"welcome to the server"});

    socket.on('messageFromClient', (data) => {
        console.log(data.data)
    })
})