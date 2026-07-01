console.log("Aritmatika");
let a = 150;
let b = 40;

console.log("penjumlahan:", a+b);
console.log("Pengurangan", a-b);
console.log("Perkalian:", a*b);
console.log("Pembagian:", a/b);
console.log("Modulus (sisa Pembagian:"), a%b;

// assigment
console.log("Assigment");
let x = 35;
x+= 5;
console.log("x += 5 =", x);
x-= 2;
console.log("x -= 2 =", x);
x*= 3;
console.log("x *= 3 =", x);
x /= 2;
console.log("x /= 2 =", x);

// perbadingan
console.log("perbandingan");
let c = 10;
let d = "10";

console.log("c == d:", c==d);
console.log("c === d:", c===d);
console.log("c != d:", c!=d);
console.log("c !== d:", c!==d);
console.log("c > 5:", c>5);
console.log("c <= 10:", c<=10);

// kondisonal
console.log("kondisional");
let umur = 30;
let punyaktp = false;

console.log("boleh buat sim?", umur >= 17 && punyaktp);
console.log("remaja atau dewasa?", umur >= 13 || umur >= 20);
console.log("bukan anak anak?", !(umur < 13));