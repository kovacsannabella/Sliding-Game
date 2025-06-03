import { Mezo } from './number';

const meret = 10;
const mezok: Mezo[] = [];

function init() {
    const grid = document.createElement('div');
    grid.className = 'grid-container';

    for (let i = 0; i < meret * meret; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-item';
        grid.appendChild(cell);
    }

    document.body.appendChild(grid);

    for (let i = 1; i < meret * meret; i++) {
        const mezo = new Mezo(i, mezok, meret);
        mezo.x = (i - 1) % meret;
        mezo.y = Math.floor((i - 1) / meret);
        mezok.push(mezo);

        const div = mezo.megjelenit();
        const index = mezo.y * meret + mezo.x;
        const hely = document.querySelectorAll('.grid-item')[index];
        if (hely) {
            hely.appendChild(div);
        }
    }
}

init();
