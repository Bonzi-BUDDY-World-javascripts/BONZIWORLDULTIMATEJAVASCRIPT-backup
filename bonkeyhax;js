(function() {
    // Create styles
    const style = document.createElement('style');
    style.innerHTML = `
        .bonzihax-window {
            position: fixed;
            top: 100px;
            left: 100px;
            width: 470px;
            background: black;
            color: #00ff00;
            font-family: monospace;
            font-size: 16px;
            border: 3px solid #00ff00;
            padding: 10px;
            z-index: 9999;
            user-select: none;
            transition: box-shadow 0.3s ease-in-out;
        }
        .bonzihax-active {
            box-shadow: 0 0 15px #00ff00, 0 0 30px #00ff00;
        }
        .bonzihax-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: move;
            font-weight: bold;
        }
        .bonzihax-close {
            cursor: pointer;
        }
        .bonzihax-spinner {
            margin-left: 10px;
            font-weight: bold;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        .bonzihax-spinner::after {
            content: "✦";
            display: inline-block;
            animation: spin 1s linear infinite;
        }
        .bonzihax-sections {
            display: flex;
            justify-content: space-between;
        }
        .bonzihax-section {
            border: 2px solid #00ff00;
            padding: 8px;
            margin-top: 10px;
            width: 48%;
        }
        .bonzihax-input {
            width: 95%;
            margin: 4px 0;
            background: black;
            color: #00ff00;
            border: 1px solid #00ff00;
            padding: 4px;
        }
        .bonzihax-button {
            display: inline-block;
            margin-top: 8px;
            background: black;
            color: #00ff00;
            border: 1px solid #00ff00;
            padding: 4px 8px;
            cursor: pointer;
            margin-right: 5px;
        }
        .bonzihax-slider {
            width: 90%;
        }
        .bonzihax-placeholder {
            border: 2px solid #00ff00;
            text-align: center;
            margin-top: 10px;
            padding: 30px;
            color: #004400;
        }
    `;
    document.head.appendChild(style);

    // Create the window
    const win = document.createElement('div');
    win.className = 'bonzihax-window';
    win.innerHTML = `
        <div class="bonzihax-header">
            <div>
                BonziHAX <span class="bonzihax-spinner"></span>
            </div>
            <span class="bonzihax-close">[X]</span>
        </div>
        <div class="bonzihax-sections">
            <div class="bonzihax-section">
                <div><strong>REPEAT</strong></div>
                <div>MESSAGE:</div>
                <input class="bonzihax-input" id="repeat-msg" type="text">
                <div>INTERVAL (ms):</div>
                <input class="bonzihax-slider" id="repeat-interval" type="range" min="10" max="1500" value="500">
                <div>
                    <button class="bonzihax-button" id="repeat-start">START</button>
                    <button class="bonzihax-button" id="repeat-stop">STOP</button>
                </div>
            </div>
            <div class="bonzihax-section">
                <div><strong>MADNESS</strong></div>
                <div>URL:</div>
                <input class="bonzihax-input" id="madness-url" type="text">
                <div>NAME:</div>
                <input class="bonzihax-input" id="madness-name" type="text">
                <div>TEXT:</div>
                <input class="bonzihax-input" id="madness-text" type="text">
                <div>
                    <button class="bonzihax-button" id="madness-start">START</button>
                    <button class="bonzihax-button" id="madness-stop">STOP</button>
                </div>
            </div>
        </div>
        <div class="bonzihax-placeholder">coming soon...</div>
    `;
    document.body.appendChild(win);

    // Close functionality
    win.querySelector('.bonzihax-close').addEventListener('click', () => {
        win.remove();
    });

    // Drag functionality
    let isDragging = false, offsetX, offsetY;
    const header = win.querySelector('.bonzihax-header');
    header.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - win.offsetLeft;
        offsetY = e.clientY - win.offsetTop;
    });
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            win.style.left = (e.clientX - offsetX) + 'px';
            win.style.top = (e.clientY - offsetY) + 'px';
        }
    });
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // Glow toggle function
    function updateGlow() {
        if (repeatIntervalId || madnessIntervalId) {
            win.classList.add('bonzihax-active');
        } else {
            win.classList.remove('bonzihax-active');
        }
    }

    // Repeat functionality
    let repeatIntervalId;
    document.getElementById('repeat-start').addEventListener('click', () => {
        const message = document.getElementById('repeat-msg').value;
        const interval = document.getElementById('repeat-interval').value;

        if (repeatIntervalId) clearInterval(repeatIntervalId);

        repeatIntervalId = setInterval(() => {
            socket.emit('talk', { text: message });
        }, interval);

        updateGlow();
    });
    document.getElementById('repeat-stop').addEventListener('click', () => {
        if (repeatIntervalId) {
            clearInterval(repeatIntervalId);
            repeatIntervalId = null;
        }
        updateGlow();
    });

    // Madness functionality
    let madnessIntervalId;
    document.getElementById('madness-start').addEventListener('click', () => {
        const url = document.getElementById('madness-url').value;
        const name = document.getElementById('madness-name').value;
        const text = document.getElementById('madness-text').value;

        if (madnessIntervalId) clearInterval(madnessIntervalId);

        madnessIntervalId = setInterval(() => {
            var Doe = io(url);
            Doe.emit('login', { name: name });
            setTimeout(() => {
                Doe.emit('talk', { text: text });
            }, 1000);
        }, 1000);

        updateGlow();
    });
    document.getElementById('madness-stop').addEventListener('click', () => {
        if (madnessIntervalId) {
            clearInterval(madnessIntervalId);
            madnessIntervalId = null;
        }
        updateGlow();
    });
})();
