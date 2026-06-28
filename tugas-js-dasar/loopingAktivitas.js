console.log("$ node loopingAktivitas.js");

for (let i = 1; i <= 20; i++){

    if(i % 3 === 0 && i % 2 === 1 ){
        console.log(i + " - uji ");
    }
     else if (i % 3 === 0 && i % 2 === 0){
        console.log(i + " - sertif");}

    else if (i % 2 === 1){
        console.log(i + " - apel");}
        
        else {
            console.log(i + " - pelatihan");
        }
}
