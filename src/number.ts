import { formatDiagnostic } from "typescript";

export class Mezo {
    ertek: number;
    x: number;
    y: number;
    mezok: Mezo[];
    meret: number;

    constructor(ertek: number, mezok: Mezo[], meret: number) {
        this.ertek = ertek;
        this.x = 0;
        this.y = 0;
        this.mezok = mezok;
        this.meret = meret;

    }

    szamotMozgat(x: number, y: number) {
        const regiHely = this.y * this.meret + this.x;
        const regiDiv = document.querySelectorAll('.grid-item')[regiHely];
        if (regiDiv) regiDiv.innerHTML = '';

        this.x = x;
        this.y = y;

        const ujHely = y * this.meret + x;
        const ujDiv = document.querySelectorAll('.grid-item')[ujHely];
        if (ujDiv) {
            const div = this.megjelenit();
            ujDiv.appendChild(div);
        }

    }

    megjelenit(): HTMLDivElement {
        const div = document.createElement('div');
        div.className = 'number';
        div.innerText = this.ertek.toString();

        div.onclick = () => {
            const ures = this.szabadHely();
            if (ures) {
                this.szamotMozgat(ures.x, ures.y);
            }
        };
        return div;
    }

    szabadHely(): { x: number, y: number } | null {
        const iranyok = [
            { ix: -1, iy: 0 }, // bal
            { ix: 1, iy: 0 }, // jobb
            { ix: 0, iy: -1 }, // fel
            { ix: 0, iy: 1 } // le
        ];

        for (let irany of iranyok) {
            const ujX = this.x + irany.ix;
            const ujY = this.y + irany.iy;

            if (ujX >= 0 && ujX < this.meret && ujY >= 0 && ujY < this.meret) {
                let foglalt = false;
                for (let e of this.mezok) {
                    if (e.x === ujX && e.y === ujY) {
                        foglalt = true;
                        break;
                    }
                }
                if (!foglalt) {
                    return { x: ujX, y: ujY };
                }
            }
        }
        return null;
    }

}