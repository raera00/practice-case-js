//practice function
function printHeart() {
    console.log("<3");
}
printHeart();

function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 3)); // 6
console.log(multiply(9, 9)); // 81
console.log(multiply(5, 4)); // 20

let animal = "Giant Pacific Octopus";
function observe() {
    let animal = "Pajama Squid";
    console.log(animal);
}
observe();

let deadlyAnimal = "Blue-Ringed Octopus";
function handleAnimal() {
    let deadlyAnimal = "Scorpionfish";
    console.log(deadlyAnimal);
}
handleAnimal();
console.log(deadlyAnimal);

const sayHello = (name) => `Hello ${name}!`;

console.log(sayHello("Hagrid")); // "Hello Hagrid!"
console.log(sayHello("Luna"));   // "Hello Luna!"


// practice loop
for (let i = 0; i < 6; i++) {
    console.log("Da ba dee da ba daa");
}

for (let i = 25; i >= 0; i -= 5) {
    console.log(i);
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
}

// practice exception, maaf saya tidak tau case nya karena izin kelas tatap muka
function divideNumbers(a, b) {
    try {
        // input berupa angka
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("Input harus berupa angka.");
        }

        // pembagi (b) tidak nol
        if (b === 0) {
            throw new Error("Pembagian dengan nol tidak diperbolehkan.");
        }

        // pembagian jika input valid
        return a / b;
    } catch (error) {
        // pesan kesalahan
        console.error("Terjadi kesalahan: " + error.message);
        return null; // Mengembalikan nilai null jika terjadi kesalahan
    }
}

console.log(divideNumbers(20, 4)); // Output: 5

// practice array
// Membuat antrian awal
let antrian = ["Ray", "Fiki", "Fadhilla", "Farah"];

// Nabila datang, ditambahkan ke antrian
antrian.push("Nabila");

// Maza dan Elsi datang, ditambahkan ke antrian
antrian.push("Maza", "Elsi");

// Antrian terakhir (Elsi) tidak jadi antri dan pulang ke rumah
antrian.pop();

// Antrian pertama (Ray) sudah mendapatkan belanjaannya dan keluar dari antrian
antrian.shift();

// Antrian kedua (Fiki) juga sudah mendapatkan belanjaannya dan keluar dari antrian
antrian.shift();

// Tomi datang dan nyerobot di antrian paling depan
antrian.unshift("Tomi");

// Menampilkan antrian akhir
console.log(antrian);
