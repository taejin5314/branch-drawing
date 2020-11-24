const canvas = document.querySelector('canvas');
const generateButton = document.querySelector('.generate-tree-button');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

function drawTree(startX, startY, len, angle, branchWidth, color1, color2) {
    ctx.beginPath();
    ctx.save();
    ctx.strokeStyle = color1;
    ctx.fillStyle = color2;
    ctx.shadowBlur = 15;
    ctx.shadowColor = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = branchWidth;
    ctx.translate(startX, startY);
    ctx.rotate(angle * Math.PI / 180);
    ctx.moveTo(0, 0);
    // ctx.lineTo(0, -len);
    if (angle > 0) {
        ctx.bezierCurveTo(10, -len / 2, 10, -len / 2, 0, -len)
    } else {
        ctx.bezierCurveTo(10, -len / 2, -10, -len / 2, 0, -len)
    }
    ctx.stroke();

    if (len < 8) {
        // leaf
        ctx.beginPath();
        ctx.arc(0, -len, 20, 0, Math.PI / 2);
        ctx.fill();
        ctx.restore();
        return;
    }

    const curve = (Math.random() * 10) + 10;

    drawTree(0, -len, len * 0.75, angle + curve, branchWidth * 0.7);
    drawTree(0, -len, len * 0.75, angle - curve, branchWidth * 0.7);

    ctx.restore();
}

drawTree(canvas.width / 2, canvas.height - 80, 120, 0, 25, 'brown', 'pink')

function generateRandomTree() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let centerPointX = canvas.width / 2;
    let len = Math.floor((Math.random() * 20) + 100);
    let angle = 0;
    let branchWidth = (Math.random() * 70) + 1;
    let color1 = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
    let color2 = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() + ')';

    generateButton.style.background = color1;

    drawTree(centerPointX, canvas.height - 80, len, angle, branchWidth, color1, color2);
}

generateButton.addEventListener('click', generateRandomTree);