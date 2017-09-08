const rooms = new Map();
const PokerRoom = require("./PokerRoom");

module.exports = {
    get(roomId) {
        return rooms.get(roomId);
    },

    add(roomId) {
        if (!rooms.has(roomId)) {
            let room = new PokerRoom();
            rooms.set(roomId, room);
            return room;
        } else {
            return rooms.get(roomId);
        }
    },

    has(roomId) {
        return rooms.has(roomId);
    }
}