/*
 * Programming Quiz: Facebook Friends (7-5)
 */

var facebookProfile = {
    name: "Tyler",
    friends: 666,
    messages: ["Hello World", "2nd post", "I'm deleting FB"],
    postMessage: function(message) {
        this.messages.push(message);
    },
    deleteMessage: function (index) {
        this.messages.splice(index, 1);
    },
    addFriend: function () {
        this.friends++;
    },
    removeFriend: function () {
        this.friends--;
    }
}
