// function sapa(nama) {
//     console.log("Halo, " + nama + "!");
// }

// sapa("joy");
// sapa("seulgi");

// function tambah(a, b) {
//     return a + b;
// }

// let hasil = tambah(5, 3);
// console.log("hasil: " + hasil)

// let car = {
//     name: "Fiat",
//     model: 500,
//     weight: "850kg",
//     color: "White",

//     start: function() {
//         console.log("Mobil dinyalakan.");
//     },
//     drive: function() {
//         console.log("Mobil berjalan.");
//     },
//     brake: function() {
//         console.log("Mobil mengerem.");
//     },
//     stop: function() {
//         console.log("Mobil berhenti.");
//     }
// };

// console.log(car.name);
// console.log(car.color);

// car.start();
// car.drive();

let sepeda = {
    merk: "United",
    gear: 6,
    color: "Blue",

    start: function() {
        console.log("Sepeda mulai dikayuh");
    },
    drive: function() {
        console.log("Sepeda berjalan");
    },
    brake: function() {
        console.log("Sepeda mengerem");
    },
    stop: function() {
        console.log("Sepeda berhenti");
    },

};

console.log(sepeda.merk);
console.log(sepeda.gear);
console.log(sepeda.color);

sepeda.start();
sepeda.drive();
sepeda.brake();
sepeda.stop();