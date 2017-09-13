var express = require('express');
var router = express.Router();
const rooms = require("../lib/poker/rooms")

router.get("/poker/:roomid", (req, res, next) => {
    const roomId = req.params.roomid;

    if (!rooms.has(roomId)) {
        rooms.add(roomId);
        // return next();
    }
    res.render("poker", { roomId })
});

router.get("/poker/:roomid/users", (req, res, next) => {
    let room = rooms.get(req.params.roomid);
    console.log(room, rooms);
    res.json(room ? room.users : []);
});

module.exports = router;