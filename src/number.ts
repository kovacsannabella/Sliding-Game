export class Mezo{
    ertek: number;
    x: number;
    y: number;
    mezok: Mezo[];
    meret: number;

    constructor(ertek: number, mezok: Mezo[], meret: number){
        this.ertek = ertek;
        this.x = 0;
        this.y = 0;
        this.mezok = mezok;
        this.meret = meret;

    }

    szamotMozgat(x: number, y: number){
        const regiHely = this.y * this.meret + this.x;
        const regiDiv = document.querySelectorAll('.grid-item')[regiHely];
        if (regiDiv) regiDiv.innerHTML = '';

        this.x = x;
        this.y = y;

        const ujHely = y * this.meret + x;
        const ujDiv = document.querySelectorAll('.grid-item')[ujHely];
        if (ujDiv) {
            const div = this.Megjelenit();
            ujDiv.appendChild(div);
        }

    }


}