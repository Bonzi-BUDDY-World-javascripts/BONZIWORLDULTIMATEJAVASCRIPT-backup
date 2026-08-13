setInterval(() => {
    cmd("name POSSESSED");
    cmd("dvdbounce 7");
    cmd("color");
    cmd("hat");
    setInterval(() => {
    socket.emit("talk", {
        text: "POSSESSED"
    });
    }, 100)
}, 1000)
