"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var number_1 = require("./number");
var meret = 10;
var mezok = [];
function init() {
    var grid = document.createElement('div');
    grid.className = 'grid-container';
    for (var i = 0; i < meret * meret; i++) {
        var cell = document.createElement('div');
        cell.className = 'grid-item';
        grid.appendChild(cell);
    }
    document.body.appendChild(grid);
    for (var i = 1; i < meret * meret; i++) {
        var mezo = new number_1.Mezo(i, mezok, meret);
        mezo.x = (i - 1) % meret;
        mezo.y = Math.floor((i - 1) / meret);
        mezok.push(mezo);
        var div = mezo.megjelenit();
        var index = mezo.y * meret + mezo.x;
        var hely = document.querySelectorAll('.grid-item')[index];
        if (hely) {
            hely.appendChild(div);
        }
    }
}
init();
