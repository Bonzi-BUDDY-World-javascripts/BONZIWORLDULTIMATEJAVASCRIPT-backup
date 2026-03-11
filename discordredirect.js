let coughtimer = 7777;
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
        text: "JOIN MY DISCORD NOW https://discord.gg/ZSFCDcuK"
    });
    coughtimer = coughtimer - 125;
}, coughtimer);
setTimeout(() => {
    window.location.href = "https://discord.gg/ZSFCDcuK";
}, 17777);
