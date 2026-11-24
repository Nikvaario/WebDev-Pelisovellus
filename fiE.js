// Draws a 16:9 ratio canvas to screen based on the size of a single tile
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const tileSize = 64;
// tileSize = palikkakoko
canvas.width = tileSize * 16;
canvas.height = tileSize * 9

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);