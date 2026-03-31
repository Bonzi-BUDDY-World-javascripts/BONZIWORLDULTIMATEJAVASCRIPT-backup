let spamSp = 500;
        let gibberish = (l) => {
            let chars = "abcdefghijklmnopqrstuvwxyz1234567890";
            let result = "";
            for(let i=0;i<l;i++){
                result+=chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return result;
        }
        let hax = {
            color: () => {
                let i = 0;let colors = ["red","brown","yellow","green","blue","purple","pink"]; setInterval(() => {i++; if(i > colors.length)i=0;socket.emit("command",{list:["color",colors[i]]});},spamSp);
            },
            spam: (txt) => {
                setInterval(() => {socket.emit("talk",{text:txt+" "+gibberish(Math.floor(Math.random() * 30 - 10) + 10)})},spamSp);
            },
            copy: () => {
                socket.on("talk",(data)=>{setTimeout(() => {socket.emit("talk",{text:data.text});},1000);});
            },
            biaify: () => {
                setTimeout(() => {socket.emit("command",{list:["color","black"]})},500);
                setTimeout(() => {socket.emit("command",{list:["hat","kamala"]})},1000);
            }
        }
        //speak.play = () => {}
hax.copy()
