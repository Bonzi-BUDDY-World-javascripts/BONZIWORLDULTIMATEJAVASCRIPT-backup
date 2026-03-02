(() => {
  const SERVER = location.origin;

  let room = "";
  let started = false;

  let bobAge = 10;
  let aliceAge = 11;

  let bob, alice;

  /* ================= GUI ================= */

  const gui = document.createElement("div");
  gui.style = `
    position:fixed;
    top:10px;
    left:10px;
    background:#111;
    color:#fff;
    padding:10px;
    font-family:monospace;
    z-index:9999;
    border:2px solid #555;
    width:260px;
  `;
  document.body.appendChild(gui);

  function clearGUI() {
    gui.innerHTML = "";
  }

  /* ========== ROOM SELECT GUI ========== */

  function roomSelector() {
    clearGUI();
    gui.innerHTML = `
      <b>Select Room</b><br><br>
      <input id="roomInput" placeholder="room name" style="width:100%"><br><br>
      <button id="joinBtn">Join Room</button>
      <button id="emptyBtn">""</button>
      <button id="defaultBtn">default</button>
    `;

    const roomInput = gui.querySelector("#roomInput");

    function joinRoom(r) {
      if (started) return;
      room = r;
      started = true;
      startBots();
      mainGUI();
    }

    gui.querySelector("#joinBtn").onclick = () => joinRoom(roomInput.value);
    gui.querySelector("#emptyBtn").onclick = () => joinRoom("");
    gui.querySelector("#defaultBtn").onclick = () => joinRoom("default");

    roomInput.addEventListener("keydown", e => {
      if (e.key === "Enter") joinRoom(roomInput.value);
    });
  }

  /* ========== MAIN GUI ========== */

  function mainGUI() {
    clearGUI();
    gui.innerHTML = `
      <b>The Clone Talker</b><br><br>

      <input id="sayAll" placeholder="say all bots" style="width:100%"><br><br>
      <input id="sayBob" placeholder="say bob" style="width:100%"><br><br>
      <input id="sayAlice" placeholder="say alice" style="width:100%"><br><br>

      <input id="cmd" placeholder='command: "speed", 1' style="width:100%">
    `;

    hookTextbox("#sayAll", text => {
      bob.emit("talk", { text });
      alice.emit("talk", { text });
    });

    hookTextbox("#sayBob", text => {
      bob.emit("talk", { text });
    });

    hookTextbox("#sayAlice", text => {
      alice.emit("talk", { text });
    });

    hookTextbox("#cmd", text => {
      try {
        const parts = eval(`[${text}]`);
        bob.emit("command", { list: parts });
        alice.emit("command", { list: parts });
      } catch {
        alert("Invalid command format");
      }
    });
  }

  function hookTextbox(sel, fn) {
    const box = gui.querySelector(sel);
    box.addEventListener("keydown", e => {
      if (e.key === "Enter" && box.value.trim()) {
        fn(box.value.trim());
        box.value = "";
      }
    });
  }

  /* ================= BOTS ================= */

  function createBot(name) {
    const sock = io(SERVER, { transports: ["websocket"] });
    sock.on("connect", () => {
      sock.emit("login", { name, room });
    });
    return sock;
  }

  function updateNames() {
    bob.emit("command", { list: ["name", `bob AGE:${bobAge}`] });
    alice.emit("command", { list: ["name", `alice AGE:${aliceAge}`] });
  }

  function startBots() {
    bob = createBot(`bob AGE:${bobAge}`);
    alice = createBot(`alice AGE:${aliceAge}`);

    [bob, alice].forEach(sock => {
      sock.on("talk", data => {
        if (!data || !data.text) return;

        if (data.text.toLowerCase().includes("birthday")) {
          bobAge++;
          aliceAge++;
          updateNames();
        }

        const match = data.text.match(/^say\s+(.+)/i);
        if (match) {
          bob.emit("talk", { text: match[1] });
          alice.emit("talk", { text: match[1] });
        }
      });
    });
  }

  /* ================= START ================= */

  roomSelector();
})();
1
