/*const peso = 80;
const altura = 1.83;

let imc = peso / Math.pow(altura,2);
    console.log(imc);

if(imc <= 18.5){
    console.log('Abaixo do peso');
}else if(imc >= 18.5 && imc <= 25){
    console.log('Peso ideal');
}else if(imc >= 25 && imc <= 30){
    console.log('Acima do peso');
}else if(imc >= 30 && imc <= 40){
    console.log('Obeso');
}else {
    console.log('Obesidade Grave');
}*/
function calcularImc(peso, altura){
    return peso/Math.pow(altura,2);
}
function classificarImc(imc){
    if(imc <= 18.5){
        return'Abaixo do peso';
    }else if(imc >= 18.5 && imc <= 25){
        return'Peso ideal';
    }else if(imc >= 25 && imc <= 30){
        return'Acima do peso';
    }else if(imc >= 30 && imc <= 40){
        return'Obeso';
    }else {
        return'Obesidade Grave';
    }
}

(function main(){
    const peso = 80;
    const altura = 1.83;

    let imc = calcularImc(peso, altura);
    console.log(classificarImc);
})();

