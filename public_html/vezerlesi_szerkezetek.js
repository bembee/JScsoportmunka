var tomb = [];
var tombvissza = [];

function dolgozz() {
    var adat = document.getElementById("adat").value;
    feltolt(adat);
    osszegzes();
    visszafele();
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
        tombvissza[index-1] = tomb[tomb.length-i];
        index++;
    }
    document.getElementById("vissza").innerHTML = "visszafelé: " + tombvissza.join("; ");

}

function osszegzes() {
    var osszeg = 0;
    for (var i = 0; i < tomb.length; i++) {
        osszeg += tomb[i];
    }
    document.getElementById("osszeg").innerHTML = "Az elemek összege: " + osszeg;
}

function init() {
    console.log("Itt vagyok!");
    document.getElementById("szoveg").innerHTML = "Helló! A JS DOLGOZIK";
    document.getElementById("ok").addEventListener("click", dolgozz);
}

window.addEventListener("load", init);
