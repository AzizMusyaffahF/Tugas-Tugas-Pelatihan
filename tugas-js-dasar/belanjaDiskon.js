console.log("$ node belanjaDiskon,js");
console.log("===== Rincian Pembelian =====");

// pembelian barang
let headset = 225000;
let mouse = 150000;
let keyboard = 350000;
console.log("Headset =Rp. ", headset);
console.log("Mouse = Rp.",mouse);
console.log("Keyboard = Rp.", keyboard);
console.log("");
console.log("Total Belanja =", headset+mouse+keyboard);

// diskon pembayaran
let total = headset+mouse+keyboard;
let diskon = 0.1;
let diskonRp = diskon * total;
let hasilAkhir = total-diskonRp
console.log("Diskon =", diskon * 100 + "%");

// diskon setelah belanja
console.log("Total Setelah Diskon = Rp.", hasilAkhir);

//uang pembayaran dan kembalian
let pembayaran = 800000;
let kembalian = pembayaran - hasilAkhir 
console.log("Pembayaran = Rp.", pembayaran);
console.log("Kembalian = Rp.", kembalian);