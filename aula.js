const precoEtanol = 5.79;
const precoGasolina = 6.35;
let tipoCombustivel = 'Gasolina';
const kmPorLitro = 12;
let distanciaKm = 150;

let totalEtanol = distanciaKm/kmPorLitro*precoEtanol;
let totalGasolina = distanciaKm/kmPorLitro*precoGasolina;

if(tipoCombustivel === 'Etanol'){
    console.log(totalEtanol.toFixed(2));
}else{
    console.log(totalGasolina.toFixed(2));  
}



/*condicionais

const numero = 3;
const numeroPar = (numero % 2) === 0;


if(numeroPar){
    console.log('Par');
}else{
    console.log('Impar');
}

*/

