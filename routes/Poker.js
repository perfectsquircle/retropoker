const rooms = require("../lib/poker/rooms")

class Poker {
    constructor(app) {
        app.get("/poker/:roomid", this.getPokerRoom.bind(this));
    }

    getPokerRoom(req, res, next) {
        const roomId = req.params.roomid;

        if (!rooms.has(roomId)) {
            rooms.add(roomId);
            // return next();
        }
        res.render("poker", { roomId })
    }

    createPokerRoom(roomId) {

    }
}

module.exports = Poker;