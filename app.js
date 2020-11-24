const canvas = document.querySelector('.canvas');
const generateButton = document.querySelector('.generate-tree-button');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

function drawTree(startX, startY, len, angle, brandWidth, color1, color2) {
    ctx.beginPath();
    ctx.save();
    ctx.strokeStyle = color1;
    ctx.fillStyle = color2;
    ctx.lineWidth = brandWidth;
    ctx.translate(startX, startY);
    ctx.rotate(angle * Math.PI / 180);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -len);
    ctx.stroke();
}
