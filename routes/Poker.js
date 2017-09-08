class Poker {
    constructor(app) {
        app.get("/poker/:roomid", this.GetPoker);
    }

    GetPoker(req, res, next) {
        console.log(req.params.roomid);
        res.send("poker");
    }
}

module.exports = Poker;