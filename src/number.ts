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


}