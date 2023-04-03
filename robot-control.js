// Stuur het opgegeven commando naar de robot via de websockets-verbinding
function sendCommand(command) {
  socket.send(command);
}

// Koppel de knoppen aan de juiste commando's en stuur deze wanneer erop wordt geklikt
document.getElementById('forward').addEventListener('click', () => {
  sendCommand('forward');
});
document.getElementById('backward').addEventListener('click', () => {
  sendCommand('backward');
});
document.getElementById('left').addEventListener('click', () => {
  sendCommand('left');
});
document.getElementById('right').addEventListener('click', () => {
  sendCommand('right');
});
document.getElementById('stop').addEventListener('click', () => {
  sendCommand('stop');
});
