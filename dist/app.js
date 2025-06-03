import { Mezo } from "./number.js";
const meret = 10;
const mezok = [];
const container = document.createElement("div");
container.className = "grid-container";
document.body.appendChild(container);
for (let i = 0; i < meret * meret; i++) {
    const div = document.createElement("div");
    div.className = "grid-item";
    container.appendChild(div);
}
for (let i = 1; i < meret * meret; i++) {
    const mezo = new Mezo(i, mezok, meret);
    mezo.x = (i - 1) % meret;
    mezo.y = Math.floor((i - 1) / meret);
    mezok.push(mezo);
    const index = mezo.y * meret + mezo.x;
    const gridItem = container.children[index];
    gridItem.appendChild(mezo.megjelenit());
}
