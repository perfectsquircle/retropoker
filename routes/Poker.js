const rooms = new Map();
const PokerRoom = require("../lib/poker/PokerRoom");

class Poker {
    constructor(app) {
        app.get("/poker/:roomid", this.getPokerRoom.bind(this));
    }

    getPokerRoom(req, res, next) {
        const roomId = req.params.roomid;
        console.log();

        if (rooms.has(roomId)) {
            res.send("joined existing room: " + roomId);
        } else {
            this.createPokerRoom(roomId);
            res.send("created room: " + roomId);
        }
    }

    createPokerRoom(roomId) {
        let room = new PokerRoom();
        rooms.set(roomId, room);
        return room;
    }
}

module.exports = Poker;