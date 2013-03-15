function Message(to, from, msg) {
    this.to = to;
    this.from = from;
    this.msg = msg;

    Message.prototype.asJson = function () {
        return "{'to':'" + this.to + "', 'from':'" + this.from + "', 'message':'" + this.msg + "'}";
    }
}