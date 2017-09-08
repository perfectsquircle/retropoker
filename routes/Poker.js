const rooms = new Map();
const PokerRoom = require("../lib/poker/PokerRoom");

class Poker {
    constructor(app) {
        app.get("/poker/:roomid", this.getPokerRoom.bind(this));
    }

    getPokerRoom(req, res, next) {
        const roomId = req.params.roomid;

        if (!rooms.has(roomId)) {
            this.createPokerRoom(roomId);
        }
        res.render("poker", { roomId })
    }

    createPokerRoom(roomId) {
        let room = new PokerRoom();
        rooms.set(roomId, room);
        return room;
    }
}

module.exports = Poker;