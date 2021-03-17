var tomb = [];
var tombvissza = [];
var parosTomb = [];

function dolgozz() {
    var adat = document.getElementById("adat").value;
    feltolt(adat);
    osszegzes();
    visszafele();
    otteloszthato();
    //hanydb();
}
function feltolt(db) {
    tomb = [];
    for (var i = 0; i < db; i++) {
        var vel = Math.floor(Math.random() * 10 + 1);
        tomb[i] = vel;
    }
    console.log(tomb);
    document.getElementById("szoveg").innerHTML = "A tömb elemei: " + tomb.join("; ");
}

function visszafele() {
    tombvissza = [];
    var index = 0;
    for (var i = 0; i <= tomb.length; i++) {
        tombvissza[index - 1] = tomb[tomb.length - i];
        index++;
    }
    document.getElementById("vissza").innerHTML = "Visszafelé: " + tombvissza.join("; ");

}

function osszegzes() {
    var osszeg = 0;
    for (var i = 0; i < tomb.length; i++) {
        osszeg += tomb[i];
    }
    document.getElementById("osszeg").innerHTML = "Az összeg: " + osszeg;
    paros();
}
function paros() {
    parosTomb = [];
    var index = 0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 2 === 0) {
            parosTomb[index] = tomb[i];
            index++;
        }
    }
    document.getElementById("paros").innerHTML = "Párosak: " + parosTomb.join(", ");
}
function otteloszthato() {
    var oszthato = 0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 5 === 0) {
            oszthato++;
        }
    }
    document.getElementById("oszthato").innerHTML = "5-el osztható: " + oszthato;

}
function init() {
    console.log("Itt vagyok!");
    document.getElementById("szoveg").innerHTML = "Helló! A JS DOLGOZIK";
    document.getElementById("ok").addEventListener("click", dolgozz);
}

window.addEventListener("load", init);

function hanydb() {
    var hanypirszam = [5, 1, 7, 1187];
    var darab = 0;
    for (var i = 0; i < hanyprimszam.length; i++) {
        if (hanypirszam[i] / hanypirszam[i]) {
            darab++;
        }
        if (hanypirszam[i] / 1) {
            darab++;
        }
        document.getElementById("primszam").addEventListener("click", dolgozz);
    }
}
