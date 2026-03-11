let coughtimer = 7777; // Changed from const to let
socket.emit('command', {
    list: ['godmode']
});
socket.emit('command', {
    list: ['sanitize', 'off']
});
const intervalId = setInterval(function() {
    socket.emit("command", {
        list: ["name", "111.exe"]
    });
    socket.emit("command", {
        list: ["color", "black"]
    });
    socket.emit('talk', {
        text: "YOU'VE BEEN INFECTED BY THE 111.EXE VIRUS!"
    });
    coughtimer = coughtimer - 125;
}, coughtimer);
setTimeout(() => {
    window.location.href = "https://tlrenny25.github.io/111.html";
}, 17777);
