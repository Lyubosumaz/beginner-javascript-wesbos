function buzzer() {
    console.log('ENNGGGGGGGG');
}

// console.log('Starting');
// setTimeout(function () {
//     console.log('Done');
// }, 500);
// console.log('Finishing');

// setInterval(buzzer, 2000);

// function setImmediateInterval(funcToRun, ms) {
//     funcToRun();
//     return setInterval(funcToRun, ms);
// }

// setImmediateInterval(buzzer, 2000);
// function seyHi() {
//     console.log('Heyyy');
// }
// setImmediateInterval(seyHi, 200);

function destroy() {
    document.body.innerHTML = `<p>DESTROY</p>`;
}

const bombTimer = setTimeout(destroy, 500);

window.addEventListener('click', function () {
    console.log('You clicked! You saved the world');

    clearTimeout(bombTimer); // STOP THE TIMER FORM RUNNING
});

const helloInterval = setInterval(function () {
    console.log('Hello');
    console.log('World');
}, 100);

setTimeout(function () {
    clearInterval(helloInterval);
}, 3000);
