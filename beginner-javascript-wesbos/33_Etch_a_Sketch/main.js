// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 10;

// Setup our canvas for drawing
const { width, height } = canvas;

//create random x & y
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50% )`;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a drow function
function drow({ key }) {
    hue += 1;
    ctx.beginPath();
    ctx.moveTo(x, y);
    switch (key) {
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x += MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
            break;
        default:
            break;
    }
    ctx.strokeStyle = `hsl(${hue}, 100%, 50% )`;
    ctx.lineTo(x, y);
    ctx.stroke();
}

// wtite a handler for the keys
function handleKeys(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        drow({ key: e.key });
    }
}

// clear /shake function
function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener('animationend', function () {
        canvas.classList.remove('shake');
    }, { once: true });
}

// listen for arrow keys
window.addEventListener('keydown', handleKeys);
shakeButton.addEventListener('click', clearCanvas);