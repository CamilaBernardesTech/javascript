class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

     descubraImc(){
        return this.peso/(this.altura*this.altura);
    }

        classificarImc(){
            const imc = this.descubraImc();
            if(imc <= 18.5){
                return 'Abaixo do peso';
            }else if(imc >= 18.5 && imc <= 25){
                return 'Peso ideal';
            }else if(imc >= 25 && imc <= 30){
                return 'Acima do peso';
            }else if(imc >= 30 && imc <= 40){
                return 'Obeso';
            }else {
                return 'Obesidade Grave';
            }
            
    }
}

    const camila = new Pessoa('camila', 63, 1.65);
    console.log(camila.classificarImc());
    const heider = new Pessoa('Heider', 80, 1.83);
    console.log(heider.classificarImc());
    
