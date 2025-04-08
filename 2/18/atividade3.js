const verificar = () =>{
let numero = Number(document.querySelector("#numero").value);
let resultado = document.getElementById("resultado")

if (numero <18) {
    resultado.innerHTML = "NÃO ESTÁ APTO PARA INÍCIO";
} else if (numero > 17 && numero < 50){
    resultado.innerHTML = "ESTÁ APTO PARA INÍCIO <br> <strong>POREM PRECISA DE RENOVAÇÃO A CADA 10 ANOS</strong>";
} else if(numero > 49 && numero < 70) {
    resultado.innerHTML = "ESTÁ APTO PARA INÍCIO <br>  <strong>POREM PRECISA DE RENOVAÃO A CADA 5 ANOS</strong>";
} else if (numero > 69) {
    resultado.innerHTML = "ESTÁ APTO PARA INÍCIO <br>  <strong>POREM PRECISA DE RENOVAÇÃO A CADA 3 ANOS</strong>";
}
}