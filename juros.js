/* Exercício para praticar function: serão criados funções para aplicar descontos e juros */

function aplicarDesconto(desconto, valor){
    return (valor - (valor*(desconto/100)));
}

function aplicarJuros(valor, juros){
    return (valor + (valor*(juros/100)));
}
const valorEtiqueta = 100;
const condicaoPagamento = 4;

if(condicaoPagamento === 1){
    console.log('Você recebeu um desconto, o valor que irá pagar é: R$'+(aplicarDesconto(10, valorEtiqueta)));
}else if(condicaoPagamento === 2){
    console.log('Você recebeu um desconto, o valor que irá pagar é: R$'+(aplicarDesconto(15, valorEtiqueta)));
}else if(condicaoPagamento === 3){
    console.log('Você pode parcelar em até duas vezes sem juros: R$'+(valorEtiqueta));
}else{
    console.log('Você irá parcelar suas compras em mais de 2x e será cobrado juros de 10%, o valor da sua compra é de: R$'+(aplicarJuros(valorEtiqueta, 10)));
}


