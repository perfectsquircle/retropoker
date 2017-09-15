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
}

module.exports = PokerRoom;