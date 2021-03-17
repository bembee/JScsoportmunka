var tomb = [];

function dolgozz() {
    var adat = document.getElementById("adat").value;
    feltolt(adat);
    osszegzes();
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
