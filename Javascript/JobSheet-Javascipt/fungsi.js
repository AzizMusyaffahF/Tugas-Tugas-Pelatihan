// fungsi untuk menghitung luas persegi
function hitungLuas(sisi){
    return sisi * sisi;
}

// fungsi untuk menghitung keliling persegi
function hitungKeliling(sisi){
    return 4 * sisi;
}

// fungsi untuk menampilkan Hasil
function tampilkanPersegi(sisi){
    console.log("==== Persegi ====");
    console.log("sisi   :", sisi);
    console.log("luas persegi:", hitungLuas(sisi));
    console.log("keliling persegi:", hitungKeliling(sisi));
    console.log("=================\n");
}

// pemanggil fungsi
tampilkanPersegi(4);
tampilkanPersegi(4);