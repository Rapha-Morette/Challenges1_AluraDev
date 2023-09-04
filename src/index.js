const linguagem = document.querySelector("#linguagem_programacao");
const areaDoCodigo = document.querySelector(".editor_codigo");
const backgroundCor = document.querySelector(".editor__codigo");
const descricao = document.querySelector("#descricao_projeto");
const botao = document.querySelector(".botao_highlight");
const btnCorBackground = document.querySelector(".btn_background");

function aplicaHighlight() {
  const codigo = areaDoCodigo.innerText;
  areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código"</code>`;
  areaDoCodigo.querySelector("code").textContent = codigo;
  hljs.highlightElement(areaDoCodigo.querySelector("code"));
}

botao.addEventListener("click", () => {
  aplicaHighlight();
});

function mudaCorEditor(cor) {
  switch (cor) {
    case 'azul':
      backgroundCor.style.backgroundColor = "#6bd1ff"
      break;
    case 'verde':
      backgroundCor.style.backgroundColor = "#27C93F"
      break;
  }
  // if(cor === 'azul'){
  //   console.log("azul")
  //   backgroundCor.style.backgroundColor = "#fff"
  // } else if(btnCorBackground === 'verde') {
  //   backgroundCor.style.backgroundColor = "#000"
  // }
}
