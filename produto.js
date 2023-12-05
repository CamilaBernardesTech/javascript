/* Condição de pagamento:
1 - débito
2 - dinheiro ou pix
3 - 2x
4 - Acima de 2x */

const valorEtiqueta = 100;
const condicaoPagamento = 4;

let jurosParcelamento = valorEtiqueta*0.10;
let descontoDebito = valorEtiqueta*0.10;
let descontoDinheiroPix = valorEtiqueta*0.15;

if(condicaoPagamento === 1){
    console.log('Você recebeu um desconto, o valor que irá pagar é: R$'+(valorEtiqueta - descontoDebito));
}else if(condicaoPagamento === 2){
    console.log('Você recebeu um desconto, o valor que irá pagar é: R$'+(valorEtiqueta - descontoDinheiroPix));
}else if(condicaoPagamento === 3){
    console.log('Você pode parcelar em até duas vezes sem juros: R$'+(valorEtiqueta));
}else{
    console.log('Você irá parcelar suas compras em mais de 2x e será cobrado juros de 10%, o valor da sua compra é de: R$'+(valorEtiqueta + jurosParcelamento));
}


