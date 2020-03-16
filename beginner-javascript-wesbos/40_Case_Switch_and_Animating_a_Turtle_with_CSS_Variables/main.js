const tortoise = document.querySelector('.tortoise');
window.addEventListener('keydown', handleKeyDown);
let x = 0;
let y = 0;
const speed = 15;
let flipped = false;
let rotate = 0;

function handleKeyDown(event) {
    if (!event.key.includes('Arrow')) { return; }
    switch (event.key) {
        case 'ArrowUp':
            y -= 1;
            rotate = 90;
            break;
        case 'ArrowDown':
            y += 1;
            rotate = -90;
            break;
        case 'ArrowLeft':
            x -= 1;
            flipped = true;
            rotate = 0;
            break;
        case 'ArrowRight':
            x += 1;
            flipped = false;
            rotate = 0;
            break;
        default:
            console.log('That is not a valid move');
            break;
    }

    tortoise.setAttribute('style', `
    --rotateX: ${flipped ? '0' : '180deg'};
    --x: ${x * speed}px;
    --y: ${y * speed}px;
    --rotate: ${rotate}deg;
    `);
}