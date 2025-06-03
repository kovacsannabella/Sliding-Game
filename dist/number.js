"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mezo = void 0;
var Mezo = /** @class */ (function () {
    function Mezo(ertek, mezok, meret) {
        this.ertek = ertek;
        this.x = 0;
        this.y = 0;
        this.mezok = mezok;
        this.meret = meret;
    }
    Mezo.prototype.szamotMozgat = function (x, y) {
        var regiHely = this.y * this.meret + this.x;
        var regiDiv = document.querySelectorAll('.grid-item')[regiHely];
        if (regiDiv)
            regiDiv.innerHTML = '';
        this.x = x;
        this.y = y;
        var ujHely = y * this.meret + x;
        var ujDiv = document.querySelectorAll('.grid-item')[ujHely];
        if (ujDiv) {
            var div = this.megjelenit();
            ujDiv.appendChild(div);
        }
    };
    Mezo.prototype.megjelenit = function () {
        var _this = this;
        var div = document.createElement('div');
        div.className = 'number';
        div.innerText = this.ertek.toString();
        div.onclick = function () {
            var ures = _this.szabadHely();
            if (ures) {
                _this.szamotMozgat(ures.x, ures.y);
            }
        };
        return div;
    };
    Mezo.prototype.szabadHely = function () {
        var iranyok = [
            { ix: -1, iy: 0 }, // bal
            { ix: 1, iy: 0 }, // jobb
            { ix: 0, iy: -1 }, // fel
            { ix: 0, iy: 1 } // le
        ];
        for (var _i = 0, iranyok_1 = iranyok; _i < iranyok_1.length; _i++) {
            var irany = iranyok_1[_i];
            var ujX = this.x + irany.ix;
            var ujY = this.y + irany.iy;
            if (ujX >= 0 && ujX < this.meret && ujY >= 0 && ujY < this.meret) {
                var foglalt = false;
                for (var _a = 0, _b = this.mezok; _a < _b.length; _a++) {
                    var e = _b[_a];
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
    };
    return Mezo;
}());
exports.Mezo = Mezo;
