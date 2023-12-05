class Carro {
    marca;
    cor;
    kmPorLitro;


    constructor(marca, cor, kmPorLitro) {
        this.marca = marca;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;
    }
    
    calcularGastoDePercurso(distanciaKm, valorCombustivel) {
        return (distanciaKm*this.kmPorLitro*valorCombustivel);
    }

}
const creta = new Carro('hyundai', 'azul', 1/14);
console.log(creta.calcularGastoDePercurso(55, 5));
