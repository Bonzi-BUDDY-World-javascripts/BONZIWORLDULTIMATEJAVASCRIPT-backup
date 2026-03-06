setInterval(() => {
    const socketb = io("//");
    socketb.emit("client", "MAIN");
    socketb.emit("login", {
        name: "Anonymous",
    });
    socketb.emit("command", {
        list: ["color"]
    });
    socketb.emit("command", {
        list: ["color"]
    });
    setInterval(() => {
    socketb.emit("talk", {
        text: "ME JEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW"
    });
    socket.emit("talk", {
        text: "ME JEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW"
    });
    }, 1500)
}, 1000)
