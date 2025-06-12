class projeto {
  constructor(titulo, orientador) {
    this.titulo = titulo;
    this.orientador = orientador;
  }

  getTitulo() {
    return this.titulo;
  }

  getOrientador() {
    return this.orientador;
  }
  texto() {
    return `Título : ${this.titulo} || Orientador : ${this.orientador} `;
  }
}

const projetos_arrey = [];
let Projeto = JSON.parse(localStorage.getItem("projetos"));

let formulario = document.getElementById("formulario");

// formulario.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("entrou");

//   const titulo = document.getElementById("id_titulo").value;
//   console.log(titulo);

//   const orientador = document.getElementById("id_orientador").value;

//   const solicit = new projeto(titulo, orientador);
//   projetos_arrey.push({
//     titulo: solicit.getTitulo(),
//     orientador: solicit.getOrientador(),
//   });

//   localStorage.setItem("projeto", JSON.stringify(projetos_arrey));
//   console.log(projetos_arrey);
// });

document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const titulo = document.getElementById("id_titulo").value;
    const orientador = document.getElementById("id_orientador").value;

    const solicit = new projeto(titulo, orientador);
    projetos_arrey.push({
      titulo: solicit.getTitulo(),
      orientador: solicit.getOrientador(),
    });

    localStorage.setItem("projetos", JSON.stringify(projetos_arrey));

    document.getElementById("formulario").reset();
  });

// document.getElementById("id_listar").addEventListener("click", (event) => {
//   event.preventDefault();

//   // Recupera do localStorage
//   const projetoJSON = localStorage.getItem("projetos");

//   if (projetoJSON) {
//     // Converte para objeto
//     const obj = JSON.parse(projetoJSON);

//     // Restaura o protótipo da classe
//     Object.setPrototypeOf(obj, }e normalmente
//     document.getElementById("ListaProjetos").innerHTML = obj.texto();
//   }
// });

document.getElementById("id_listar").addEventListener("click", function () {
  const listaDiv = document.getElementById("listaProjetos");
  const projetos = JSON.parse(localStorage.getItem("projetos")) || [];

  listaDiv.innerHTML = "";

  if (projetos.length === 0) {
    listaDiv.innerHTML = "<p>Nenhum projeto cadastrado.</p>";
    return;
  }

  projetos.forEach((projeto, index) => {
    const containerProjeto = document.createElement("div");

    const paragrafo = document.createElement("p");
    paragrafo.innerHTML = `<strong>Título:</strong> ${projeto.titulo}<br/><strong>Orientador:</strong> ${projeto.orientador}`;
    containerProjeto.appendChild(paragrafo);

    // Botão Editar
    const botaoEditar = document.createElement("button");
    botaoEditar.textContent = "Editar";
    botaoEditar.classList.add("btn-editar");
    botaoEditar.addEventListener("click", function () {
      const dialogTela = document.getElementById("dialogTela");
      const tituloInput = document.getElementById("edit_titulo");
      const orientadorInput = document.getElementById("edit_orientador");
      const alterarBtn = document.getElementById("alterar");
      const fecharBtn = document.getElementById("fechar");

      // Popula os campos da modal com os valores atuais
      tituloInput.value = projeto.titulo;
      orientadorInput.value = projeto.orientador;

      dialogTela.showModal(); // Exibe a tela modal

      fecharBtn.onclick = () => {
        dialogTela.close();
      };

      // Atualizar o objeto no localStorage ao clicar em "Alterar"
      alterarBtn.onclick = () => {
        projetos[index].titulo = tituloInput.value;
        projetos[index].orientador = orientadorInput.value;

        localStorage.setItem("projetos", JSON.stringify(projetos));

        dialogTela.close();
        document.getElementById("id_listar").click(); // Atualiza a lista exibida
      };
    });

    containerProjeto.appendChild(botaoEditar);

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.classList.add("btn-excluir");
    botaoExcluir.addEventListener("click", function () {
      projetos.splice(index, 1);
      localStorage.setItem("projetos", JSON.stringify(projetos));
      document.getElementById("id_listar").click(); // Atualiza a lista
    });
    containerProjeto.appendChild(botaoExcluir);

    listaDiv.appendChild(containerProjeto);
  });
});

// document.getElementById("id_listar").addEventListener("click", function () {
//   const listaDiv = document.getElementById("listaProjetos");
//   const projetos = JSON.parse(localStorage.getItem("projetos")) || [];

//   // Limpa a lista antes de recriá-la
//   listaDiv.innerHTML = "";

//   if (projetos.length === 0) {
//     listaDiv.innerHTML = "<p>Nenhum projeto cadastrado.</p>";
//     return;
//   }

//   // Para cada projeto, crie um container individual
//   projetos.forEach((projeto) => {
//     // Cria um container para o projeto
//     const containerProjeto = document.createElement("div");

//     // Cria um parágrafo com as informações do projeto
//     const paragrafo = document.createElement("p");
//     paragrafo.innerHTML = `<strong>Título:</strong> ${projeto.titulo}<br/><strong>Orientador:</strong> ${projeto.orientador}`;
//     containerProjeto.appendChild(paragrafo);

//     // Cria o botão Editar e vincula o evento
//     const botaoEditar = document.createElement("button");
//     botaoEditar.textContent = "Editar";
//     botaoEditar.addEventListener("click", function (event) {
//       event.preventDefault();

//       const dialogTela = document.getElementById("dialogTela");
//       let fechar = document.getElementById("fechar");
//       let titulo = document.getElementById("edit_titulo")
//       let orientador = document.getElementById("edit_orientador")
//       let alterar = document.getElementById("alterar")
//       let meuObjeto = JSON.parse(localStorage.getItem("projetos")) || {};

//       dialogTela.showModal(); // Exibe a tela modal

//       console.log("Modal exibida:", dialogTela);

//       fechar.onclick = (e) => {
//         dialogTela.close();
//       };

//       alterar.onclick = (e) => {
//         localStorage.setItem("projetos", )
//       }

//     });
//     containerProjeto.appendChild(botaoEditar);

//     // Cria o botão Excluir (lógica de exclusão não implementada neste exemplo)
//     const botaoExcluir = document.createElement("button");
//     botaoExcluir.textContent = "Excluir";
//     containerProjeto.appendChild(botaoExcluir);

//     // Adiciona um separador
//     const separador = document.createElement("hr");
//     containerProjeto.appendChild(separador);

//     // Adiciona o container do projeto à lista principal
//     listaDiv.appendChild(containerProjeto);raiz de 441
//   });
// });
