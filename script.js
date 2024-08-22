document.addEventListener('keydown', moverJugadores);

const jugador1 = document.getElementById('jugador1');
const jugador2 = document.getElementById('jugador2');
const balon = document.getElementById('balon');
const porteria = document.getElementById('porteria');

let jugador1X = 50;
let jugador1Y = 200;

let jugador2X = 550;
let jugador2Y = 200;

function moverJugadores(event) {
    switch (event.key) {
        // Controles Jugador 1 (WASD)
        case 'w':
            jugador1Y -= 10;
            break;
        case 's':
            jugador1Y += 10;
            break;
        case 'a':
            jugador1X -= 10;
            break;
        case 'd':
            jugador1X += 10;
            break;
        // Controles Jugador 2 (Flechas)
        case 'ArrowUp':
            jugador2Y -= 10;
            break;
        case 'ArrowDown':
            jugador2Y += 10;
            break;
        case 'ArrowLeft':
            jugador2X -= 10;
            break;
        case 'ArrowRight':
            jugador2X += 10;
            break;
    }

    // Mover jugadores
    jugador1.style.top = jugador1Y + 'px';
    jugador1.style.left = jugador1X + 'px';

    jugador2.style.top = jugador2Y + 'px';
    jugador2.style.left = jugador2X + 'px';

    verificarGol();
}

function verificarGol() {
    const jugador1Rect = jugador1.getBoundingClientRect();
    const jugador2Rect = jugador2.getBoundingClientRect();
    const balonRect = balon.getBoundingClientRect();
    const porteriaRect = porteria.getBoundingClientRect();

    // Jugador 1 empuja el balón
    if (
        jugador1Rect.right > balonRect.left &&
        jugador1Rect.left < balonRect.right &&
        jugador1Rect.bottom > balonRect.top &&
        jugador1Rect.top < balonRect.bottom
    ) {
        moverBalon(jugador1X, jugador1Y);
    }

    // Jugador 2 empuja el balón
    if (
        jugador2Rect.right > balonRect.left &&
        jugador2Rect.left < balonRect.right &&
        jugador2Rect.bottom > balonRect.top &&
        jugador2Rect.top < balonRect.bottom
    ) {
        moverBalon(jugador2X, jugador2Y);
    }

    // Verificar si el balón entra en la portería
    if (
        balonRect.right > porteriaRect.left &&
        balonRect.left < porteriaRect.right &&
        balonRect.bottom > porteriaRect.top &&
        balonRect.top < porteriaRect.bottom
    ) {
        alert('¡Gol!');
        resetearJuego();
    }
}

function moverBalon(jugadorX, jugadorY) {
    balon.style.top = jugadorY + 'px';
    balon.style.left = jugadorX + 'px';
}

function resetearJuego() {
    jugador1X = 50;
    jugador1Y = 200;
    jugador1.style.top = jugador1Y + 'px';
    jugador1.style.left = jugador1X + 'px';

    jugador2X = 550;
    jugador2Y = 200;
    jugador2.style.top = jugador2Y + 'px';
    jugador2.style.left = jugador2X + 'px';

    balon.style.top = '200px';
    balon.style.left = '300px';
}
