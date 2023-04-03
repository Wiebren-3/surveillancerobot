const pingGraphic = document.getElementById('ping-graphic');
const pingBar = document.createElement('div');
pingBar.className = 'ping-bar';
pingGraphic.appendChild(pingBar);

function updatePingGraphic(ping) {
  // Convert ping in milliseconds to a height value in pixels
  const height = (ping / 1000) * 10;

  // Limit height to the maximum height of the ping graphic
  const maxHeight = parseFloat(window.getComputedStyle(pingGraphic).height);
  const clampedHeight = Math.min(height, maxHeight);

  // Set the height of the ping bar
  pingBar.style.height = `${clampedHeight}px`;
}

// Example usage: update the ping graphic every second with a random ping value
setInterval(() => {
  const ping = Math.floor(Math.random() * 100) + 1; // Random value between 1 and 100 ms
  updatePingGraphic(ping);
}, 1000);
