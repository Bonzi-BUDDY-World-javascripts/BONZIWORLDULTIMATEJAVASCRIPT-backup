const prefix = "420?";
const botname = "RowenBOT (" + prefix + "help)";
const version = "V1.0.10";
let isPremium = false; // set this to true for premium, you can remove this comment if you want
socket.emit("login", {
        name: botname,
        room: login_room.value,
    });
setup();

const help = `- %%^^COMMANDS:^^%% \n` +
`${prefix}help\\n ${prefix}help2\\n ${prefix}echo\\n ${prefix}joke\\n ${prefix}triggered\\n ${prefix}fact\\n ${prefix}hat\\n ${prefix}color\\n ${prefix}name\\n ${prefix}resethat\\n ${prefix}resetcolor\\n ${prefix}resetname\\n ${prefix}ship\\n ${prefix}roast\\n ${prefix}camel\\n ${prefix}llama\\n ${prefix}parrot\\n ${prefix}source\\n ${prefix}changelog\\n ${prefix}france\\n ${prefix}asshole\\n ${prefix}eyes-reveal\\n ${prefix}gokid`;

const help2 = `- %%^^COMMANDS:^^%% \n` +
`--${prefix}pp--\\n ${prefix}aplle\\n ${prefix}stfu`;

const changelog = `- ^^**${version}**^^\\n Added ${prefix}hat\\n Added ${prefix}cow\\n Added ${prefix}france\\n Added ${prefix}asshole\\n Added ${prefix}lumi\\n Added ${prefix}gokid\\n Added ${prefix}help2\\n Added ${prefix}pp\\n Added ${prefix}aplle\\n Edited ${prefix}lumi\\n Added ${prefix}stfu`;

function sendMsg(msg) {
    setTimeout(() => {
        socket.emit("talk", { text: msg });
    }, 200);
}

setTimeout(() => { socket.emit("command", { list: ["name", botname] }); }, 1000);
setTimeout(() => { socket.emit("command", { list: ["color", "red"] }); }, 1000);
setTimeout(() => { socket.emit("command", { list: ["hat", "sprout"] }); }, 1050);
setTimeout(() => { sendMsg(`wassup, yo local smoking bot is here! do 420?help to see the dank commands!`); }, 1000);
setInterval(() => {
        socket.emit("typing", 1);
    }, 60000);
setInterval(() => {
        socket.emit("typing", 0);
    }, 60002);
setInterval(() => {
        sendMsg(`this epic bot is still here! do 420?help to see the dank commands!`)
    }, 60003);

socket.on("talk", (message) => {
    const text = message.text;

    if (text === prefix + "help") return sendMsg(help);
    if (text === prefix + "help2") return sendMsg(help2);
    if (text === prefix + "changelog") return sendMsg(changelog);
    if (text.startsWith(prefix + "echo")) return sendMsg("fuck you"); // return sendMsg(text.substring(prefix.length + 5));
    if (text.startsWith(prefix + "say")) sendMsg(`This command has been temporarily disabled. Reason: abuse; Types of abuse: sexual, fraudcast, etc.`); // return sendMsg(text.substring(prefix.length + 4));
    if (text === prefix + "joke") return socket.emit("command", { list: ["joke"] });
    if (text === prefix + "triggered") return socket.emit("command", { list: ["triggered"] });
    if (text === prefix + "fact") return socket.emit("command", { list: ["fact"] });
    if (text === prefix + "france") return socket.emit("command", { list: ["france"] });
    if (text.startsWith(prefix + "hat")) return socket.emit("command", { list: ["hat", text.substring(prefix.length + 4)] });
    if (text.startsWith(prefix + "color")) return socket.emit("command", { list: ["color", text.substring(prefix.length + 6)] });
    if (text.startsWith(prefix + "name")) return socket.emit("command", { list: ["name", text.substring(prefix.length + 5)] });
    if (text.startsWith(prefix + "asshole")) return socket.emit("command", { list: ["asshole", text.substring(prefix.length + 7)] });
    if (text.startsWith(prefix + "resetname")) return socket.emit("command", { list: ["name", botname] });
    if (text.startsWith(prefix + "resetcolor")) return socket.emit("command", { list: ["color", "red"] });
    if (text.startsWith(prefix + "resethat")) return socket.emit("command", { list: ["hat", "sprout"] });

    if (text.startsWith(prefix + "roast")) {
        const user = text.substring(prefix.length + 6);
        if (!user) return sendMsg("Name Plz!\\n Example: ,roast user");
        const roasts = [
            `${user}, I'd agree with you, but then we'd both be wrong.`,
            `${user}, if laughter is the best medicine, your face must cure the world.`,
            `${user}, you bring everyone so much joy... when you leave the room.`,
            `${user}, you're proof evolution can go in reverse.`,
            `${user}, if I wanted to kill myself, I'd climb your ego and jump to your IQ.`
        ];
        const roast = roasts[Math.floor(Math.random() * roasts.length)];
        return sendMsg(roast);
    }

    if (text.startsWith(prefix + "ship")) {
        sendMsg(`This command has been removed. Reason: this command is too weird`);
    }

        if (text === prefix + "camel") {
        return sendMsg("This command has been removed. Reason: this meme has stolen popularity from the cow meme");
    }
    if (text === prefix + "llama") {
        return sendMsg("- ^^**U GOT THE LLAMA**^^");
    }
    if (text === prefix + "source") {
        return sendMsg("- ^^**SOURCE CODE:**^^\\n https://github.com/27105/RowenBOT/blob/main/rowenbot.js");
    }
    if (text === prefix + "parrot") {
        return sendMsg("- ^^**U GOT THE PARROT**^^");
    }
    if (text === prefix + "cow") {
        return sendMsg("- ^^**U GOT THE COW**^^");
    }
    if (text === prefix + "eyes-reveal") {
        cmd(`image https://files.catbox.moe/egh1p6.png`);
    }
    if (text.startsWith(prefix + "gokid")) {
    const userxd = text.substring(prefix.length + 6);
    const gokids = [
            `${userxd}, your a gokid!`,
            `${userxd}, your a fucking gokid!`
        ];
        const gokid = gokids[Math.floor(Math.random() * gokids.length)];
        return sendMsg(gokid);
    }
    if (text.startsWith(prefix + "pp")) {
        sendMsg(`This command has been removed. Reason: sexual`);
    }
    if (text === prefix + "aplle") {
        return sendMsg("- ^^**U GOT THE APLLE**^^");
    }
    if (text.startsWith(prefix + "stfu")) {
    const userxd2 = text.substring(prefix.length + 4);
    const stfus = [
            `${userxd2} shut the fuck up, NOW!`,
            `${userxd2} shut the fuck up, because I'm tired of your bullshit`
        ];
        const stfu = stfus[Math.floor(Math.random() * stfus.length)];
        return sendMsg(stfu);
    }
});
