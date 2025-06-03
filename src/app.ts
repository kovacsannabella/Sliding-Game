import { Mezo } from "./number.js";

const meret = 10;
const mezok: Mezo[] = [];
const container = document.createElement("div");
container.className = "grid-container";
document.body.appendChild(container);

const ertekek = [];
for (let i = 1; i < meret * meret; i++) {
    ertekek.push(i);
}

function shuffle(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(ertekek);

for (let i = 0; i < meret * meret; i++) {
    const div = document.createElement("div");
    div.className = "grid-item";
    container.appendChild(div);
}

for (let i = 0; i < ertekek.length; i++) {
    const mezo = new Mezo(ertekek[i], mezok, meret);
    mezo.x = i % meret;
    mezo.y = Math.floor(i / meret);
    mezok.push(mezo);

    const index = mezo.y * meret + mezo.x;
    const gridItem = container.children[index] as HTMLElement;
    gridItem.appendChild(mezo.megjelenit());
}