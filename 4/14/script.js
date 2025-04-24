document.getElementById(id_formulario).addEventListener("submit", function (e) {
  e.preventDefault();

  const numero = document.getElementById("id_numero");
  const operacao = document.getElementById("id_operacao");
  const resultado = document.getElementById("id_resultado");

  switch (operacao) {
    case "+":
      let mostrar = "";
      for (let i = 1; i < 11; i++) {
        mostrar += `${numero} + ${i} = ${numero + i}\n`;
        console.log(mostrar);
      }
      resultado.innerHTML = mostrar;

      break;

    case "-":
      let mostrar2 = "";
      for (let i = 1; i < 11; i++) {
        mostrar2 += `${numero} + ${i} = ${numero - 1}\n`;
        console.log(mostrar2);
      }
      resultado.innerHTML = mostrar2;

      break;

    case "*":
      let mostrar3 = "";
      for (let i = 1; i < 11; i++) {
        mostrar3 += `${numero} + ${i} = ${numero * i}\n`;
        console.log(mostrar3);
      }
      resultado.innerHTML = mostrar3;

      break;

    case "/":
      let mostrar4 = "";
      for (let i = 1; i < 11; i++) {
        mostrar4 += `${numero} + ${i} = ${numero * i}\n`;
        console.log(mostrar4);
      }
      resultado.innerHTML = mostrar4;

      break;
  }
});
