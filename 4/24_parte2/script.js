class Pedido {
  static numero = 1;
  constructor(nome, ingredientes, tamanho, massa, endereco) {
    this.nome = nome;
    this.ingredientes = ingredientes;
    this.tamanho = tamanho;
    this.massa = massa;
    this.endereco = endereco;
    this.numeroPedido = Pedido.numero++;
  }
}

const pedidos = [];

document.getElementById("form_pizza").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("id_nome").value;
  const endereco = document.getElementById("id_endereco").value;
  const massa = document.getElementById("id_massa").value;

  // Ingredientes como array
  const ingredientesMarcados = document.querySelectorAll(
    'input[name="ingredientes"]:checked'
  );
  const ingredientes = Array.from(ingredientesMarcados).map(
    (item) => item.value
  );

  // Tamanho (radio)
  let tamanho = document.querySelector('input[name="tamanho"]:checked');
  tamanho = tamanho ? tamanho.value : "Não selecionado";

  // Criar e adicionar o pedido
  const pedido = new Pedido(nome, ingredientes, tamanho, massa, endereco);
  pedidos.push(pedido);

  // Atualizar interface
  const container = document.getElementsByClassName("pedidos-realizados")[0];
  container.innerHTML = ""; // limpa

  pedidos.forEach((pedido) => {
    const pedidoDiv = document.createElement("div");
    pedidoDiv.classList.add("pedido");

    pedidoDiv.innerHTML = `
          <h3>Pedido #${pedido.numeroPedido} de ${pedido.nome}</h3>
          <p>Ingredientes: ${pedido.ingredientes.join(", ")}</p>
          <p>Tamanho: ${pedido.tamanho}</p>
          <p>Massa: ${pedido.massa}</p>
          <p>Endereço: ${pedido.endereco}</p>
          <hr>
        `;

    container.appendChild(pedidoDiv);
  });

  // Alerta
  alert(
    pedidos.map(
      (pedido) =>
        `\n\nPedido de: ${
          pedido.nome
        }\nIngredientes: ${pedido.ingredientes.join(", ")}\nTamanho: ${
          pedido.tamanho
        }\nMassa: ${pedido.massa}\nEndereço: ${pedido.endereco}`
    )
  );
});
