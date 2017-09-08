// Setup basic express server
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require("./lib/sockets")(server);
const port = process.env.PORT || 3000;
const Poker = require("./routes/Poker")

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});

app.set('view engine', 'ejs');

// Routing
app.use(express.static(path.join(__dirname, 'public')));
new Poker(app);
