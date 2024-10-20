function rain() {
    let clound = document.querySelector('.clound');
    let e = document.createElement('div');

    e.classList.add('drop');
    clound.appendChild(e);

    let left = Math.floor(Math.random()*290-150);
    let size = Math.round() * 1.5;
    let duration = Math.random();

    e.innerText = '🩷';
    e.style.left = left + 'px';
    e.style.fontSize = 0.5 + size + 'em';
    e.style.animationDirection = 1 + duration + 's';

    setTimeout(function () {
        clound.removeChild(e);
    }, 2000)
}

setInterval(function () {
    rain();
}, 20)
