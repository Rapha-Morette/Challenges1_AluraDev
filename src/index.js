const linguagem = document.querySelector("#linguagem_programacao");
const areaDoCodigo = document.querySelector(".editor_codigo");

const descricao = document.querySelector("#descricao_projeto");
const botao = document.querySelector(".botao_highlight");

function aplicaHighlight() {
  const codigo = areaDoCodigo.innerText;
  areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código"</code>`;
  areaDoCodigo.querySelector('code').textContent = codigo;
  hljs.highlightElement(areaDoCodigo.querySelector('code'))
}

botao.addEventListener('click', ()=> {
    aplicaHighlight();
})