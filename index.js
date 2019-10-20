var app = require('express')();
var http=require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/',(req,res)=>{
    //res.send('<h1>Hello World</h1>');
    res.sendFile(__dirname+'/index.html')
})

io.on('connection',(socket)=>{
    console.log('a user connected');
    // socket.on('disconnect',()=>{
    //     console.log('user disconnected')
    // }) // prevented to refresh
    socket.on('chat message',(msg)=>{
        console.log('message: '+msg)
        io.emit('chat message',msg);
    })
})

http.listen(5000,()=>{
    console.log('listening on *:5000')
    
})