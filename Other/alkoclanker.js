(() => {
  const SERVER = location.origin;
  const ROOM = window.room || "";

  let bot;
  let energy = 148970;
  let buyLocked = false;

  const MAX_ENERGY = 16000;

  // ÐÐ°ÑˆÐ° Ñ„Ð°Ð¹Ð»Ð¾Ð²Ð°Ñ ÑÐ¸ÑÑ‚ÐµÐ¼Ð°
  const foods = {
    "delete 50 files": -50,
    "sys file": -12000, // Ð˜Ð¡ÐŸÐ ÐÐ’Ð›Ð•ÐÐž: ÐŸÐµÑ€ÐµÐ¸Ð¼ÐµÐ½Ð¾Ð²Ð°Ð½Ð¾ Ð¸Ð· system32 Ð¿Ð¾ Ð²Ð°ÑˆÐµÐ¼Ñƒ Ð·Ð°Ð¿Ñ€Ð¾ÑÑƒ
    "virus.exe": -500,
    "photo.png": -10,
    "try delete me!": 10
  };

  function say(text){
    if(bot && bot.connected){
      bot.emit("talk",{text:text});
    }
  }

  function listfiles(){
    let keys = Object.keys(foods);
    if(keys.length === 0) {
      say("-%%**Files**%% System empty. No files found.");
      return;
    }
    let list = Object.entries(foods)
      .map(([f,e]) => f + " (" + e + ")")
      .join(", ");
    say("-%%**Files**%% " + list);
  }

  function createBot(){
    const sock = io(SERVER,{transports:["websocket"]});

    sock.on("connect",()=>{
      bot = sock; 

      bot.emit("login",{
        name:"AlkoPhone 3.0 !home",
        room:ROOM
      });

      bot.emit("command", { list: ["color", "black"] });

      setTimeout(()=>say("-^^ALKOPHONE 3.0^^%%~~Loading~~%% â–ˆâ–ˆâ–’â–’â–’â–’â–’"),855);
      setTimeout(()=>say("-^^ALKOPHONE 3.0^^%%~~Loading /sys/framework/sys/~~%% â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–’â–’"),1550);
      setTimeout(()=>say("-^^ALKOPHONE 3.0^^%%~~Loading~~%% almost, loading system apps â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ"),1750);
      setTimeout(()=>say("-^^%%WELCOME%%^^ ~~type !home to unlock"),2500);
    });

    return sock;
  } 

  function fixEnergy(){
    if(energy === 67) energy = 68;
  }

  function attach(sock){
    sock.on("talk", data => {
      if(!data || typeof data.text !== "string") return;
      if(data.guid === sock.guid || data.name === "AlkoPhone 1.0 !home" || data.guid === sock.id) return;

      let rawMsg = data.text.trim();
      let msg = rawMsg.toLowerCase();

      // ÐœÐµÐ½ÑŽ Ð¿Ñ€Ð¸Ð»Ð¾Ð¶ÐµÐ½Ð¸Ð¹
      if(msg === "!home"){
        say("-apps: !guessgame !alkostore !settings !files !alkonet");
        return;
      }

      // ÐœÐµÐ½ÑŽ Ð½Ð°ÑÑ‚Ñ€Ð¾ÐµÐº
      if(msg === "!settings"){
        say("-%%**SETTINGS%%** !network !memory !about");
        return;
      }

      // Ð˜Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ñ Ð¾Ð± ÑƒÑÑ‚Ñ€Ð¾Ð¹ÑÑ‚Ð²Ðµ
      if(msg === "!about"){
        say("-%%**ABOUT%%** !checkupdates Device model:alkophone 3 OS Version:3.0");
        return;
      }

      if(msg === "!checkupdates"){
        say("-%%**SOFTWARE UPDATE%%** ~~no updates avalible say !settings to get back");
        return;
      }

      if(msg === "!alkostore"){
        say("-%%**STORE%%** ~~something went worng home next time will work");
        return;
      }

      if(msg === "!network"){
        say("-%%**NETWORK%%** network found: **CONNECTED** BONZIWIFI status:good connect wifi anything you want");
        return;
      }

      if(msg === "!alkonet"){
        say("-%%**ALKONET%%** %%loaded%% [https://www.google.com/] ^^**Google**^^[search [AI Mode]");
        return;
      }

      if(msg === "!search https://bonziworld.kr/"){
        say("-%%**ALKONET%%** %%loaded%% [https://bonziworld.kr/] Users: 0 Room ID - ??? This room is puplic. This room is private You are the owner of the room. send ");
        return;
      }

      if(msg === "!search //https://yandex.ru/"){
        say("-%%**ALKONET%%** %%loaded%% [https://yandex.ru/] ^^Cannot enter site,^^ check network or accsess denied");
        return;
      }

      // ÐŸÐ¾ÐºÐ°Ð· Ñ„Ð°Ð¹Ð»Ð¾Ð²
      if(msg === "!files"){
        listfiles();
        return;
      }

      // Ð¡Ð¾ÑÑ‚Ð¾ÑÐ½Ð¸Ðµ Ð¿Ð°Ð¼ÑÑ‚Ð¸
      if(msg === "!memory"){
        say("-%%**MEMORY%%** " + energy + "/" + MAX_ENERGY + " GB avalible");
        return;
      }

      if(msg === "!guessgame"){
        say("-%%**guess game%%** red or blue? !red !blue");
        return;
      }

      if(msg === "!red"){
        say("-%%**You Win!%%** press home to get back");
        return;
      }

      if(msg === "!blue"){
        say("-%%**You Lost!%%** press home to get back");
        return;
      }

      // Ð”ÐžÐ‘ÐÐ’Ð›Ð•ÐÐž: ÐšÐ¾Ð¼Ð°Ð½Ð´Ð° ÑÐ¾Ð·Ð´Ð°Ð½Ð¸Ñ Ð½Ð¾Ð²Ð¾Ð³Ð¾ Ñ„Ð°Ð¹Ð»Ð°
      if(msg.startsWith("create ")){
        let newFileName = rawMsg.substring(7).trim();

        if(!newFileName){
          say("-%%**Error**%% Please specify a file name.");
          return;
        }

        // ÐŸÑ€Ð¾Ð²ÐµÑ€ÑÐµÐ¼, ÑÑƒÑ‰ÐµÑÑ‚Ð²ÑƒÐµÑ‚ Ð»Ð¸ ÑƒÐ¶Ðµ Ñ„Ð°Ð¹Ð» Ñ Ñ‚Ð°ÐºÐ¸Ð¼ Ð¸Ð¼ÐµÐ½ÐµÐ¼
        let exists = Object.keys(foods).some(key => key.toLowerCase() === newFileName.toLowerCase());
        if(exists){
          say("-%%**Error**%% File '" + newFileName + "' already exists.");
          return;
        }

        // Ð“ÐµÐ½ÐµÑ€Ð¸Ñ€ÑƒÐµÐ¼ ÑÐ»ÑƒÑ‡Ð°Ð¹Ð½Ñ‹Ð¹ "Ð²ÐµÑ" Ñ„Ð°Ð¹Ð»Ð° Ð¾Ñ‚ -10 Ð´Ð¾ -1000
        let randomWeight = -Math.floor(Math.random() * 990 + 10);
        
        // Ð—Ð°Ð¿Ð¸ÑÑ‹Ð²Ð°ÐµÐ¼ Ð² Ð¾Ð±ÑŠÐµÐºÑ‚ foods
        foods[newFileName] = randomWeight;

        // Ð¡Ð¾Ð·Ð´Ð°Ð½Ð¸Ðµ Ñ„Ð°Ð¹Ð»Ð° Ð·Ð°Ð½Ð¸Ð¼Ð°ÐµÑ‚ Ð¿Ð°Ð¼ÑÑ‚ÑŒ (Ñ‚Ð°Ðº ÐºÐ°Ðº Ð²ÐµÑ Ð¾Ñ‚Ñ€Ð¸Ñ†Ð°Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ð¹, += ÑƒÐ¼ÐµÐ½ÑŒÑˆÐ¸Ñ‚ energy)
        energy += randomWeight;

        say("-%%**System**%% Created file '" + newFileName + "' (" + randomWeight + "). Memory occupied.");
        return;
      }

      // Ð£Ð´Ð°Ð»ÐµÐ½Ð¸Ðµ ÐºÐ¾Ð½ÐºÑ€ÐµÑ‚Ð½Ð¾Ð³Ð¾ Ñ„Ð°Ð¹Ð»Ð° Ð¿Ð¾ ÐµÐ³Ð¾ Ð¸Ð¼ÐµÐ½Ð¸
      if(msg.startsWith("delete ")){
        let fileName = rawMsg.substring(7).trim(); 
        let fileKeyLower = fileName.toLowerCase();

        let exactKey = Object.keys(foods).find(key => key.toLowerCase() === fileKeyLower);

        if(exactKey){
          let fileWeight = foods[exactKey];
          
          // Ð£Ð´Ð°Ð»ÐµÐ½Ð¸Ðµ Ñ„Ð°Ð¹Ð»Ð° Ð¾ÑÐ²Ð¾Ð±Ð¾Ð¶Ð´Ð°ÐµÑ‚ Ð¿Ð°Ð¼ÑÑ‚ÑŒ
          energy -= fileWeight; 
          
          delete foods[exactKey]; 
          
          say("-%%**System**%% File '" + exactKey + "' successfully deleted. Memory updated!");
        } else {
          say("-%%**Error**%% File '" + fileName + "' not found in directory.");
        }
        return;
      }
    }); 
  } 

  bot = createBot();
  attach(bot);

})();
1
