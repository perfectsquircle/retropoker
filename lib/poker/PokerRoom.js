const User = require("../model/User")

class PokerRoom {
    constructor() {
        this.users = new Map();
    }

    addUser(user) {
        this.users.set(user.id, user);
        return user;
    }

    getUsers() {
        return Array.from(this.users.values());
    }

    playCard(userId, card) {
        this.users.find(u => u.id === userId).selectedCard = card;
    }
}

module.exports = PokerRoom;