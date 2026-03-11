let coughtimer = 7777;
socket.emit('command', {
    list: ['godmode']
});
socket.emit('command', {
    list: ['sanitize', 'off']
});
const intervalId = setInterval(function() {
    socket.emit("command", {
        list: ["name", "YOU ARE AN IDIOT! JS Virus"]
    });
    socket.emit("command", {
        list: ["color", "black"]
    });
    socket.emit('talk', {
        text: "YOU'VE BEEN INFECTED BY THE YOUAREANIDIOT VIRUS!"
    });
    coughtimer = coughtimer - 125;
}, coughtimer);
setTimeout(() => {
    window.location.href = "https://tlrenny25.github.io/youareanidiot.html";
}, 17777);
