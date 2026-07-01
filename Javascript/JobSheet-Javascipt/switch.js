

let bulan = 15;
let namaBulan;

switch (bulan) {
    case 1:
        namaBulan = "Januari";
        break;
    case 2:
        namaBulan = "Februari";
        break;

    case 3:
        namaBulan = "Maret";
        break;

    case 4:
        namaBulan = "april";
        break;

        case 5:
        namaBulan = "mei";
        break;

        case 6:
        namaBulan = "juni";
        break;

        case 7:
        namaBulan = "Juli";
        break;

        case 8:
        namaBulan = "august";
        break;

        case 9:
        namaBulan = "september";
        break;

        case 10:
        namaBulan = "october";
        break;

        case 11:
        namaBulan = "november";
        break;

        case 12:
        namaBulan = "december";
        break;

    default:
        namaBulan = "Nomor bulan tidak valid";
}

console.log("Bulan ke-" + bulan + " adalah " + namaBulan);