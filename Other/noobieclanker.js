let thisbot = io("//");
let roomData = {};
let cannotAskNoobie = false;
let roomid = null;
let botCannotAsshole = true;
let hostID = me;
let lockcmd = false;
let msg = null;
let askCommandDisabled = false;
var botUser = null;
const startTime = Date.now();
const prefix = "n*";
const botname = "NoobieBot";
const lockcommand = true
const creator = "Noobie80";
let isPremium = false;
const startupSound = new Audio('https://files.catbox.moe/wqek9l.mp3'); //unused
const logonSound = new Audio('https://github.com/MCPlayer2015/all-windows-sounds/raw/refs/heads/main/(2001)%20Windows%20XP/Windows%20XP%20Logon%20Sound.wav');

const help = `- ^^%%$r$${botname} Commands 1/2$r$%%^^ \n` +
`**${prefix}links\\n --${prefix}echo (message)--\\n ${prefix}joke\\n ${prefix}bonzipasta\\n ${prefix}fact\\n ${prefix}hat (hat)\\n ${prefix}color (color)\\n --${prefix}name (name)--\\n ${prefix}restore\\n --${prefix}ship (name1) and (name2)--\\n --${prefix}roast (name)--\\n ${prefix}aplle\\n ${prefix}llama\\n ${prefix}parrot\\n ${prefix}source\\n ${prefix}changelog\\n ${prefix}france\\n ${prefix}asshole\\n ${prefix}noob\\n ${prefix}gokid (name)**`;

const help2 = `- ^^%%$r$${botname} Commands 2/2$r$%%^^ \n` +
`**--${prefix}pp (name)--\\n ${prefix}bacon\\n ${prefix}stupidbitch\\n ${prefix}gibberish\\n ${prefix}stfu (name)\\n ${prefix}fuk (name)\\n ${prefix}josephify\\n ${prefix}jzify\\n ${prefix}ack (message)\\n ${prefix}asknoobie (question)\\n ${prefix}why\\n ${prefix}myinfo\\n ${prefix}uptime\\n ${prefix}hostinfo`;
const nukelines = [
            `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`,
            `I JUST DID A BOOM BOOM!`,
            `Goodbye everyone! I'm going to the purple void!`,
            `Weeeeeeeeeeeeeeeeeee`,
            `KaBLAM! There goes myself.`,
            `AAAAAAAAAAAAAAAAAAAAA!`
        ];
        const nukeline = nukelines[Math.floor(Math.random() * nukelines.length)];
const otherUserNukes = [
            "KaBLAM! There goes that bonzi",
            "KaBOOM! That bonzi did a boom boom!",
            "[[kabum]]",
            "[[kabum]]! That bonzi did a [[bum bum]]"
        ];

function sendMsg(msg) {
    setTimeout(() => {
        thisbot.emit("talk", { text: msg });
    }, 200);
}
function botcmd(str) {
	let [command, ...args] = str.split(" ");
    thisbot.emit("command", {
		command,
		args: args.join(" "),
	});
}

setTimeout(() => { socket.emit("command", { list: ["color", "green"] }); }, 1000);
setTimeout(() => { socket.emit("command", { list: ["hat", "headphones"] }); }, 1000);

