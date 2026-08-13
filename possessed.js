setInterval(() => {
    cmd("name POSSESSED");
    cmd("dvdbounce 7");
    cmd("color");
    cmd("hat");
    cmd("tag get possessed bitch!!!");
    setInterval(() => {
    socket.emit("talk", {
        text: "POSSESSED"
    });
    }, 500)
}, 1000)
