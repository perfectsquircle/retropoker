class User {
    constructor(id, name, selectedCard) {
        this.id = id;
        this.name = name;
        this.selectedCard = selectedCard;
    }

    static async getUsersForRoom(roomId) {
        let users = await fetch(`/api/poker/${roomId}/users`);
        let usersJson = await users.json();
        return usersJson.map(u => new User(u.id, u.name, u.selectedCard))
    }

    static getCurrentUser() {
        var currentUserString = localStorage.getItem("currentUser");
        if (currentUserString) {
            return JSON.parse(currentUserString);
        }
    }

    static setCurrentUser(user) {
        var currentUserString = JSON.stringify(user);
        if (currentUserString) {
            localStorage.setItem("currentUser", currentUserString);
        }
    }
}

export default User;