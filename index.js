// Setup basic express server
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require("./lib/sockets");
const port = process.env.PORT || 3001;
const rooms = require("./lib/poker/rooms");
const poker = require("./routes/poker")

let room = rooms.add("asdf");
let users = [
  room.addUser({ id: 1, name: 'Calvin' }),
  // room.addUser(2, 'Steven'),
  // room.addUser(3, 'Jake'),
  // room.addUser(4, 'Shane'),
  // room.addUser(5, 'Lucas'),
]

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(poker);

// Sockets
io.attach(server);
