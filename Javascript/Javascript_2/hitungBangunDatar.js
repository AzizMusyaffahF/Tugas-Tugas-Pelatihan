console.log("$ node hitungBangunDatar.js");
console.log("===== MENGHITUNG LUAS DAN KELILING BANGUN DATAR =====");
console.log("");
console.log(">> Luas Bangun Datar <<");

// LUAS BANGUNAN
// Persegi
function persegiL (sisiP){
    return sisiP * sisiP;
}
// persegi panjang
function persegiPanjangL (panjang, lebar){
    return panjang * lebar;
}
// lingkaran
function lingkaranL(r){
    return (22/7 * (r **2)).toFixed(2);
}
// segitiga sama sisi
function segitigaSisiL (alas, tinggi){
    return 1/2 * alas * tinggi;
}

function tampilkanLuasBangunan (sisiP, panjang, lebar, r, alas, tinggi){
    console.log("Luas Persegi Dengan Sisi", sisiP, "Adalah", persegiL(sisiP));
    console.log("Luas Persegi Panjang Dengan Panjang", panjang, "Dan Lebar", lebar, "adalah", persegiPanjangL(lebar, panjang));
    console.log("Luas Lingkaran Dengan Jari - Jari", r, "Adalah", lingkaranL(r));
    console.log("Luas Segitiga Dengan Alas", alas, "Dan Tinggi", tinggi, "Adalah", segitigaSisiL(alas, tinggi));
}
tampilkanLuasBangunan (8, 9, 3, 6, 6, 4);

// KELILING BANGUNAN
console.log("");
console.log(">> Keliling Bangun Datar <<");
function persegiK (sisiP){
    return 4 * sisiP;
}
function persegiPanjangK (panjang, lebar){
return 2 * panjang * lebar;
}
function lingkaranK (r){
    return ((2)* 22/7 * (r)).toFixed(2);
}
function segitigasisiK (sisiS){
    return 3 * sisiS;
}
function tampilkanKelilingBangunan (sisiP, panjang, lebar, r, sisiS){
    console.log("Keliling Persegi Dengan Sisi", sisiP, "Adalah", persegiK(sisiP));
    console.log("Keliling Persegi Panjang Dengan Panjang", panjang, "Dan Lebar", lebar, "Adalah", persegiPanjangK(panjang, lebar));
    console.log("Keliling Lingkaran Dengan Jari - Jari", r, "Adalah", lingkaranK(r));
    console.log("Keliling Segitiga Dengan Sisi", sisiS, "Adalah", segitigasisiK(sisiS));
}
tampilkanKelilingBangunan (8, 9, 3, 6, 6);