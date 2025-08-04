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
//     nama: "Fiat",
//     model: 500,
//     weight: "850kg",
//     color: "White",

//     start: function() {
//         console.log("Mobil Dinyalakan.");
//     },
//     drive: function() {
//         console.log("Mobil Berjalan.");
//     },
//     brake: function() {
//         console.log("Mobil Mengerem.");
//     },
//     stop: function() {
//         console.log("Mobil Berhenti.");
//     }
// };

// console.log(car.nama);
// console.log(car.color);

// car.start();
// car.drive();


// let bike = {
//     brand: "United",
//     gear: 6,
//     color: "Blue",

//     start: function() {
//         console.log("Bike Mulai Dikayuh");
//     },
//     drive: function() {
//         console.log("Bike Berjalan");
//     },
//     brake: function() {
//         console.log("Bike Mengerem");
//     },
//     stop: function() {
//         console.log("Bike Berhenti");
//     },

// };

// console.log(bike.brand);
// console.log(bike.gear);
// console.log(bike.color);

// bike.start();
// bike.drive();
// bike.brake();
// bike.stop();


// function Car(nama, model, color, weight) {
//     this.nama = nama;
//     this.model = model;
//     this.color = color;
//     this.weight = weight;

//     this.start = function() {
//         console.log(`${this.nama} Sedang Dinyalakan.`);
//     };
//     this.drive = function() {
//         console.log(`${this.nama} Sedang Berjalan.`);
//     };
// }

// let car1 = new Car("Toyota", 2020, "Blue", "1000kg");
// let car2 = new Car("Honda", 2021, "Red", "950kg");

// car1.start();
// car2.drive();


// class Car {
//     constructor(nama, model, color) {
//         this.nama = nama;
//         this.model = model;
//         this.color = color; 
//     }

//     start() {
//         console.log(`${this.nama} Dinyalakan.`);
//     }
//     drive() {
//         console.log(`${this.nama} Berjalan.`);
//     }
// }

// let car1 = new Car("Toyota", 2021, "Blue");
// car1.start();


// class bike {
//     constructor(brand, gear, color) {
//         this.brand = brand;
//         this.gear = gear;
//         this.color = color;
//     }

//     start() {
//         console.log(`${this.brand} Mulai Dikayuh.`);
//     }
    
//     drive() {
//         console.log(`${this.brand} Berjalan.`);
//     }
// }

// let bike1 = new bike("United", 6, "Blue");
// bike1.start();
// bike1.drive();


class mahasiswa {
    constructor(nama, nim, jurusan, angkatan) {
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
        this.angkatan = angkatan;
    }

    introduce() {
        console.log(`Halo, saya ${this.nama}. mahasiswa ${this.jurusan} angkatan ${this.angkatan}.`);
    }
    issenior() {
        if (this.angkatan < 2025) {
            console.log(`${this.nama} telah terdaftar sebagai mahasiswa ${this.jurusan}.`);
        }else {
            console.log(`${this.nama} adalah mahasiswa baru di ${this.jurusan}.`);
        }
    }
}

mahasiswa1 = new mahasiswa("Joy", "123456", "Ilmu Komputer", 2025);
mahasiswa1.introduce();
mahasiswa1.issenior();