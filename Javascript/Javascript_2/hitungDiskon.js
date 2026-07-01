console.log("$ node hitungDiskon.js");

// pembelian makanan
let nasiGoreng = 25000;
console.log("Nasi Goreng= Rp.", nasiGoreng);
let mieGoreng = 22000;
console.log("Mie Goreng= Rp.", mieGoreng);
let capcay = 32000;
console.log("Capcay= Rp.", capcay);

// total harga jumlah makanan
console.log("Harga Total= Rp.", nasiGoreng+mieGoreng+capcay);

// diskon makanan
let total = nasiGoreng+mieGoreng+capcay;
let diskon = 0.1;
let diskonRp = total * diskon;
let setelahDiskon = total - diskonRp
console.log("Diskon =", diskon * 100 + "%");
console.log("Harga Setelah Diskon = Rp.", setelahDiskon);

// pembayaran
let pembayaran = 100000;
console.log("Pembayaran = Rp.", pembayaran);

// pembayaran selesai
console.log("Kembalian = Rp.", pembayaran-setelahDiskon);