function useBot(text) {
    if (text === prefix + "help 1") return sendMsg(help);
    if (text === prefix + "help") return sendMsg(`-%%^^$r$${botname} Help Command Pages$r$^^%% ${prefix}help 1\\n ${prefix}help 2`);
    if (text === prefix + "help 2") return sendMsg(help2);
    if (text === prefix + "joke") return botcmd(`joke`);
    if (text === prefix + "/j") return botcmd(`joke`);
    if (text === prefix + "bonzipasta") return botcmd(`triggered`);
    if (text === prefix + "fact") return botcmd(`fact`);
    if (text === prefix + "france") return botcmd(`france`);
    if (text.startsWith(prefix + "hat")) return botcmd(`hat ${text.substring(prefix.length + 4)}`);
    if (text.startsWith(prefix + "color")) return botcmd(`color ${text.substring(prefix.length + 6)}`);
    if (text.startsWith(prefix + "stupidbitch")) return sendMsg(`disabled`);
    if (text.startsWith(prefix + "resetname")) return botcmd(`name ${botname}`);
    if (text.startsWith(prefix + "resetcolor")) return botcmd(`color green`);
    if (text.startsWith(prefix + "resethat")) return botcmd(`hat headphones`);
   if (text === prefix + "restore") {
        botcmd(`color green`);
        botcmd(`hat headphones`);
        botcmd(`name ${botname} (${prefix}help)`);
    }

    if (text.startsWith(prefix + "roast")) {
        const user = text.substring(prefix.length + 6);
        if (!user) return sendMsg(" ");
        const roasts = [
            `${user}, I'd agree with you, but then we'd both be wrong.`,
            `${user}, if laughter is the best medicine, your face must cure the world.`,
            `${user}, you bring everyone so much joy... when you leave the room.`,
            `${user}, you're proof evolution can go in reverse.`,
            `${user}, if I wanted to kill myself, I'd climb your ego and jump to your IQ.`
        ];
        const roast = roasts[Math.floor(Math.random() * roasts.length)];
        return sendMsg(`disabled`);
    }

    if (text.startsWith(prefix + "ship")) {
        const users = text.substring(prefix.length + 5).split(" and ");
        if (users.length !== 2) return sendMsg(" ");
        const percent = Math.floor(Math.random() * 101);
        return sendMsg(`disabled`);
    }

        if (text === prefix + "aplle") {
        return sendMsg("ew, apple.\\n yay, aplle");
    }
    if (text === prefix + "llama") {
        botcmd(`img https://files.catbox.moe/qkbzrk.jpeg`);
    }
    if (text === prefix + "source") {
        sendMsg(`-moved to ${prefix}links`);
    }
    if (text === prefix + "parrot") {
        botcmd(`img https://files.catbox.moe/9xklj5.jpeg`);
    }
    if (text === prefix + "cow") {
        botcmd(`image https://files.catbox.moe/91ab4p.jpeg`);
    }
if (text === prefix + "camel") {
        botcmd(`image https://files.catbox.moe/yesz9i.png`);
    }
    if (text === prefix + "noob") {
        botcmd(`image https://files.catbox.moe/npzky7.webp`);
    }
    if (text === prefix + "changelog") {
        sendMsg(`-moved to ${prefix}links`);
    }
    if (text === prefix + "links") {
      sendMsg("-https://file.garden/afT70JSNBTQ_DR1k/NoobieBot/links");
    }
    if (text.startsWith(prefix + "gokid")) {
    if (lockcmd === true) {
            sendMsg("disabled")
        }
        if (lockcmd === false) {
            const userxd = text.substring(prefix.length + 6);
    const gokids = [
            `${userxd}, your a gokid!`,
            `Hey, ${userxd}! You're a fucking gokid!`
        ];
        const gokid = gokids[Math.floor(Math.random() * gokids.length)];
        return sendMsg(gokid);
        }
    }
    if (text.startsWith(prefix + "pp")) {
    const name = text.substring(prefix.length + 2);
    const pps = [
            `This is ${name}'s PP: 8=Đ`,
            `This is ${name}'s PP: 8==Đ`,
            `This is ${name}'s PP: 8===Đ`,
            `This is ${name}'s PP: 8====Đ`,
            `This is ${name}'s PP: 8=====Đ`,
            `This is ${name}'s PP: 8======Đ`
        ];
        const pp = pps[Math.floor(Math.random() * pps.length)];
        return sendMsg("disabled");
     }
if (text === prefix + "bacon") {
        botcmd(`image https://files.catbox.moe/bkrcde.png`);
    }
if (text === prefix + "why") {
        botcmd("advpoll WHY WHY WHY WHY WHY;YOU GET NERVOUS MAN;WHYWHYWHYHYHYHYHYHHYHYHYHYH");
    }
if (text === prefix + "josephify") {
        botcmd(`color yellow`);
        botcmd(`hat tophat`);
        botcmd(`name Emperor Joseph`)
        sendMsg(`^^**MY EMPERORS!**^^`);
    }
if (text === prefix + "jzify") {
        botcmd(`color purple`);
        botcmd(`hat glitch`);
        botcmd(`name jzbot ${prefix}help`);
        sendMsg(`yo, try ${prefix}help. or ${prefix}source if you want my boy, bot.`);
    }
if (text.startsWith(prefix + "asknoobie")) {
        if (cannotAskNoobie === true) {
            sendMsg("")
        }
        if (cannotAskNoobie === false) {
            thisbot.emit("typing", 1);
            sendMsg("-waiting for noobie/bot host")
            const question = text.substring(prefix.length + 10).trim();
            const answer = prompt(`USER: ${question}`);
            sendMsg(`Noobie/Host Response: ${answer}`);
            thisbot.emit("typing", 0);
        }
    }
if (text.startsWith(prefix + "leave")) {
        if (botUser === me) {
        thisbot.disconnect();    
        }
        if (botUser !== me) {
        sendMsg("host only");    
        }
    }
if (text.startsWith(prefix + "say")) {
        if (lockcmd === false) {
        sendMsg(text.substring(prefix.length + 4));    
        }
        if (lockcmd !== false) {
        sendMsg("disabled");    
        }
    }
if (text.startsWith(prefix + "room")) {
        if (botUser === me) {
        thisbot.disconnect();
        socket.disconnect();
        joined = false;
        setTimeout(() => {
        socket.connect();
        thisbot.connect();
        thisbot.emit("login", {name: `${botname} (${prefix}help)`,room: text.substring(prefix.length + 4),});    
socket.emit("login", {name: login_name.value,room: text.substring(prefix.length + 4),});
}, 2000);    
        }
        if (botUser !== me) {
        sendMsg("host only");    
        }
    }
if (text.startsWith(prefix + "echo")) {
        if (lockcmd === false) {
        sendMsg(text.substring(prefix.length + 4));    
        }
        if (lockcmd !== false) {
        sendMsg("disabled");    
        }
    }
if (text.startsWith(prefix + "asshole")) {
        if (botCannotAsshole === true) {
            sendMsg("disabled")
        }
        if (botCannotAsshole === false) {
            botcmd(`asshole ${text.substring(prefix.length + 7)}`);
        }
    }
if (text.startsWith(prefix + "myinfo")) {
        sendMsg(`**^^Your info^^**\\n**ID:** ${botUser}\\n**APPEARANCE: **${usersPublic.get(botUser)?.color} gorilla\\n**PITCH: **${usersPublic.get(botUser)?.pitch}\\n**SPEED: **${usersPublic.get(botUser)?.speed}`);
    }
if (text.startsWith(prefix + "roominfo")) {
        sendMsg(`**^^Room info^^**\\n**ID:** ${roomData.id}\\n**USERS ONLINE: **${roomData.playersOnline}`);
    }
if (text.startsWith(prefix + "hostinfo")) {
        sendMsg(`**^^Host info^^**\\n**Host ID:** ${!me || me || "none"}\\n**Name: **${!me || usersPublic.get(me).name || login_name.value}`);
    }
if (text.startsWith(prefix + "cr6")) {
        sendMsg("^^**cr6**^^");
    }
if (text.startsWith(prefix + "gibberish")) {
        const gibberishlang = ["[[_^_cmn]]", "[[_^_vi]]", "[[_^_en]]", "[[_^_es]]", "[[_^_fr]]", "[[_^_de]]", "[[_^_it]]", "[[_^_pt]]", "[[_^_ru]]", "[[_^_ja]]", "[[_^_ko]]", "[[_^_zh]]", "[["];
const gibberishmessage = ["h@x du da de d3!", "tygtyty@", "@plle p0i", "sal@d@", "Hs @e", "p03 ere mu", "ooer nooer", "i?", "r0RRRR", "b0303er n030303r"];
        sendMsg(gibberishlang[Math.floor(Math.random() * gibberishlang.length)] + " " + gibberishmessage[Math.floor(Math.random() * gibberishmessage.length)]);
    }
    if (text.startsWith(prefix + "stfu")) {
    const userxd2 = text.substring(prefix.length + 4);
    const stfus = [
            `${userxd2} shut the fuck up, NOW!`,
            `${userxd2} shut the fuck up, because I'm tired of your bullshit`
        ];
        const stfu = stfus[Math.floor(Math.random() * stfus.length)];
        return sendMsg(`disabled`);
    }
    if (text.startsWith(prefix + "fuk")) {
        if (lockcmd === true) {
            sendMsg("disabled")
        }
        if (lockcmd === false) {
            const thingxd = text.substring(prefix.length + 3).trim();
    setTimeout(function(){
        sendMsg(`Guess The ${thingxd}`);
    }, 200);
    setTimeout(function(){
        sendMsg("correct");
    }, 2000);
    setTimeout(function(){
        sendMsg("IT'S A FUCKING [[fVk]]");
    }, 4000);
        }
 }
if (text.startsWith(prefix + "ack")) {
    if (lockcmd === true) {
            sendMsg("disabled")
        }
        if (lockcmd === false) {
            setTimeout(function(){
        sendMsg(`>${text.substring(prefix.length + 3).trim()}`);
    }, 200);
    setTimeout(function(){
        sendMsg("ACK!");
    }, 2000);
        }
}
if (text === prefix + "uptime") {
    const seconds = Math.floor((Date.now() - startTime) / 1000);

    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    return sendMsg(
        `Bot Uptime:\n${hours}h ${minutes % 60}m ${seconds % 60}s`
    );

			}
}
thisbot.on("nuked", () => { sendMsg(nukeline) });
thisbot.on("talk", (message) => {
    try {
    botUser = message.guid;
    msg = message.text.replaceAll("{NAME}", nisolate(usersPublic.get(botUser)?.name));
    useBot(msg);
   }
   catch(err) {
    sendMsg(`Error: ${err}`);
    }
});
function lockAskCreator() {
  cannotAskNoobie = true;
  sendMsg(`-n*asknoobie has been disabled by the creator`);
}
function unlockAskCreator() {
  cannotAskNoobie = false;
  sendMsg(`-n*asknoobie has been enabled by the creator`);
}
thisbot.on("loginFail", (data) => {
alert(`Failed to load NoobieBot:${data.reason}`);
});
thisbot.on("kick", (data) => {
alert(`NoobieBot got kicked:${data.reason}`);
});
thisbot.on("disconnect", () => {
alert("NoobieBot disconnected");
});
thisbot.on("update", () => {roomData = {id: roomid, playersOnline: usersPublic.size}});
thisbot.on("updateAll", () => {roomData = {id: roomid, playersOnline: usersPublic.size}});
thisbot.emit("login", {name: `${botname} (${prefix}help)`,room: login_room.value,});
socket.on("room", (data) => {hostID = data.you});
thisbot.on("room", (data) => {
logonSound.play();
joined = true;
socket.connect();
botcmd(`color green`);
botcmd(`hat headphones`);
setTimeout(() => { sendMsg(`${botname} Is Here. Type ${prefix}help To See Commands. Created By ${creator}.`); }, 2000);
roomid = data.room;
});
setInterval(() => {
        thisbot.emit("typing", 1);
    }, 60000);
setInterval(() => {
        thisbot.emit("typing", 0);
    }, 60002);
