

const IMC = () => {


let altura = document.querySelector("#Altura").value;
altura = Number(altura.replace(",","."))

let peso = document.querySelector("#Peso").value;
peso = Number(peso.replace(",","."))

let nome = document.querySelector("#Nome").value;

let result_IMC = document.querySelector("#result_IMC");

if(altura > 0 & peso  > 0){
let resultado = peso /(altura ** 2)

let classificação = "";

resultado < 18.5 ? classificação = "abaixo do peso" :
resultado <= 24.9 ? classificação = "peso normal" : 
resultado <= 29.9 ? classificação = "com excesso de peso" :
resultado <= 34.9 ? classificação = "com Obesidade classe I" : 
resultado <= 39.9 ? classificação = "com Obesidade classe II" :  
resultado >= 40 ? classificação = "com Obesidade classe III" : classificação = "outro"

result_IMC.innerHTML = `${nome} está com ${classificação} \n, Porque : "${peso} /(${altura} * ${altura} ) = ${resultado.toFixed(2)}" que é ${classificação}`
} else {
    result_IMC.innerHTML = `Insira números válidos`
}

}

const Limpar = () =>{

let L_altura = document.querySelector("#Altura");
L_altura.value = ""

let L_peso = document.querySelector("#Peso");
L_peso.value = "";

let L_nome = document.querySelector("#Nome");
L_nome.value = "";
};