const User = require("../model/User")

class PokerRoom {
    constructor() {
        this.users = [];
    }

    addUser(userId, userName) {
        let user = new User(userId, userName);
        this.users.push(user);
        return user;
    }
}

module.exports = PokerRoom;