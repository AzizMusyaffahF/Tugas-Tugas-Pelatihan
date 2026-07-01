// cetak bilangan genap
let ulang = true;

do{
    let i = 1;
    console.log("menampilkan bilangan genap dari 50:");
    while (i <= 50){
        if (i % 2 === 0){
            console.log(i);
        }
        i++
    }
    // ubah ulang jadi false agar tidak mengulang lagi
    ulang = false
} while (ulang);
