import { Mezo } from "./number.js";

const meret = 10;
const mezok: Mezo[] = [];
const container = document.createElement("div");
container.className = "grid-container";
document.body.appendChild(container);

const ertekek: (number | null)[] = [];
for (let i = 1; i < meret * meret; i++) {
    ertekek.push(i);
}
ertekek.push(null);

shuffle(ertekek);

function shuffle(array: (number | null)[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

for (let i = 0; i < meret * meret; i++) {
    const div = document.createElement("div");
    div.className = "grid-item";
    container.appendChild(div);
}

for (let i = 0; i < ertekek.length; i++) {
    const ertek = ertekek[i];
    const x = i % meret;
    const y = Math.floor(i / meret);
    const index = y * meret + x;
    const gridItem = container.children[index] as HTMLElement;

    if (ertek !== null) {
        const mezo = new Mezo(ertek, mezok, meret);
        mezo.x = x;
        mezo.y = y;
        mezok.push(mezo);
        gridItem.appendChild(mezo.megjelenit());
    } else {

    }
}