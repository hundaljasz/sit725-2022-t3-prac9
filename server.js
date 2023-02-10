var express = require("express")
var app = express()
var cors = require ('cors')
let projectCollection; 
let dbConnect = require("./dbConnect");
let projectRoutes = require("./routes/projectRoutes");
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use('/api/projects', projectRoutes)

var port = process.env.port || 3000;


io.on('connection', function (socket) {
    console.log('a user connected');
    // code to handle the connection event
    socket.on('disconnect',function () {  
        console.log('user disconnected');
    });
    setInterval(function () {
        socket.emit('number', parseInt(Math.random()*10));
    })
});

app.listen(port,()=>{
    console.log("App listening to: http://localhost: "+port)
}
)
